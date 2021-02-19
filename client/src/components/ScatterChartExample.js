import React from 'react';
import { Chart } from 'react-google-charts';

const ScatterChartExample = (props) => {
  return (
    <div className={'my-pretty-chart-container'}>
      <div>
        <h2> Below is an example Scatter Chart</h2>
        <Chart
          chartType="ScatterChart"
          data={[
            ['Cohort Number', 'Awesomeness', 'Stress Levels', 'Sleep Deprivation', 'Caffeine Intake'],
            ['53',  1000,      400, 250, 500],
            ['54',  1170,      460, 350, 1000],
            ['55',  660,       1120, 250, 800],
            ['56',  1201,      602, 450, 700],
            ['57',  1250,      650, 650, 600],
            ['58',  1500,      630, 850, 500],
            ['59',  1030,      800, 1050, 1000]
          ]}
          options={{}}
          graph_id="ScatterChart"
          width="100%"
          height="400px"
          legend_toggle
        />
      </div>
    </div>
  );
}

export default ScatterChartExample
