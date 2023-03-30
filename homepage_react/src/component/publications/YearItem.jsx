import PublicationItem from "./PublicationItem";
import styles from "./publications.module.css";

const YearItem = ({ yearItem }) => {
  return (
    <div className={styles.yearitem}>
      <div className={styles.year}>{yearItem?.year ?? ""}</div>
      <div className={styles.yearpublications}>
        {yearItem.publications.map((data, index) => (
          <PublicationItem key={index} publication={data} />
        ))}
      </div>
    </div>
  );
};

export default YearItem;
