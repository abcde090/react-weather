import axios from 'axios';

const API_BASE_URL = 'https://dan-weather-api.herokuapp.com/api/weather';
export function fetchCurrent(city, country='au') {
  return axios.get(`${API_BASE_URL}/${country}/${city}`, {
    params: { weather: 'current'}
  }).then(response => {
    const current = response.data.data.current;
    const city = response.data.data.city;
      return {
        city: `${city.name}, ${city.country}`,
        windDirection: current.windDirection,
        humidity: current.humidity,
        windSpeed: current.windSpeed,
        temp: { C:current.maxCelsius, F:current.maxFahrenheit}
      };
    });
}

export function fetchForecast(city, country='au') {
  axios.get(`${API_BASE_URL}/${country}/${city}`, {
  params: { weather: 'forecast'}}).
  then(response => response.data.data.forecast);
}