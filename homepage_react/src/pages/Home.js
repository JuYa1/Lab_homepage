import React, { useState, useEffect } from "react";
import mainimg from "./../images/main_1.png";
import styles from "./Home.module.css";
import axios from "axios";
import Contents from "../component/home/contentsview/HomeNewsView";
function Home() {
  const [news, setNews] = useState(null);
  const getNews = async () => {
    try {
      const res = await axios.get("/get_news");
      setNews(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getNews();
    console.log(news);
  }, []);
  if (news === null) {
    return <div>Loading...</div>;
  }
  return (
    <div className={styles.homecontainer}>
      <div className={styles.mainimg}>
        <img src={mainimg} alt="snslab" />
      </div>
      <Contents data={news.news.filter((news) => news.news_year === 2023)} />
    </div>
  );
}

export default Home;
