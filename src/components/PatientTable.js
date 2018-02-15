import React from 'react';
import patients from '../patients.json';

const PatientTable = () => {
    const patientList = patients.map((patient) => 
        <tr>
            <td>{`${patient.name.last}, ${patient.name.first}`}</td>
            <td>{`${patient.mrn}`}</td>
            <td>{`${patient.dob}`}</td>
            <td>{`${patient.sex}`}</td>
            <td>{`${patient.treatment_site}`}</td>
        </tr>
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