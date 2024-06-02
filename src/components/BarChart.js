// src/components/BarChart.js
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
import styled from 'styled-components';

const ChartContainer = styled.div`
  margin: 20px;
  padding: 20px;
  background-color: #1e1e1e;
  border-radius: 8px;
`;

const CustomBarChart = ({ data }) => {
    const severityData = data.reduce((acc, entry) => {
        const severity = entry.severity;
        if (!acc[severity]) {
            acc[severity] = { severity, count: 0 };
        }
        acc[severity].count += 1;
        return acc;
    }, {});

    const formattedData = Object.values(severityData);

    return (
        <ChartContainer>
            <BarChart width={600} height={300} data={formattedData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="severity" stroke="#ffffff" />
                <YAxis stroke="#ffffff" />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" fill="#bb86fc" />
            </BarChart>
        </ChartContainer>
    );
};

export default CustomBarChart;
