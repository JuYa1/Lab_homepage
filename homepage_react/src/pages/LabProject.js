import React, { useState, useEffect } from "react";
import styles from "./LabProject.module.css";
import TeamList from "../component/project/TeamList";
import axios from "axios";
import TFTList from "../component/project/TFTList";

export const LabProject = () => {
  const [tft, settft] = useState(null);
  const gettft = async () => {
    try {
      const res = await axios.get("/get_tft");
      settft(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    gettft();
    if (tft !== null) {
      console.log(tft.tft);
    }
  }, []);
  if (tft === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.projectcontainer}>
      <div className={styles.teamList}>
        <h1 className={styles.header}>TFT</h1>
        <TFTList data={tft.tft} />
      </div>
    </div>
  );
};

export default LabProject;
