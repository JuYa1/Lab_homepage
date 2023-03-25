import React from "react";
import TFTCard from "./TFTCard";
import styles from "./tftList.module.css";

function TFTList({ data }) {
  return (
    <div className={styles.tftlist}>
      {data.map((_, __) => (
        <TFTCard data={_} key={__} />
      ))}
    </div>
  );
}

export default TFTList;
