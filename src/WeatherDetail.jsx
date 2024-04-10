import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './App.css';
import List from './List';


const WeatherDetail = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [filteredWeatherDataList, setFilteredWeatherDataList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const apiKey = '4ca1123b190f4404b2b5c707fae3d1a4'; // Replace 'YOUR_API_KEY' with your actual API key
      try {
        const response = await fetch(
          `https://api.weatherbit.io/v2.0/current?key=${apiKey}&city=${city}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
        setError("Failed to fetch weather data. Please try again later.");
        setWeatherData(null);
      }
    };

    fetchWeatherData();
  }, [city]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const weather = weatherData.data[0].weather;
  const description = weather.description; 


  return (
    <div classname= 'weatherdetail-box'>
      <h1>{weatherData.data[0].city_name}</h1>
      <p>Temperature: {weatherData.data[0].temp}°C</p>
      <p>What the Weather is Like: {description}</p> 
      <List weatherDataList={filteredWeatherDataList} />
    </div>
  );
};

export default WeatherDetail;
