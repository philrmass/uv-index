import { useEffect, useState } from 'preact/hooks';
import { useLocalStorage, useVisibility } from 'utilities/hooks';
import { determineAddress, getCurrentHour, processRecord } from '../utilities/general';
import Current from './Current';
import Graph from './Graph';
import Spinner from './Spinner';
import styles from './Home.module.css';

const spinnerMs = 400;
const portlandLat = 45.475901;
const portlandLong = -122.649002;

async function getData(lat, long) {
  const baseUrl = 'https://currentuvindex.com/api/v1/uvi';
  const url = `${baseUrl}?latitude=${lat}&longitude=${long}`;
  const response = await fetch(url);

  return await response.json();
}

async function getAddress(lat, long) {
  const baseUrl = 'https://nominatim.openstreetmap.org/reverse';
  const url = `${baseUrl}?lat=${lat}&lon=${long}&format=json`;
  const response = await fetch(url);
  const { address } = await response.json();

  return address;
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// ??? improve logo (sun with beams)
export default function Home() {
  const [refresh, setRefresh] = useState(false);
  const [spinnerShown, setSpinnerShown] = useState(false);
  const [lat, setLat] = useLocalStorage('uLat', portlandLat);
  const [long, setLong] = useLocalStorage('uLong', portlandLong);
  const [address, setAddress] = useLocalStorage('uAddress', null);
  const [all, setAll] = useLocalStorage('uAll', []);
  const isVisible = useVisibility();
  const currentHour = getCurrentHour();
  const isCurrent = all[0]?.time === currentHour;

  useEffect(() => {
    if (isVisible && (!isCurrent || all.length <= 1)) {
      setRefresh(true);
    }
  }, [isVisible, isCurrent, all.length]);

  useEffect(() => {
    (async () => {
      const start = Date.now();
      setSpinnerShown(true);

      try {
        const data = await getAddress(lat, long);
        const next = determineAddress(data, lat, long);

        if (next && next !== address) {
          setAddress(next);
          setRefresh(true);
        }
      } catch(_e) {}

      const delayMs = spinnerMs - (Date.now() - start);
      await delay(delayMs);
      setSpinnerShown(false);
    })();
  }, [lat, long, address, setAddress]);

  useEffect(() => {
    if (refresh) {
      (async () => {
        const start = Date.now();
        setSpinnerShown(true);
        setRefresh(false);

        try {
          const data = await getData(lat, long);
          const records = [data.now, ...data.forecast];

          setAll(records.map((record) => processRecord(record)));
        } catch(_e) {
          setAll((last) => {
            const filtered = last.filter((record) => record.time >= currentHour);

            if (filtered.length === 0) {
              return [{ time: currentHour }];
            }
            return filtered;
          });
        }

        const delayMs = spinnerMs - (Date.now() - start);
        await delay(delayMs);
        setSpinnerShown(false);
      })();
    }
  }, [refresh, lat, long, setAll, currentHour]);

  const handleLocationClick = () => {
    const hasGeo = typeof navigator.geolocation?.getCurrentPosition === 'function';

    if (hasGeo) {
      navigator.geolocation?.getCurrentPosition((pos) => {
        const newLat = pos.coords.latitude;
        const newLong = pos.coords.longitude;

        setLat(newLat);
        setLong(newLong);
      });
    } else {
      setLat(portlandLat);
      setLong(portlandLong);
    }
  };

  return (
    <div className={styles.screen}>
      <div className={styles.content}>
        <div className={styles.current}>
          <Current
            address={address}
            current={all[0]}
            onLocationClick={handleLocationClick}
            onValueClick={() => setRefresh(true)}
          />
        </div>
        <Graph all={all} />
        { spinnerShown && (
          <div className={styles.spinner}>
            <Spinner />
          </div>
        ) }
      </div>
    </div>
  );
}
