import React from 'react';
import "./Results.scss"

const Results = ({resultsData}) => {
    return (
        <div className='results__wrapper'>
            <ul>
                {resultsData.map((elem, index) => <li key={index}>
                    {elem.name}
                    <br/> 
                    {elem.surname}
                    <br/>  
                    {elem.sex} 
                    <br/> 
                    {elem.competition}
                </li>)}
            </ul>
            
        </div>
    );
};

export default Results;