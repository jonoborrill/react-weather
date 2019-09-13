import axios from 'axios';

const API_KEY = 'ad898937592555ccec0d22ef7d89dc41';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&units=metric&q=${city},nz`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}