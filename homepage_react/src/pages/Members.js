import React, { useState, useEffect } from "react";
import MemberList from "../component/member/MemberList";
import styles from "./Members.module.css";
import axios from "axios";

function Members() {
  const [members, setMembers] = useState(null);
  const getMember = async () => {
    try {
      const res = await axios.get("/get_member");
      //아이피 부분 추가하기
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
        <h1 className={styles.header}>지도교수</h1>
        <MemberList
          data={members.members.filter(
            (member) => member.position === "Advisor"
          )}
        />
        <h1 className={styles.header}>박사과정</h1>
        <MemberList
          data={members.members.filter((member) => member.position === "phD")}
        />
        <h1 className={styles.header}>석사과정</h1>
        <MemberList
          data={members.members.filter((member) => member.position === "MS")}
        />
        <h1 className={styles.header}>학사과정</h1>
        <MemberList
          data={members.members.filter(
            (member) => member.position === "Student"
          )}
        />
      </div>
    </div>
  );
}

export default Members;
