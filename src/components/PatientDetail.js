import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import Chart from 'chart.js';
import patients from '../patients.json';

class PatientSingle extends Component {
    constructor(props) {
        super(props);

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        console.log('config', this.props.config);
        this.initializeChart(this.props.config);
    }

    initializeChart(options) {
        let el = ReactDOM.findDOMNode(this.refs.weightChart);
        let ctx = el.getContext("2d");  
        // let chart = new Chart(ctx, options);
        //         //initialize chart
        // const weightChart = new Chart();
        // new Chart(ctx,{
        //     type: 'bubble',
        //     data: data,
        //     options: options
        // });
    }

    // Access browser history in props to go back to previous route
    handleClick() {
        this.props.history.goBack();
    }

    render() {
        //set current route param as patientId
        const patientId = this.props.match.params.patientId;
        // use the isSelectedPatient function to find the patient that matched the route param
        const patientData = patients.find(isSelectedPatient);
        const { 
            name,
            dob,
            mrn,
            sex,
            weight,
            histology,
            tumorSizeCm,
            treatmentSite,
        } = patientData;
        const fullName = `${name.last}, ${name.first}`;
    
        // use moment.js to get age from dob
        const age = moment().diff(dob, 'years');
    
        // use .reduce() to find the lowest and highest weights in the array of patients
        const lowestWeight = patients.reduce((prev, current) => prev.weight < current.weight ? prev:current).weight;
        const highestWeight = patients.reduce((prev, current) => prev.weight > current.weight ? prev:current).weight;
        const medianWeight = getMedianWeight(patients);
    
        // if the patient's mrn matches the current route param, return true
        function isSelectedPatient(patient) {
            return patient.mrn === patientId;
        }
    
        return (
            <div>
                <button onClick={this.handleClick}>Back</button>
                <div className="patient-single__info">
                    <h1>{fullName}</h1>
                    <h2>{mrn}</h2>
                    <h2>{`${age} year old ${sex}`}</h2>
                    <h2>{`${tumorSizeCm} cm ${histology}, ${treatmentSite}`}</h2>
                    <h2>{`${weight}lbs`}</h2>
                    <canvas ref="weightChart" />
                </div>
            </div>
        )
    }
}


// Make this function public for purpose of testing (i'd love to chat about best practice here)
// Could easily make this more resusable by only performing allWeights if values isnt a set of numbers, etc.
export function getMedianWeight(values) {
    // get all patients weights and put in numberical order
    const allWeights = values
        .map(values => values.weight)
        .sort((a, b)=> a-b);
    
    // get index of middle number in array
    const length = allWeights.length;

    // if the array has an even number of indexes, then take the mean of the middle 2
    // if the array has an odd number of indexes, then take the middle number
    if(allWeights.length % 2 === 0)
        return (allWeights[length/2 - 1] + allWeights[length/2]) / 2;
    else
        return allWeights[(length-1)/2];
}

export default PatientSingle;