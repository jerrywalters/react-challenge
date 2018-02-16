import React from 'react';
import patients from '../patients.json';
import moment from 'moment';

const PatientSingle = (props) => {
    //set current route param as patientId
    const patientId = props.match.params.patientId;
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
    const medianWeight = median(patients);

    // another way to find the lowest or highest, decided against because it iterates thru array twice
    // const lowestWeight = patients
    //     .map(patient => patient.weight)
    //     .sort((a, b)=> a-b)[0];

    function median(values) {
        // get all patients weights and put in numberical order
        const allWeights = values
            .map(values => values.weight)
            .sort((a, b)=> a-b);
        
        // get index of middle number in array
        const half = Math.floor(allWeights.length/2);
    
        // if the array has an even number of indexes, then take the mean of the middle 2
        // if the array has an odd number of indexes, then take the middle number
        if(allWeights.length % 2)
            return (allWeights[half-1] + allWeights[half]) / 2.0;
        else
            return allWeights[half];
    }

    // if the patient's mrn matches the current route param, return true
    function isSelectedPatient(patient) {
        return patient.mrn === patientId;
    }

    // Access browser history in props to go back to previous route
    function handleClick(e) {
        e.preventDefault();
        props.history.goBack();
    }

    return (
        <div>
            <button onClick={e => handleClick(e)}>Back</button>
            <div className="patient-single__info">
                <h1>{fullName}</h1>
                <h2>{mrn}</h2>
                <h2>{`${age} year old ${sex}`}</h2>
                <h2>{`${tumorSizeCm} cm ${histology}, ${treatmentSite}`}</h2>
                <h2>{`${weight}lbs`}</h2>
                PUT A BIG OL CHART HERE AND CALCULATE SOME AVERAGES
            </div>
        </div>
    )
}

export default PatientSingle;