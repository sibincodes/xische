import React, { useEffect, useState } from 'react';
import { fetchMostPopularArticles } from '../services/nytimesApi';
import ArticlesList from './ArticlesList';
import ArticleDetail from './ArticleDetail';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const ArticlesContainer = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const articles = await fetchMostPopularArticles(1);
      setArticles(articles);
    };

    getArticles();
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/article/:id"
          element={<ArticleDetail articles={articles} />}
        />
        <Route path="/" element={<ArticlesList articles={articles} />} />
      </Routes>
    </Router>
  );
};

export default ArticlesContainer;
