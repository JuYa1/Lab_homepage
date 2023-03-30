import React from "react";
import MemberCard from "./NewsCard";
import styles from "./newsList.module.css";

function NewsList({ data }) {
  return (
    <div className={styles.newslist}>
      {data.map((_, __) => (
        <MemberCard data={_} key={__} />
      ))}
    </div>
  );
}

export default NewsList;
