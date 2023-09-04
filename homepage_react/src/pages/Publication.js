import React, { useState, useEffect } from "react";
import PubList from "../component/pub/PubList";
import styles from "./Pub.module.css";
import axios from "axios";

export const Publication = () => {
  const [pub, setpub] = useState(null);
  const getpub = async () => {
    try {
      const res = await axios.get("/get_publications");
      setpub(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getpub();
  }, []);
  if (pub === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.pubcontainer}>
      <div className={styles.pubList}>
        <h1 className={styles.header}>publication</h1>
        <PubList data={pub.publications} />
      </div>
    </div>
  );
};

export default Publication;
