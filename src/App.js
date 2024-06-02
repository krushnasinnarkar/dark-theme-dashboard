// src/App.js
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import parseData from './data/loadData';
import { darkTheme, GlobalStyle } from './theme';
import CustomBarChart from './components/BarChart';
import CustomLineChart from './components/LineChart';
import CustomPieChart from './components/PieChart';

const data = parseData();

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const App = () => (
  <ThemeProvider theme={darkTheme}>
    <GlobalStyle />
    <AppContainer>
      <h1>Dark Theme Dashboard</h1>
      <CustomBarChart data={data} />
      <CustomLineChart data={data} />
      <CustomPieChart data={data} />
    </AppContainer>
  </ThemeProvider>
);

export default App;
