import NewsContents from "../contents/HomeNews";
import styles from "./homeview.module.css";

function HomeNewsView({ data }) {
  if (!Array.isArray(data)) {
    return <div>데이터가 없습니다.</div>;
  }

  // 연도와 항목을 모두 하나의 배열로 합치기
  const allItems = data.flatMap((item) => {
    return { ...item, year: item.news_year };
  });

  // 항목을 날짜별로 내림차순 정렬
  const sortedItems = allItems.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });

  // 최신 순서대로 상위 5개 항목 선택
  const selectedItems = sortedItems.slice(-5).reverse();

  return (
    <div className={styles.newslist}>
      <div className={styles.yearitem}>
        {/* <div className={styles.year}>최신</div> */}
        <div className={styles.yearpublications}>
          {selectedItems.map((item, index) => (
            <div key={index}>
              <NewsContents data={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomeNewsView;
