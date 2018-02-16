import React from 'react';
import patients from '../patients.json';

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
    const age = getAge(dob);

    // calculate patient age using dob and current date
    function getAge(dob) {
        const today = new Date();
        const birthDate = new Date(dob);
        const month = today.getMonth() - birthDate.getMonth();
        let age = today.getFullYear() - birthDate.getFullYear();

        // fixes innacuracies based on the month the patient was born
        if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }

        return age;
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