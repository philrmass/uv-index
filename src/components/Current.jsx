import {
  getStyle,
  isCurrentHour,
  printTime,
} from '../utilities/general';
import { version } from '../../package.json';
import styles from './Current.module.css';

export default function Current({
  address,
  now,
  setRefresh,
}) {
  const time = printTime(now.time);
  const isCurrent = isCurrentHour(now.time);
  const level = getStyle(now.uvi);

  return (
    <div className={styles.main}>
      <div className={`${styles.index} ${level}`}>
        { now.uvi }
      </div>
      <div className={styles.info}>
        <div>
          <div>{ time }</div>
          <div>{ address }</div>
        </div>
        { !isCurrent && (
          <button onClick={() => setRefresh(true)}>
            Refresh
          </button>
        ) }
      </div>
      <div className={styles.version}>
        {`v${version}`}
      </div>
    </div>
  );
}
