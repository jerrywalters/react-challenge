import React from 'react';

const PatientSingle = (props) => {
    // function handleClick(e) {
    //     e.preventDefault();
    //     history.push('/patients');
    // }

    return (
        <div>
            <button>Back</button>
            <div className="patient-single__info">
                <h2>{props.match.params.patientId}</h2>
            </div>
        </div>
    )
}

export default PatientSingle;