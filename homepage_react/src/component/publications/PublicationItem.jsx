import styles from "./publications.module.css";

const PublicationItem = ({ publication }) => {
  return (
    <div className={styles.publicationitem}>
      <div className={styles.publicationitemtitle}>
        {publication?.title ?? ""}
      </div>
      <div className={styles.publicationitemdesc}>
        {publication?.name ?? ""}
      </div>
      <div className={styles.publicationitemdesc}>
        {publication?.citation ?? ""}
      </div>
    </div>
  );
};

export default PublicationItem;
