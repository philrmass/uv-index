import {
  getLevel,
  printDay,
  printTime,
} from '../utilities/general';
import styles from './Current.module.css';

export default function Current({
  address,
  current,
  onLocationClick,
  onValueClick,
}) {
  const day = printDay(current?.time);
  const time = printTime(current?.time);
  const level = getLevel(current?.uvi);
  const value = current?.uvi ?? '?';

  return (
    <div className={styles.main}>
      <div
        className={`${styles.index} ${level}`}
        onClick={onValueClick}
      >
        { value }
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
