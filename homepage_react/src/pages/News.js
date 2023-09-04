import React, { useState, useEffect } from "react";
import NewsList from "../component/news/NewsList";
import styles from "./News.module.css";
import axios from "axios";

const News = () => {
  const [news, setNews] = useState([]);
  const getnews = async () => {
    try {
      const res = await axios.get("/get_news");
      setNews(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getnews();
  }, []);
  if (news === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.newscontainer}>
      <div className={styles.newsList}>
        <h1 className={styles.header}>News</h1>
        <NewsList data={news.news} />
      </div>
    </div>
  );
};

export default News;
