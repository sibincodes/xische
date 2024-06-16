import axios from 'axios';
import { baseUrl, apiKey } from '../const/const';

export const fetchMostPopularArticles = async (period = 1) => {
  const response = await axios.get(
    `${baseUrl}svc/mostpopular/v2/viewed/${period}.json?api-key=${apiKey}`
  );
  return response.data.results;
};
