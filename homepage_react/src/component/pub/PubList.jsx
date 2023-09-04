import React from "react";
import PubCard from "./PubCard";
import styles from "./pub.module.css";

function PubList({ data }) {
  const groupedData = data.reduce((groups, item) => {
    const year = item.pub_year;
    if (!groups[year]) {
      groups[year] = [];
    }

    const existingPubNames = new Set(
      groups[year].map((existingItem) => existingItem.pub_name)
    );
    if (!existingPubNames.has(item.pub_name)) {
      groups[year].push(item);
    }

    return groups;
  }, {});

  const years = Object.keys(groupedData).sort((a, b) => b - a); // 최신 년도가 위로 오도록 정렬

  return (
    <div>
      {years.map((year) => (
        <div className={styles.yearitem_p} key={year}>
          <div className={styles.year_p}>{year}</div>
          <div className={styles.yearpublications_p}>
            {groupedData[year].map((item, index) => (
              <PubCard data={item} key={index} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default PubList;
