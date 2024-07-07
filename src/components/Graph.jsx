import { useEffect, useMemo, useRef, useState } from 'preact/hooks';
import { useVisibility } from 'utilities/hooks';
import {
  getLevel,
  printDay,
  printTime,
} from '../utilities/general';
import { version } from '../../package.json';
import styles from './Graph.module.css';

function getDays(all) {
  const byTime = all.sort(({ time }) => time);
  const withDay = byTime.map((value) => ({
    ...value,
    at: value.time,
    day: printDay(value.time),
    level: getLevel(value.uvi),
    time: printTime(value.time),
    hour: (new Date(value.time)).getHours(),
  }));

  const weeks = Map.groupBy(withDay, ({ day }) => day);
  return [...weeks.values()];
}

function getBarPercentage(uvi) {
  const min = 2;
  const range = 100 - min;
  const uviRange = 11;
  const ratio = uvi / uviRange;

  return min + ratio * range;
}

export default function Graph({ all }) {
  const days = useMemo(() => getDays(all), [all]);
  const [popupAt, setPopupAt] = useState(null);
  const [timeoutId, setTimeoutId] = useState();
  const graphRef = useRef();
  const isVisible = useVisibility();

  useEffect(() => {
    graphRef.current.scrollLeft = 0;
  }, [isVisible]);

  const handleBarClick = (at) => {
    clearTimeout(timeoutId);
    setPopupAt(at);
    setTimeoutId(setTimeout(() => setPopupAt(null), 2000));
  };

  const renderHour = (hour) => {
    const percentage = getBarPercentage(hour.uvi);
    const style = { height: `${percentage}%` };
    const time = hour.hour % 2 ? ' ' : hour.time;

    return (
      <div
        key={hour.at}
        className={styles.hour}
      >
        <div className={styles.bar}>
          <div
            className={`${styles.fill} ${hour.level}`}
            style={style}
            onClick={() => handleBarClick(hour.at)}
          >
            { popupAt === hour.at && (
              <div className={styles.anchor}>
                <div className={styles.popup}>
                  <div className={`${styles.level} ${hour.level}`}>
                    { hour.uvi }
                  </div>
                  <div className={styles.when}>
                    { hour.time }
                  </div>
                </div>
              </div>
            ) }
          </div>
        </div>
        <div className={styles.time}>
          { time }
        </div>
      </div>
    );
  };

  const renderDay = (hours) => {
    const label = hours.length === 24 ? hours[0].day : ' ';

    return (
      <div key={hours[0].at} className={styles.day}>
        <div className={styles.hours}>
          { hours.map((hour) => renderHour(hour)) }
        </div>
        <div className={styles.label}>
          { label }
        </div>
      </div>
    );
  };

  return (
    <div className={styles.main}>
      <div
        ref={graphRef}
        className={styles.graph}
      >
        { days.map((day) => renderDay(day)) }
      </div>
      <div className={styles.version}>
        {`v${version}`}
      </div>
    </div>
  );
}
