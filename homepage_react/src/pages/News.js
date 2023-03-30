import React, { useState, useEffect } from "react";
import NewsList from "../component/news/NewsList";
import styles from "./News.module.css";
import axios from "axios";

export const News = () => {
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
    <div className={styles.newscontainer}>
      <div className={styles.newsList}>
        <h1 className={styles.header}>News</h1>
        <NewsList data={news.news.filter((news) => news.news_year === 2023)} />
      </div>
    </div>
  );
};

export default News;
