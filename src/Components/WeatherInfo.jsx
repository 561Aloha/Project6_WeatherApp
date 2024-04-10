import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function WeatherInfo({ city, countryCode }) {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const apiKey = '4ca1123b190f4404b2b5c707fae3d1a4';
      const apiUrlBase = 'https://api.weatherbit.io/v2.0/current';
      try {
        const response = await fetch(`${apiUrlBase}?key=${apiKey}&city=${city}&country=${countryCode}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherData().catch(console.error);
  }, [city, countryCode]);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{weatherData.data[0].city_name}</h2>
      <p>Temperature: {weatherData.data[0].temp}</p>
      <Link style={{ color: 'white' }} to={`/weatherDetail/${city}`} >See Details </Link>
    </div>
  );
}

export default WeatherInfo;
