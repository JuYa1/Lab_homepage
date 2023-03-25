import React from "react";
import styles from "./teamCard.module.css";
function TeamCard({ data }) {
  return (
    <div className={styles.teamcard}>
      <div className={styles.teamimg}>
        <div>
          <img src={`http://localhost:8000/media/${data.team_image}`} />
        </div>
      </div>
      <div className={styles.teamdesc}>
        <div>{data.team_name}</div>
      </div>
    </div>
  );
}

export default TeamCard;
