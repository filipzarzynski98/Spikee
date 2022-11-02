import React from 'react';
import "./Results.scss"

const Results = ({athleteData}) => {
    return (
        <div className='results__wrapper'>
            <h1>{athleteData.name}</h1>
            <h2>{athleteData.surname}</h2>
        </div>
    );
};

export default Results;