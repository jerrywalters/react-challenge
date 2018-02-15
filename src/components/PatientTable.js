import React from 'react';
import patients from '../patients.json';

// const PatientTable = () => {
//     const patientList = patients.map((patient) => 
//         <tr>
//             <td>{`${patient.name.last}, ${patient.name.first}`}</td>
//             <td>{`${patient.mrn}`}</td>
//             <td>{`${patient.dob}`}</td>
//             <td>{`${patient.sex}`}</td>
//             <td>{`${patient.treatment_site}`}</td>
//         </tr>
//     );

const PatientRow = (props) => {
    return (
        <tr>
            <td>{`${props.firstName}, ${props.lastName}`}</td>
            <td>{`${props.mrn}`}</td>
            <td>{`${props.dob}`}</td>
            <td>{`${props.sex}`}</td>
            <td>{`${props.treatmentSite}`}</td>
        </tr>
    )
}

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