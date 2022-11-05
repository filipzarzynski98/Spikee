import React from 'react';
import "./Results.scss"
import Result from './Result/Result';

const Results = ({resultsData}) => {
    return (
        <div className='results__wrapper'>
            <div>
                {resultsData.map((result, index) => <Result resultsData={result} key={index}/>)}  
            </div>
            <div className='buttons__wrapper'>
                <button>Domtel</button>
                <button>Drukuj</button>
            </div>
            
        </div>
    );
};

export default Results;