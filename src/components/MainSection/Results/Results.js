import React from 'react';
import "./Results.scss"

const Results = ({athleteName}) => {
    return (
        <div className='results__wrapper'>
            <h1>{athleteName}</h1>
        </div>
    );
};

export default Results;