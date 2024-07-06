import styles from './Graph.module.css';

export default function Graph({ all, now }) {
  return (
    <div className={styles.main}>
      <div className={styles.graph}>
        {now.time}
      <div>{`All-Start (${all.length}): ${JSON.stringify(all.slice(0, 1))}`}</div>
      <div>{`All-End (${all.length}): ${JSON.stringify(all.slice(-1))}`}</div>
      </div>
    </div>
  );
}
