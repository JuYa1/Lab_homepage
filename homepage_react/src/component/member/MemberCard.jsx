import React from "react";
import { Link } from "react-router-dom";
import styles from "./memberCard.module.css";
function MemberCard({ data }) {
  return (
    <div className={styles.membercard}>
      <div className={styles.memberimg}>
        <div>
          <img
            src={`${process.env.REACT_APP_API_URL}${data.mem_image}`}
            className={styles.memimg}
          />
        </div>
      </div>
      <div className={styles.memberdesc}>
        <div>{data.name}</div>
        <div>{data.email}</div>
        <div>{data.profile}</div>
        <Link to={`/Members/${data.name}`} className="link">
          <div className={styles.btnmore}>MORE</div>
        </Link>
      </div>
    </div>
  );
}

export default MemberCard;
