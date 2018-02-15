import React from 'react';
import patients from '../patients.json';

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

export default PatientRow;