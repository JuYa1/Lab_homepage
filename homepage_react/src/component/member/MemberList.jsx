import React from "react";
import MemberCard from "./MemberCard";
import styles from "./memberList.module.css";

function MemberList({ data }) {
  return (
    <div className={styles.memberlist}>
      {data.map((_, __) => (
        <MemberCard data={_} key={__} />
      ))}
    </div>
  );
}

export default MemberList;
