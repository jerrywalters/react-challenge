import React from 'react';
import patients from '../patients.json';

import PatientRow from './PatientRow';

// import css
import './PatientTable.css';
import 'bulma/css/bulma.css'

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
        <section className="section">
            <table className="table is-striped is-hoverable is-fullwidth">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>MRN</th>
                        <th>DOB</th>
                        <th>Demographic</th>
                        <th>Treatment Site</th>
                    </tr>
                </thead>
                <tbody>
                    {patientList}
                </tbody>
            </table>
        </section>
    )
}

export default PatientTable;