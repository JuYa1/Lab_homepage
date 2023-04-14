import React from "react";
import styles from "./Footer.module.css";
import axios from "axios";

function Footer() {
  const test22 = () => {
    alert("test");
  };
  return (
    <footer className={styles.footer}>
      <div className={styles.fcontainer}>
        <p>Copyright </p>
        <button onClick={test22}>test</button>
      </div>
    </footer>
  );
}

export default Footer;
