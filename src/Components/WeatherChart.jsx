import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function WeatherChart({ data, city }) {
    const cityData = data.find(item => item.city === city);

    if (!cityData) {
        return <div>No data available for the specified city.</div>;
    }

    const chartData = cityData.dailyData.map(day => ({
        name: day.datetime, 
        temperatureCelsius: day.temp, 
        temperatureFahrenheit: (day.temp * 9/5) + 32,
    }));

    return (
        <LineChart width={800} height={400} data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="temperatureFahrenheit" stroke="#8884d8" name="Temperature (°F)" />
        </LineChart>
    );
}

export default WeatherChart;
