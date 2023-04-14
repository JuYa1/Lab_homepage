import React from "react";
import styles from "./tftCard.module.css";
function TFTCard({ data }) {
  return (
    <div className={styles.tftcard}>
      <div className={styles.tftimg}>
        <div>
          <img src={`http://localhost:8000/media/${data.tft_images[0]}`} />
        </div>
      </div>
      <div className={styles.tftdesc}>
        <div>{data.tft_name}</div>
      </div>
    </div>
  );
}

export default TFTCard;
