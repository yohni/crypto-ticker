import axios from 'axios';
import { Fetcher } from 'swr';

export const fetcher: Fetcher = (url: string) =>
  axios.get(url).then((res) => res.data);
