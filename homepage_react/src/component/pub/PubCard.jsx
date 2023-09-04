import React from "react";
import styles from "./pub.module.css";

function PubCard({ data }) {
  return (
    <div className={styles.pubcard_p}>
      <div className={styles.pubdesc_p}>
        <div className={styles.pubname}>{data.pub_name}</div>
        <div className={styles.sidedesc_p}>{data.author_name}</div>
        <div className={styles.sidedesc_p}>{data.conference_name}</div>
      </div>
    </div>
  );
}

export default PubCard;
