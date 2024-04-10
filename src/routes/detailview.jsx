import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import WeatherDetail from '../WeatherDetail';


const DetailView = () => {
  const { city } = useParams();

  return (
    <div>
      <WeatherDetail city={city} />
    </div>
  );
};

export default DetailView;
