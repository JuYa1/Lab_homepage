import Contents from "../contents/HomeNews";
import styles from "./homenewsview.module.css";

function HomeNewsView({ data }) {
  return (
    <div className={styles.list}>
      {[...data]
        .reverse()
        .slice(0, 9)
        .map((_, __) => (
          <Contents data={_} key={__} />
        ))}
    </div>
  );
}

export default HomeNewsView;
