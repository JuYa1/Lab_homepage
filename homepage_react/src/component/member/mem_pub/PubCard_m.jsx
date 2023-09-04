import React from "react";
import styles from "./pub_m.module.css";

function PubCard({ data }) {
  return (
    <div className={styles.pubcard_pm}>
      <div className={styles.pubdesc_pm}>
        <div className={styles.pubname}>{data.pub_name}</div>
        <div className={styles.sidedesc_pm}>{data.author_name}</div>
        <div className={styles.sidedesc_pm}>{data.conference_name}</div>
      </div>
    </div>
  );
}

export default PubCard;
