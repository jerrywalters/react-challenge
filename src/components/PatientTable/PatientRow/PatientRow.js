import React from 'react';
import { Link } from 'react-router-dom';

// import css
import './PatientRow.css';
import 'bulma/css/bulma.css'

// Here i've created a separate PatientData component to use within the rows
// I did this because using <Link> around the <tr> would create an <a> tag nest inside the <tr>
// this is invalid html, and complicated to style, etc.
// Inversely, I could use an onClick() function on the <tr> to just push the route to the MRN
// I didn't choose this solution because it's inaccessible, and if you wanted to copy the link, etc. it would cause issues.

const PatientData = (props) => {
    return (
        <td className="td__link">
            <Link className='patient-details__link' to={`patients/${props.route}`}>
                {props.tableData}
            </Link>
        </td>
    )
}

// Pass the PatientData component into the row with props for the route to use in <Link>

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