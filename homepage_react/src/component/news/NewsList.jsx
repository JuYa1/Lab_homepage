import React from "react";
import NewsCard from "./NewsCard";
import styles from "./news.module.css";

function NewsList({ data }) {
  if (!Array.isArray(data)) {
    return <div>데이터가 없습니다.</div>;
  }

  // 연도별로 데이터를 그룹화
  const groupedData = {};

  data.forEach((item) => {
    const year = item.news_year;
    if (!groupedData[year]) {
      groupedData[year] = [];
    }
    groupedData[year].push(item);
  });

  // 연도 배열 생성
  const years = Object.keys(groupedData).sort().reverse();

  return (
    <div>
      {years.map((year) => (
        <div className={styles.yearitem_n} key={year}>
          <div className={styles.year_n}>{year}</div>
          <div className={styles.yearpublications_n}>
            {groupedData[year]
              .map((item, index) => (
                <div key={index}>
                  <NewsCard data={item} />
                </div>
              ))
              .reverse()}{" "}
            {/* 내림차순으로 최신 데이터가 위로 오도록 reverse */}
          </div>
        </div>
      ))}
    </div>
  );
}

export default NewsList;
