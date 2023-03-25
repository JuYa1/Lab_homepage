import React, { useState, useEffect } from "react";
import styles from "./LabProject.module.css";
import TeamList from "../component/project/TeamList";
import axios from "axios";
import TFTList from "../component/project/TFTList";

export const LabProject = () => {
  const [team, setTeam] = useState(null);
  const getTeam = async () => {
    try {
      const res = await axios.get("/get_team");
      setTeam(res.data);
    } catch (err) {
      console.log(err);
    }
  };
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
    getTeam();
    gettft();
  }, []);
  if (team === null) {
    return <div>Loading...</div>;
  }
  if (tft === null) {
    return <div>Loading...</div>;
  }
  return (
    <div className={styles.projectcontainer}>
      <div className={styles.teamList}>
        <h1 className={styles.header}>Team</h1>
        <TeamList data={team.team} />
        <h1 className={styles.header}>TFT</h1>
        <TFTList data={tft.tft} />
      </div>
    </div>
  );
};

export default LabProject;
