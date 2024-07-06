import {
  getLevel,
  isCurrentHour,
  printDay,
  printTime,
} from '../utilities/general';
import { version } from '../../package.json';
import styles from './Current.module.css';

export default function Current({
  address,
  now,
  onLocationClick,
}) {
  const day = printDay(now.time);
  const time = printTime(now.time);
  const isCurrent = isCurrentHour(now.time);
  const level = getLevel(now.uvi);
  // ??? make location clickable

  return (
    <div className={styles.main}>
      <div className={`${styles.index} ${level}`}>
        { now.uvi }
      </div>
      <div className={styles.info}>
        <div>
          <div>
            <span>{ day }</span>
            <span className={styles.time}>
              { time }
            </span>
          </div>
          <div>{ address }</div>
        </div>
        { !isCurrent && (
          <button onClick={() => onLocationClick(true)}>
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
