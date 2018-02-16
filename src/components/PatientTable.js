import React from 'react';

import patients from '../patients.json';
import PatientRow from './PatientRow';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const PatientTable = (props) => {
    const patientList = patients.map((patient) => 
        <Link to={`${props.match.url}/${patient.name.last}`}>
            <PatientRow 
                firstName = {patient.name.first}
                lastName = {patient.name.last}
                mrn = {patient.mrn}
                dob = {patient.dob}
                sex = {patient.sex}
                treatmentSite = {patient.treatment_site} />
        </Link>
    );

    return (
        <table>
            <tbody>
                {patientList}
            </tbody>
        </table>
    )
}

export default PatientTable;