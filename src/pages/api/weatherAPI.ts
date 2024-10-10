import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();
const apiKey = process.env.WEATHER_API_KEY;
console.log('API Key:', apiKey);

export default async function apiCall() {
  const url = `http://api.weatherapi.com/v1/current.json?key=12d5b4ea61e64780996183644241401&q=-23.6666,-46.5322&aqi=no`;
  const req = axios.get(url);
  const res = await req;
  console.log(res);
}
