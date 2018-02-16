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