import React from 'react';
import Title from './Title';
import { render } from 'react-dom';
import {LineChart} from 'react-d3-basic';


 
export default class CPULineChart extends React.Component {
  /*make chart responsive */
  constructor() {
    super();
    this.state = {
      width:  800,
      height: 400
    }
  }

  updateDimensions() {
    let update_width  = window.innerWidth * 0.6;
    let update_height = update_width * 0.5;
    this.setState({ width: update_width, height: update_height });
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }

  render () {

    let {data} = this.props;

    var x = function(d) {
      return d.x;
    };
  
    return (
      <div id="lineChart">
      <Title title="System Load Since Page Open"></Title>
      <LineChart  
      data={data}
      width={this.state.width}
      height={this.state.height}
      chartSeries = {[
      {
        field: 'y',
        name: 'CPU Usage %',
        color: '#7ba6ed'
      }
      ]}
      x={x}
      yLabel = {"CPU Usage (%)"}
      xLabel = {"Time (s)"}
      />

      </div>)
  }
}