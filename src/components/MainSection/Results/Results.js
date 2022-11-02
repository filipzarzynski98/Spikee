import React from 'react';
import "./Results.scss"

const Results = ({resultsData}) => {
    return (
        <div className='results__wrapper'>
            <h1>{resultsData.name}</h1>
            <h2>{resultsData.surname}</h2>
        </div>
    );
};

export default Results;