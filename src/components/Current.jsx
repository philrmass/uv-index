import {
  getLevel,
  printDay,
  printTime,
} from '../utilities/general';
import styles from './Current.module.css';

export default function Current({
  address,
  now,
  onLocationClick,
}) {
  const day = printDay(now.time);
  const time = printTime(now.time);
  const level = getLevel(now.uvi);

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
          <div
            className={styles.location}
            onClick={onLocationClick}
          >
            { address }
          </div>
        </div>
      </div>
    </div>
  );
}
