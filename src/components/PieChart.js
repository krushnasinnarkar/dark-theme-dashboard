// src/components/PieChart.js
import React from 'react';
import { PieChart, Pie, Tooltip, Legend, Cell } from 'recharts';
import styled from 'styled-components';

const ChartContainer = styled.div`
  margin: 20px;
  padding: 20px;
  background-color: #1e1e1e;
  border-radius: 8px;
`;

const COLORS = ['#bb86fc', '#03dac6', '#ff0266', '#ffd700', '#8a2be2'];

const CustomPieChart = ({ data }) => {
    const categoryData = data.reduce((acc, entry) => {
        const category = entry.category;
        if (!acc[category]) {
            acc[category] = { category, count: 0 };
        }
        acc[category].count += 1;
        return acc;
    }, {});

    const formattedData = Object.values(categoryData);

    return (
        <ChartContainer>
            <PieChart width={400} height={400}>
                <Pie
                    data={formattedData}
                    dataKey="count"
                    nameKey="category"
                    cx="50%"
                    cy="50%"
                    outerRadius={150}
                    fill="#8884d8"
                    label
                >
                    {formattedData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip />
                <Legend />
            </PieChart>
        </ChartContainer>
    );
};

export default CustomPieChart;
