import React, { useEffect, useState } from "react";
import axios from "axios";
import YearItem from "./YearItem";
import styles from "./publications.module.css";

const Publications = () => {
  const [publications, setPublications] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("/send_csv");
        setPublications(res.data);
      } catch (err) {}
    })();
  }, []);
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
