import PubContents from "../contents/HomePub";
import styles from "./homeview.module.css";

function HomePubView({ data }) {
  if (!Array.isArray(data)) {
    return <div>데이터가 없습니다.</div>;
  }

  // 연도와 항목을 모두 하나의 배열로 합치기
  const allItems = data.flatMap((item) => {
    return { ...item, year: item.pub_year };
  });

  // 항목을 날짜별로 내림차순 정렬
  const sortedItems = allItems.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });

  // 최신 순서대로 상위 5개 항목 선택
  const selectedItems = sortedItems.slice(-5).reverse();

  return (
    <div className={styles.newslist_h}>
      <div className={styles.yearitem_h}>
        <div className={styles.yearpublications_h}>
          {selectedItems.map((item, index) => (
            <div key={index}>
              <PubContents data={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePubView;
