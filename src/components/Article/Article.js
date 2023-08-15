import React from "react";
import "./Article.css";

export default function Article({ article }) {
  return (
    // article.id ===3 ?
    <div className="article-wrapper">
      <div className="article-img">
        <img src={article.imageSrc} alt="" />
      </div>
      <div className="article-text">
        <h2>{article.title}</h2>
        {article.id === 3 ? (
          <table className="technologies-table">
            <tr>
              <th>Technology</th>
              <th>Description</th>
            </tr>
            {article.items.map((item) => {
              return (
                <tr>
                  <td>{item.title}</td>
                  <td>{item.description}</td>
                </tr>
              );
            })}
          </table>
        ) : (
          <p className="text-article">{article.articleText}</p>
        )}
        <button className="readMore-button">Read more</button>
      </div>
    </div>
  );
}
