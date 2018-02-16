import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import Chart from 'chart.js';
import patients from '../patients.json';

class ChartComponent extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // use the config prop to get the options object for the chart
        this.initializeChart(this.props.config);
    }

    initializeChart(options) {
        let el = ReactDOM.findDOMNode(this.refs.weightChart);
        let ctx = el.getContext("2d"); 
        ctx.height = 80; 
        let chart = new Chart(ctx, options);
    }

    render() {
        return <canvas ref="weightChart" />
    }
}

export default ChartComponent;