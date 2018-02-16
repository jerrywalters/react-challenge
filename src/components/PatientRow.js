import React from 'react';
import patients from '../patients.json';
import { Link } from 'react-router-dom';
import './PatientRow.css';

// Here i've created a separate PatientData component to use within the rows
// I did this because using <Link> around the <tr> would create an <a> tag nest inside the <tr>
// this is invalid html, and complicated to style, etc.
// Inversely, I could use an onClick() function on the <tr> to just push the route to the MRN
// I didn't choose this solution because it's inaccessible, and if you wanted to copy the link, etc. it would cause issues. 

const PatientData = (props) => {
    return (
        <td>
            <Link className='react-router--link' to={`patients/${props.route}`}>
                {props.tableData}
            </Link>
        </td>
    )
}

const PatientRow = (props) => {
    return (
        <tr>
                <PatientData route={props.mrn} tableData={`${props.firstName}, ${props.lastName}`} />
                <PatientData route={props.mrn} tableData={props.mrn}/>
                <PatientData route={props.mrn} tableData={props.dob}/>
                <PatientData route={props.mrn} tableData={props.sex}/>
                <PatientData route={props.mrn} tableData={props.treatmentSite}/>
        </tr>
    )
}

export default PatientRow;