import { useEffect, useState } from 'preact/hooks';
import { useLocalStorage, useVisibility } from 'utilities/hooks';
import { determineAddress, isCurrentHour } from '../utilities/general';
import Current from './Current';
import Graph from './Graph';
import styles from './Home.module.css';

const portlandLat = 45.475901;
const portlandLong = -122.649002;

// ??? implement graph, grey for past
// ??? scroll to current time on viisible
// ??? button to go to now
// ??? integrate forecast with all
// ??? better colors
// ??? make location clickable for new location

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

// ??? implement, update the correct bins
function addForecast(_all, forecast) {
  return [...forecast];
}

export default function Home() {
  const [refresh, setRefresh] = useState(false);
  const [lat, setLat] = useLocalStorage('uLat', portlandLat);
  const [long, setLong] = useLocalStorage('uLong', portlandLong);
  const [address, setAddress] = useLocalStorage('uAddress', null);
  const [all, setAll] = useLocalStorage('uAll', []);
  const [now, setNow] = useLocalStorage('uNow', {}); 
  const isVisible = useVisibility();
  const isCurrentTime = isCurrentHour(now.time);

  useEffect(() => {
    if (isVisible) {
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

      if (!isCurrentTime) {
        setRefresh(true);
      }
    }
  }, [isVisible, isCurrentTime, setLat, setLong]);

  useEffect(() => {
    (async () => {
      const data = await getAddress(lat, long);
      const next = determineAddress(data, lat, long);

      if (next && next !== address) {
        setAddress(next);
        setRefresh(true);
      }
    })();
  }, [lat, long, address, setAddress]);

  useEffect(() => {
    if (refresh) {
      (async () => {
        const data = await getData(lat, long);
        setNow(data.now);
        setAll((last) => addForecast(last, data.forecast));
        setRefresh(false);
      })();
    }
  }, [refresh, lat, long, setAll, setNow]);

  const handleLocationClick = () => {
    console.log('LOC-CLICK');
  };

  return (
    <div className={styles.screen}>
      <div className={styles.content}>
        <div className={styles.current}>
          <Current
            address={address}
            now={now}
            onLocationClick={handleLocationClick}
          />
        </div>
        <Graph
          all={all}
          now={now}
        />
      </div>
    </div>
  );
}
