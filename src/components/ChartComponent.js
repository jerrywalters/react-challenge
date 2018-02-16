// Helps bypass specific webpack build configuration
/* global Plotly:true */

import React from 'react';

// import css
import './ChartComponent.css';
import 'bulma/css/bulma.css'

import createPlotlyComponent from 'react-plotly.js/factory'

const ChartComponent = (props) => {

        /* (Note that Plotly is already defined from loading plotly.js through a <script> tag) */
        const Plot = createPlotlyComponent(Plotly);
        // let el = ReactDOM.findDOMNode(this.refs.chart);
        // let context = el.getContext("2d");
        const yValue = ['Weight'];

        // pass the weight values in through props
        const medianWeight = [props.medianWeight];
        const patientWeight = [props.ptWeight];
        const highestWeight = props.hiWeight;
        const lowestWeight = props.loWeight;

        // Config/Data for patient weight
        const trace1 = {
            x: patientWeight,
            y: yValue,
            mode: 'markers',
            name: 'Patient Weight',
            marker: {
                color: 'rgb(96, 209, 169)',
                line: {
                color: 'rgb(60, 178, 156)',
                width: 1,
                },
                symbol: 'circle',
                size: 16
            }
        };

        // Config/Data for patient weight
        const trace2 = {
            type: 'scatter',
            x: medianWeight,
            y: yValue,
            mode: 'markers',
            name: 'Median Weight',
            marker: {
                color: 'rgb(137, 150, 196)',
                line: {
                color: 'rgb(137, 150, 196)',
                width: 1,
                },
                symbol: 'circle',
                size: 16
            }
        };

        const data = [trace1, trace2];
        
        // chart visual config
        const layout = {
            displayModeBar: false,  
            xaxis: {
                // here is where I use the lowest and highest patient weights to generate a dynamic chart
                range: [lowestWeight, highestWeight],
                showgrid: false,
                showline: true,
                linecolor: 'rgb(102, 102, 102)',
                titlefont: {
                font: {
                    color: 'rgb(204, 204, 204)'
                }
                },
                tickfont: {
                    font: {
                        color: 'rgb(102, 102, 102)'
                    }
                },
                autotick: false,
                dtick: 10,
                ticks: 'outside',
                tickcolor: 'rgb(102, 102, 102)'
            },
            margin: {
                l: 60,
                r: 20,
                b: 50,
                t: 20
            },
            legend: {
                font: {
                size: 10,
                },
                yanchor: 'middle',
                xanchor: 'right'
            },
            width: 600,
            height: 180,
            paper_bgcolor: 'rgb(237, 242, 249)',
            plot_bgcolor: 'rgb(237, 242, 249)',
            hovermode: 'none'
        };

    return (
        <Plot 
            data={data}
            layout={layout}
        />
    )
}

export default ChartComponent;