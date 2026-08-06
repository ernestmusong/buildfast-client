import axios from 'axios';
import { apiUrl } from '@/configs/enpoints';

export const api = axios.create({
  baseURL: apiUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});