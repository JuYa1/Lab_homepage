import React from "react";
import TeamCard from "./TeamCard";
import styles from "./teamList.module.css";

function TeamList({ data }) {
  return (
    <div className={styles.teamlist}>
      {data.map((_, __) => (
        <TeamCard data={_} key={__} />
      ))}
    </div>
  );
}

export default TeamList;
