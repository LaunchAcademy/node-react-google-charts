import React from 'react';
import { Chart } from 'react-google-charts';

import ScatterChartExample from './ScatterChartExample'
import LineChartExample from './LineChartExample'
import WordTreeExample from './WordTreeExample'
import PieChart from './PieChart'
import BarChart from './BarChart'

const ChartsContainer = (props) => {
    return (
      <div className='my-pretty-chart-container'>
        <h1> GoogleCharts Examples </h1>
        <div>
          <LineChartExample />
          <ScatterChartExample />
          <WordTreeExample />
          <PieChart />
          <BarChart />
        </div>
      </div>
    );
  }

export default ChartsContainer
