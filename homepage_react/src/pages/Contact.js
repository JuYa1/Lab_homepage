import React from "react";
import styles from "./Contact.module.css";
import Labmap from "./Labmap";

function Contact() {
  return (
    <div className={styles.contactprovider}>
      <div className={styles.contactcontainer}>
        <Labmap />
        <br />
        <h2>Contact Info</h2>
        38430 경상북도 경산시 하양읍 하양로 13-13, 공학관(D2) 521호
        <br />
        <h1>Phone</h1>
        010-xxxx-xxxx
        <br />
        <br />
      </div>
    </div>
  );
}

export default Contact;
