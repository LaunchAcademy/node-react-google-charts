import React from 'react';
import { Chart } from 'react-google-charts';

const PieChart = (props) => {

  return (
    <div className={'my-pretty-chart-container'}>
      <div>
        <h2> Below is an example Pie Chart</h2>
          <Chart
            width={'500px'}
            height={'300px'}
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={[
              ['Task', 'Hours per Day'],
              ['Work', 11],
              ['Eat', 2],
              ['Commute', 2],
              ['Watch TV', 2],
              ['Sleep', 7],
            ]}
            options={{
              title: 'My Daily Activities',
            }}
            rootProps={{ 'data-testid': '1' }}
          />
      </div>
    </div>
  );
}

export default PieChart
