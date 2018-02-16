import React from 'react';

const PatientSingle = (props) => {
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