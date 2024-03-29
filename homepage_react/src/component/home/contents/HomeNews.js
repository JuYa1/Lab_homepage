import React from "react";
import styles from "./home.module.css";
function HomeNews({ data }) {
  return (
    <div className={styles.homecard}>
      <div className={styles.homedesc}>
        <div className={styles.yearContent}>
          <div className={styles.content}>
            <div>{data.news_name}</div>
            <div className={styles.sidedesc}>{data.news}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeNews;
