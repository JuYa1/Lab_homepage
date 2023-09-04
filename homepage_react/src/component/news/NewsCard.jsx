import styles from "./news.module.css";

function NewsCard({ data }) {
  return (
    <div className={styles.newscard_n}>
      <div className={styles.newsdesc}>
        <div>{data.news_name}</div>
        <div className={styles.sidedesc_n}>{data.news}</div>
      </div>
    </div>
  );
}

export default NewsCard;
