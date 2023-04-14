import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "./../../images/snslab.png";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.hcontainer}>
        <div className={styles.logo}>
          <Link className="link" to="/">
            <img src={logo} alt="snslab" />
          </Link>
        </div>
        <nav className={styles.nav}>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <Link className="link" to="/News">
                NEWS
              </Link>
            </li>
            <li className={styles.li}>
              <Link className="link" to="/Members">
                MEMBERS
              </Link>
            </li>
            <li className={styles.li}>
              <Link className="link" to="/LabProject">
                TFT
              </Link>
            </li>
            <li className={styles.li}>
              <Link className="link" to="/Publication">
                PUBLICATION
              </Link>
            </li>
            <li className={styles.li}>
              <Link className="link" to="/Contact">
                CONTACT
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
