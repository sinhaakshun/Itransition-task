import axios from 'axios';

const http = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 5000,
});

export const get = async <T>(url: string, params?: any): Promise<T> => {
  const response = await http.get<T>(url, { params });
  return response.data;
};

export const post = async <T>(url: string, data: any): Promise<T> => {
  const response = await http.post<T>(url, data);
  return response.data;
};

export default http;
