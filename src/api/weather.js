import axios from 'axios';

const API_BASE_URL = 'https://dan-weather-api.herokuapp.com/api/weather';
export function fetchCurrent(city, country) {
  return axios.get(`${API_BASE_URL}/${country}/${city}`, {
    params: {
      weather: 'current'
    }
  }).then(response => {
    const current = response.data.data.current;
    const city = response.data.data.city;
    return {
      city: `${city.name}, ${city.country}`,
      windDirection: current.windDirection,
      humidity: current.humidity,
      windSpeed: current.windSpeed,
      temp: {
        C: current.maxCelsius.toFixed(0),
        F: current.maxFahrenheit.toFixed(1)
      }
    };
  });
}

const weekday = (day) => {
  switch (day) {
    case 0:
      return "Sun";
    case 1:
      return "Mon";
    case 2:
      return "Tue";
    case 3:
      return "Wed";
    case 4:
      return "Thu";
    case 5:
      return "Fri";
    default:
      return "Sat";
  }
}


const dateConversion = (date) => {
  const day = new Date(date * 1000);
  const hours = day.getHours();
  const minutes = "0" + day.getMinutes();
  const days = weekday((day.getDay() + 4) % 7);
 
  const formattedTime = hours + ':' + minutes.substr(-2);

  return {day: days, time: formattedTime};
}



export function fetchForecast(city, country) {
  return axios.get(`${API_BASE_URL}/${country}/${city}`, {
    params: {
      weather: 'forecast'
    }
  }).then(response => {
      const weatherForecasts = [];
      const forecast = response.data.data.forecast;
      forecast.forEach(element => {
        let weatherForecast = {
          ...dateConversion(element.time), 
          high: {C:element.maxCelsius.toFixed(0), F: element.maxFahrenheit.toFixed(1)},
          low: {C:element.minCelsius.toFixed(0), F: element.minFahrenheit.toFixed(1)}
        }
        weatherForecasts.push(weatherForecast);
      });
        return weatherForecasts
      });
  }