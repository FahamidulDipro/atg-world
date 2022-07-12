import React, { useEffect, useState } from "react";
import Article from "../Article/Article";
import Row from "react-bootstrap/Row";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setArticles(data));
  }, []);
  return (
    <div>
      <Row className="g-4 container">
        {articles.map((article) => (
          <Article key={article.id} article={article}></Article>
        ))}
      </Row>
    </div>
  );
};

export default Articles;
