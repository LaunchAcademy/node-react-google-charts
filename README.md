
Note, these are generally listed in order of complexity. e.g. Google Charts is likely the easiest to implement, with D3 being the hardest to implement.

## *Easier to Implement*

### Google Charts

One of the more popular, given that it is relatively easy to implement and that many launchers have implemented it in the past. I strongly encourage most of you to use this library, as it is well documented and reasonably straightforward to use.

- **LA React Google Charts Example and How-To**
<https://github.com/LaunchAcademy/node-react-google-charts>

- **React Google Charts**
<https://github.com/rakannimer/react-google-charts>

- **Google Charts Documentation**
<https://developers.google.com/chart/>
Specifically, if you wish to create a specific chart, you may have to pass extra or custom props to your Chart component in React google Charts that you will have to discover on the core documentation.

## *Comprehensive*

### AnyChart

Solid all around charting library, implemented by only a few launchers.

- **AnyChart Documentation**
<https://api.anychart.com/>

- **REACT AnyChart** Maintained by AnyChart! This would be a fantastic wrapper to use.
<https://github.com/AnyChart/AnyChart-React>

## *Great Documentation*

### Nivo

Used by a few launchers. Built over D3 in some parts. Potentially a great combination of powerful, easy to implement and great documentation.

- **Nivo Documentation** <http://nivo.rocks/>

## Powerful, Hard to Implement

### D3

- **D3 Documentation**
<https://d3js.org/>

- **Learn D3 in Five Days**
<https://benclinkinbeard.com/d3in5days/>
This is an app for purpose of learning [React Google Charts](https://github.com/RakanNimer/react-google-charts)

# This Example Application

Note that this is a wrapper library around the base JavaScript library, [Google Charts](https://developers.google.com/chart/). You'll find a lot more information there as to how you can further customize your charts and visuals. In fact, to get the most from this library, it's okay idea to go through the brief tutorial on the Google Charts website first. You'll likely be referring to it often.

This is using generator-engage (a React-Express webpacker boilerplate application w/ Postgres).

## Setup commands

- `yarn install` if you need to install new node modules
- `createdb node-react-google-charts_development` to setup your DB
- `cd server` to be in the correct folder to migrate the database
- `yarn run migrate:latest`

Server commands

- `yarn run dev`

## Walk-through

```javascript
import { Chart } from 'react-google-charts';

const LineChartExample = (props) => {
  let data = [
        ['Cohort Number', 'Awesomeness', 'Stress Levels'],
        ['53',  1000,      400],
        ['54',  1170,      460],
        ['55',  660,       1120],
        ['56',  1201,      602],
        ['57',  1250,      650],
        ['58',  1500,      630],
        ['59',  1030,      800]
      ]

  return (
    <div className={'my-pretty-chart-container'}>
      <div>
        <h2> Below is an example Line Chart</h2>
        <Chart
          chartType="LineChart"
          data={data}
          options={{}}
          graph_id="LineChart"
          width="100%"
          height="400px"
        />
      </div>
    </div>
  );
}

export default LineChartExample
```

There are a lot of charts to work with, but this library specifically works with the Google Charts API, which is arguably one of the easiest to use.

To render a google chart using this package, import that `"Chart"` component and render it, it's that simple! Then begin passing props based on the options you wish to designate for your chart, and the `Chart` component will interact with the Google Charts API for you.

Example Chart Props:

- `chartTypes`: accepts a string argument of the type of chart you wish to load. A list of charts can be found at the Google Charts website.

- `data`: This prop is the simpler option that you have for passing an array of arrays representing columns and rows for your data. The first array is going to represent the headers or axes of your chart. Each additional array is going to represent a data point on that chart, with the first and second values corresponding to the x and y axis respectively.

**Alternatively, you can specify columns and rows to be more explicit about your data.**

- `columns`: This prop is used for setting up the column information of your table. It accepts an array of objects with keys corresponding to the type, label and id of the column in question. Each additional object will represent the new info of each column.
<https://developers.google.com/chart/interactive/docs/reference#DataTable_addColumn>

- `rows`: Accepts an array of arrays, with each array representing the data point you wish to add (with two elements pointing to x and y values)
<https://developers.google.com/chart/interactive/docs/reference#addrow>

- `options`: this prop will be an object with keys that you can set based on the type of chart you are using. Usually, `title`, `height`, `width`, and `legend` are options available on most charts. This is where the bulk of customization will begin for the chart you wish to use.

### Chart Events

Triggering callbacks based on user events is a little more involved than the rest of the library. A chart can also take an object with an array of event data objects. This will expose a `chartWrapper` object to you, which you will likely be calling on with the methods `getChart` and `getSelection` to retrieve information about the specific chart element you selected or interacted with.

```js
const chartEvents = [
  {
    eventName: "select",
    callback({ chartWrapper }) {
      console.log("Selected ", chartWrapper.getChart().getSelection());
    }
  }
];
```

I highly recommend you use the demo code below in your app to investigate the unique objects passed back to you. <https://react-google-charts.com/user-selection>
Unfortunately, they don't do an excellent job of telling us about this method we can call on each object that gets returned. However, you can see some of these methods here: <https://github.com/rakannimer/react-google-charts/blob/cc749cf9ec8f8072c9965b1436b9f9547e147196/src/types.ts>

Most likely, you would want to pass a different set of data to your chart based on user interaction with your chart. So in this case, you would want to trigger your own callback function that will change state or make a new fetch for new data, and re-render the chart.

Below is an example:

```js

const chartEvents = [
  {
    eventName: 'select',
    callback: ({ chartWrapper }) => {
      const chart = chartWrapper.getChart()
      console.log("chart", chart)
      const selection = chart.getSelection()
      console.log("selection", selection)
      if (selection.length === 1) {
        const [selectedItem] = selection
        const dataTable = chartWrapper.getDataTable()
        const { row, column } = selectedItem
        console.log(selectedItem)
        alert(
          'You selected : ' +
            JSON.stringify({
              row,
              column,
              value: dataTable.getValue(row, column),
              columnLabel: dataTable.getColumnLabel(column)
            }),
          null,
          2,
        )
      }
      console.log(selection)
    },
  },
]
```

To see more options about the chart you are using, go to your chart types' specific options table.

<https://react-google-charts.com/>

**Note:** that `height`, `width` and a few other option keys can be passed in as their own props as well. You may have to dig into the Chart.js in the React Google Charts library to see what props are allowable, otherwise, just pass them into the options object.

You should feel comfortable exploring each of the components that RakanNimer has defined, and see how the props he allows get passed to the Google Charts library.
