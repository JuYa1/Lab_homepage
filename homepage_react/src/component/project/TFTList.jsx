import React from "react";
import TFTCard from "./TFTCard";
import styles from "./tftList.module.css";

function TFTList({ data }) {
  if (!Array.isArray(data)) {
    return <div>데이터가 없습니다.</div>;
  }

  return (
    <div className={styles.tftlist}>
      {data.map((_, __) => (
        <TFTCard data={_} key={__} />
      ))}
    </div>
  );
}

export default TFTList;
