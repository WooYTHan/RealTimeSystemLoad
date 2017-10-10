import React, { Component } from 'react';
import Gauge from 'react-svg-gauge';
import Title from './Title';

export default class CPUGauge extends React.Component {
    /*make chart responsive */
    constructor() {
    super();
    this.state = {
      width:  370,
      height: 334
    }
    }

    updateDimensions() {
        let update_width  = window.innerWidth * 0.3;
        let update_height = update_width * 1.09;
        this.setState({ width: update_width, height: update_height });
    }

    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions.bind(this));
    }

    render() {
    	let {value} = this.props;
        var valueStyle = {
            fill: 'rgb(123, 166, 237)',
            fontSize: '5.9vw'
        };

        var labelStyle = {
            fill: 'rgb(123, 166, 237)',
            fontSize: '2.0vw'
        };

        var miniMaxStyle = {
            fill: 'rgb(15, 15, 15)'
        }

        /*if CPU Usage higher than 80%, change color to red*/
        var color = "#7ba6ed";
        if(value >= 80){
            color = "#ad1818";
        }
        return (
        	<div id="gaugeChart">
            <Title title="Realtime System Load"></Title>
            <div>
                <Gauge value={value} width={this.state.width} height={this.state.height} label="Current CPU Usage (%)" color={color} valueLabelStyle={valueStyle} topLabelStyle = {labelStyle} minMaxLabelStyle = {miniMaxStyle}/>
            </div>
            </div>
        );
    }
}