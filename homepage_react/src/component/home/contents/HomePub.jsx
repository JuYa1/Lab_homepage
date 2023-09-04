import React from "react";
import styles from "./home.module.css";
function HomePub({ data }) {
  return (
    <div className={styles.homecard}>
      <div className={styles.homedesc}>
        <div className={styles.yearContent}>
          <div className={styles.content}>
            <div>{data.pub_name}</div>
            <div className={styles.sidedesc}>{data.author_name}</div>
            <div className={styles.sidedesc}>{data.conference_name}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePub;
