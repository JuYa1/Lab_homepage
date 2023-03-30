import React from "react";
import styles from "./newsCard.module.css";
function MemberCard({ data }) {
  return (
    <div className={styles.newscard}>
      <div className={styles.newsimg}>
        <div>
          <img
            src={`http://localhost:8000/media/${data.news_image}`}
            className={styles.newsimg}
          />
        </div>
      </div>
      <div className={styles.newsdesc}>
        <div>{data.news_name}</div>
        <div>{data.news}</div>
      </div>
    </div>
  );
}

export default MemberCard;
