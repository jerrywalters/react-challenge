import React from 'react';

import PatientRow from './PatientRow';
import patients from '../patients.json';
import './PatientTable.css';

const PatientTable = (props) => {
    // Map through the array of patient objects in patients.json and give the component props containing the patients data
    const patientList = patients.map((patient) => 
            <PatientRow
                key = {patient.mrn}
                firstName = {patient.name.first}
                lastName = {patient.name.last}
                mrn = {patient.mrn}
                dob = {patient.dob}
                sex = {patient.sex}
                treatmentSite = {patient.treatmentSite} 
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