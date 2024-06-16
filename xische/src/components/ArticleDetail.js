import React from 'react';
import { useParams } from 'react-router-dom';

const ArticleDetail = ({ articles }) => {
  const { id } = useParams();
  const article = articles.find((article) => article.id === parseInt(id, 10));

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.abstract}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer">
        Read more
      </a>
    </div>
  );
};

export default ArticleDetail;
