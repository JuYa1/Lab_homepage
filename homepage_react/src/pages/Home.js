import React from 'react';
import mainimg from './../images/test.png';
import styles from './Home.module.css';
import Contents from './../component/home/s/s';
function Home() {
  return (
    <div className={styles.homecontainer}>
      <div className={styles.mainimg}>
        <img src={mainimg} alt="snslab" />
      </div>
      <Contents />
    </div>
  );
}

export default Home;
