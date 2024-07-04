import { version } from '../../package.json';
import styles from './Current.module.css';

export default function Current({
  lat,
  long,
  now,
  setRefresh,
}) {
  return (
    <div className={styles.main}>
      <div className={styles.index}>
        { now.uvi }
      </div>
      <div>{`Lat: ${lat}`}</div>
      <div>{`Long: ${long}`}</div>
      <button onClick={() => setRefresh(true)}>Refresh</button>
      <div>{`v${version}`}</div>
    </div>
  );
}
