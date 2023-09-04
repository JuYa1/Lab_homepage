import React from "react";
import PubCard_m from "./PubCard_m";
import styles from "./pub_m.module.css";

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
        <div className={styles.yearitem_pm} key={year}>
          <div className={styles.year_pm}>{year}</div>
          <div className={styles.yearpublications_pm}>
            {groupedData[year].map((item, index) => (
              <PubCard_m data={item} key={index} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default PubList;
