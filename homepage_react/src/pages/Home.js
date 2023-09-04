import React, { useState, useEffect } from "react";
import mainimg from "./../images/main_1.png";
import styles from "./Home.module.css";
import axios from "axios";
import NewsContents from "../component/home/contentsview/HomeNewsView";
import PubContents from "../component/home/contentsview/HomePubView";
function Home() {
  const [news, setNews] = useState([]);
  const [pub, setPub] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resN = await axios.get("/get_news");
        const resP = await axios.get("/get_publications");
        setNews(resN.data);
        setPub(resP.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);
  return (
    <div className={styles.homecontainer}>
      <div className={styles.mainimg}>
        <img src={mainimg} alt="snslab" />
      </div>
      {/* <div className={styles.CList}> */}
      <h1 className={styles.header}>News</h1>
      <NewsContents data={news.news} />
      {/* </div> */}
      {/* <div className={styles.CList}> */}
      <h1 className={styles.header}>Publications</h1>
      <PubContents data={pub.publications} />
    </div>
    // </div>
  );
}

export default Home;
