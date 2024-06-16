import React from 'react';
import { render } from '@testing-library/react';
import ArticleDetail from '../components/ArticleDetail';
import { MemoryRouter, Routes, Route } from 'react-router-dom';

const articles = [
  { id: 1, title: 'Test Article 1', abstract: 'Summary 1', url: '#' },
  { id: 2, title: 'Test Article 2', abstract: 'Summary 2', url: '#' },
];

test('renders article detail', () => {
  const { getByText } = render(
    <MemoryRouter initialEntries={['/article/1']}>
      <Routes>
        <Route
          path="/article/:id"
          element={<ArticleDetail articles={articles} />}
        />
      </Routes>
    </MemoryRouter>
  );

  expect(getByText('Test Article 1')).toBeInTheDocument();
  expect(getByText('Summary 1')).toBeInTheDocument();
});
