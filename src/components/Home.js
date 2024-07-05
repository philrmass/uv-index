import { useEffect, useState } from 'preact/hooks';
import { useLocalStorage } from 'utilities/hooks';
import Current from './Current';
import Graph from './Graph';
import styles from './Home.module.css';

// ??? set lat and long from location on visible
// ??? refresh on visible when lat, long changed enough or new hour
// ??? integrate forecast with all
// ??? graph all values, gey for past
// ??? scroll to current time on viisible
// ??? button to go to now

// ??? get location name on new lat, long
//https://nominatim.openstreetmap.org
//https://nominatim.openstreetmap.org/reverse?lat=<value>&lon=<value>&<params>
//format=json,geocodejson,jsonv2
//addressdetails=1

// ??? add Graph with scroll, with Now button
// ??? grey out old values

async function getData(lat, long) {
  const baseUrl = 'https://currentuvindex.com/api/v1/uvi';
  const url = `${baseUrl}?latitude=${lat}&longitude=${long}`;
  const response = await fetch(url);

  return await response.json();
}

// ??? implement, update the correct bins
function addForecast(_all, forecast) {
  return [...forecast];
}

export default function Home() {
  const [refresh, setRefresh] = useState(false);
  const [lat, _setLat] = useLocalStorage('uLat', 45.475901);
  const [long, _setLong] = useLocalStorage('uLong', -122.649002);
  const [all, setAll] = useLocalStorage('uAll', []);
  const [now, setNow] = useLocalStorage('uNow', {}); 

  useEffect(() => {
    if (refresh) {
      (async () => {
        const data = await getData(lat, long);
        setNow(data.now);
        setAll((last) => addForecast(last, data.forecast));
        setRefresh(false);
      })();
    }
  }, [lat, long, refresh, setAll, setNow]);

  return (
    <div className={styles.screen}>
      <div className={styles.content}>
        <div className={styles.current}>
          <Current
            lat={lat}
            long={long}
            now={now}
            setRefresh={setRefresh}
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
