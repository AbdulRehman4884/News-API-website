import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

function News() {
  const [news, setNews] = useState([]);
  const fetchnews = async () => {
    const news = await fetch(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=714ef9b8a6ef47d19b4bda6f4f0d100f"
    );
    const data = await news.json();
    setNews(data.articles);
  };
  useEffect(() => {
    fetchnews();
  }, []);
  return (
    <>
      <Navbar></Navbar>
      <div
        className="mainNews"
        style={{
          display: "flex",
          flexWrap: "wrap",
          paddingLeft: "10%",
          paddingRight: "0%",
          paddingTop: "3%",
        }}
      >
        {news.map((item) => {
          return (
            <>
              <div
                className="card"
                style={{ width: "18rem", marginLeft: "5%", marginBottom: "3%" }}
              >
                <img
                  src={
                    item.urlToImage == null
                      ? "https://sportshub.cbsistatic.com/i/r/2022/01/19/93ed5833-577c-4177-b5c7-1ad99924fff4/thumbnail/1200x675/b14d0d119a7b61319df3ea67bb2d6c8b/dan-quinn.jpg"
                      : item.urlToImage
                  }
                  class="card-img-top"
                  alt="..."
                />
                <div
                  className="card-body"
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.description}</p>
                  <a
                    href={item.url}
                    target="_blank"
                    class="btn btn-primary"
                    style={{ marginTop: "auto" }}
                  >
                    Read More{" "}
                  </a>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default News;
