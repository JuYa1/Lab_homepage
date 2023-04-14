import React from "react";
import styles from "./homenews.module.css";
function HomeNews({ data }) {
  return (
    <div className={styles.content}>
      <div className="img">
        <img
          src={`http://localhost:8000/media/${data.news_image}`}
          className={styles.newsimg}
        />
      </div>
      <div>{data.news_name}</div>
    </div>
  );
}

export default HomeNews;
