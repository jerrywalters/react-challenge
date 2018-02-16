import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import PatientRow from './PatientRow';
import patients from '../patients.json';
import './PatientTable.css';

const PatientTable = ({match}) => {
    const patientList = patients.map((patient) => 
            <PatientRow
                firstName = {patient.name.first}
                lastName = {patient.name.last}
                mrn = {patient.mrn}
                dob = {patient.dob}
                sex = {patient.sex}
                treatmentSite = {patient.treatment_site} 
                match={match}
                />
    );

    return (
        <table>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>MRN</th>
                    <th>DOB</th>
                    <th>Demographic</th>
                    <th>Treatment Site</th>
                </tr>
                {patientList}
            </tbody>
        </table>
    )
}

export default PatientTable;