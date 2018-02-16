import React from 'react';

const PatientSingle = (props) => {

    // Access browser histry in props to go back to previous route
    function handleClick(e) {
        e.preventDefault();
        props.history.goBack();
    }

    return (
        <div>
            <button onClick={e => handleClick(e)}>Back</button>
            <div className="patient-single__info">
                <h2>{props.match.params.patientId}</h2>
            </div>
        </div>
    )
}

export default PatientSingle;