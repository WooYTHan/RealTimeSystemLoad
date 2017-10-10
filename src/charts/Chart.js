import React from 'react';
import { render } from 'react-dom';
import LineChart from './CPUlineChart';
import Gauge from './CPUgauge';


export default class Chart extends React.Component {
  render () {
    const { store, value} = this.props;
    return (<div>
      <Gauge value={value}></Gauge>
      <LineChart data={store}></LineChart>
    </div>)
  }
}