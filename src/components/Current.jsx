import { isCurrentHour, printTime } from '../utilities/general';
import { version } from '../../package.json';
import styles from './Current.module.css';

// ??? display time
export default function Current({
  lat,
  long,
  now,
  setRefresh,
}) {
  const time = printTime(now.time);
  const isCurrent = isCurrentHour(now.time);

  return (
    <div className={styles.main}>
      <div className={styles.index}>
        { now.uvi }
      </div>
      <div>
        { time }
      </div>
      <div>{`Lat: ${lat}`}</div>
      <div>{`Long: ${long}`}</div>
      { !isCurrent && (
        <button onClick={() => setRefresh(true)}>
          Refresh
        </button>
      ) }
      <div className={styles.version}>
        {`v${version}`}
      </div>
    </div>
  );
}
