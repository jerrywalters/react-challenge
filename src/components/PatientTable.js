import React from 'react';

import patients from '../patients.json';
import PatientRow from './PatientRow';

const PatientTable = (props) => {
    const patientList = patients.map((patient) => 
        <PatientRow 
            firstName = {patient.name.first}
            lastName = {patient.name.last}
            mrn = {patient.mrn}
            dob = {patient.dob}
            sex = {patient.sex}
            treatmentSite = {patient.treatment_site} />
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