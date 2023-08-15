import React from "react";
import "./MainContent.css";
import articles from "../../Data/articles";
import Article from "../Article/Article";

export default function MainContent() {
  return (
    <div>
      {articles.map((article) => {
        return <Article article={article} />;
      })}
    </div>
  );
}
