import React, { useState, useEffect } from "react";
import MemberList from "../component/member/MemberList";
import styles from "./Members.module.css";
import axios from "axios";

function Members() {
  const [members, setMembers] = useState(null);
  const getMember = async () => {
    try {
      const res = await axios.get("/get_member");
      setMembers(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getMember();
  }, []);
  if (members === null) {
    return <div>Loading...</div>;
  }
  return (
    <div className={styles.memcontainer}>
      <div className={styles.memList}>
        <h1 className={styles.header}>Advisor</h1>
        {/* <MemberList data={list.advisor} /> */}
        <h1 className={styles.header}>ph.D candidate</h1>
        {/* <MemberList data={list.ph} /> */}
        <h1 className={styles.header}>M.S candidate</h1>
        {/* <MemberList data={list.advisor} /> */}
        <h1 className={styles.header}>Student</h1>
        <MemberList
          data={members.members.filter(
            (member) => member.position === "student"
          )}
        />
      </div>
    </div>
  );
}

export default Members;
