// src/components/LineChart.js
import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
import styled from 'styled-components';

const ChartContainer = styled.div`
  margin: 20px;
  padding: 20px;
  background-color: #1e1e1e;
  border-radius: 8px;
`;

const CustomLineChart = ({ data }) => {
    const timeSeriesData = data.map(entry => ({
        timestamp: entry.timestamp,
        count: 1,
    }));

    return (
        <ChartContainer>
            <LineChart width={600} height={300} data={timeSeriesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="timestamp" stroke="#ffffff" />
                <YAxis stroke="#ffffff" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="count" stroke="#03dac6" />
            </LineChart>
        </ChartContainer>
    );
};

export default CustomLineChart;
