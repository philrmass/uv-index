import { useMemo } from 'preact/hooks';
import {
  getLevel,
  printDay,
  printTime,
} from '../utilities/general';
import styles from './Graph.module.css';

function getDays(all) {
  const byTime = all.sort(({ time }) => time);
  const withDay = byTime.map((value) => ({
    ...value,
    at: value.time,
    day: printDay(value.time),
    level: getLevel(value.uvi),
    time: printTime(value.time),
  }));

  const weeks = Map.groupBy(withDay, ({ day }) => day);
  return [...weeks.values()];
}

// ??? uvi on click
// ??? tick mark to label
export default function Graph({ all, now }) {
  const days = useMemo(() => getDays(all), [all]);

  const renderHour = (hour, index) => {
    // ??? calculate height: 0 - 11
    const style = { height: '70%' };
    const time = index % 2 ? ' ' : hour.time;

    return (
      <div key={hour.at} className={styles.hour}>
        <div className={styles.bar}>
          <div
            className={`${styles.fill} ${hour.level}`}
            style={style}
          >
          </div>
        </div>
        <div className={styles.time}>
          { time }
        </div>
      </div>
      /*
      <div key={hour.at} className={styles.hour}>
        <div>
          <div
            className={`${styles.bar} ${hour.level}`}
            style={style}
          />
          <div className={styles.time}>
            { hour.time }
          </div>
        </div>
      </div>
      */
    );
  };

  const renderDay = (hours) => {
    const label = hours.length === 24 ? hours[0].day : ' ';

    return (
      <div key={hours[0].at} className={styles.day}>
        <div className={styles.hours}>
          { hours.map((hour, index) => renderHour(hour, index)) }
        </div>
        <div className={styles.label}>
          { label }
        </div>
      </div>
    );
  };

  return (
    <div className={styles.main}>
      {now.time}
      <div className={styles.graph}>
        { days.map((day) => renderDay(day)) }
      </div>
    </div>
  );
}
