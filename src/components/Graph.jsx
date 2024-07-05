import styles from './Graph.module.css';

export default function Graph({ all, now }) {
  return (
    <div className={styles.main}>
      {now.time}
      {/*
      <div>{`All-Start (${all.length}): ${JSON.stringify(all.slice(0, 2))}`}</div>
      <div>{`All-End (${all.length}): ${JSON.stringify(all.slice(-2))}`}</div>
      */ }
    </div>
  );
}
