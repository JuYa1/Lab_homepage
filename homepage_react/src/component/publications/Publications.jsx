import React from "react";
import YearItem from "./YearItem";
import styles from "./publications.module.css";

const Publications = ({ publications }) => {
  return (
    <>
      <div className={styles.publications}>Publication</div>
      {publications.map((data, index) => (
        <YearItem key={index} yearItem={data} />
      ))}
    </>
  );
};

export default Publications;
