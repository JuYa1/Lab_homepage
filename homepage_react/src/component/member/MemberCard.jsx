import React from "react";
import styles from "./memberCard.module.css";
function MemberCard({ data }) {
  return (
    <div className={styles.membercard}>
      <div className={styles.memberimg}>
        <div>
          <img
            src={`http://localhost:8000/media/${data.mem_image}`}
            className={styles.memimg}
          />
        </div>
      </div>
      <div className={styles.memberdesc}>
        <div>{data.name}</div>
        <div>{data.email}</div>
        <div>{data.profile}</div>
        <button>more</button>
      </div>
    </div>
  );
}

export default MemberCard;
