import React from 'react';
import { BarChart,Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function Barchart({ data, city }) {
    const cityData = data.find(item => item.city === city);

    if (!cityData) {
        return <div>No data available for the specified city.</div>;
    }

    const chartData = cityData.dailyData.map(day => ({
        name: day.datetime, 
        DailyRain: day.precip, 
    
    }));
    return (
        <BarChart width={800} height={250} data={chartData}  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="DailyRain" fill="#82ca9d" />
        </BarChart>
        
    );
}

export default Barchart;
