import React from 'react';
import { render } from '@testing-library/react';
import ArticlesList from '../components/ArticlesList';
import { MemoryRouter, Routes, Route } from 'react-router-dom';

const articles = [
  { id: 1, title: 'Test Article 1' },
  { id: 2, title: 'Test Article 2' },
];

test('renders articles', () => {
  const { getByText } = render(
    <MemoryRouter initialEntries={['/articles']}>
      <Routes>
        <Route
          path="/articles"
          element={<ArticlesList articles={articles} />}
        />
      </Routes>
    </MemoryRouter>
  );

  expect(getByText('Test Article 1')).toBeInTheDocument();
  expect(getByText('Test Article 2')).toBeInTheDocument();
});
