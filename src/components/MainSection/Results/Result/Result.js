import React from 'react';
import "./Result.scss"
 

const Result = ({resultsData}) => {
    return (
        <div className='result'>
            <img className='avatar' src="./men-avatar.png" alt='men-avatar' />
            <div className='data__wrapper'>
                <div className='athlete-data'>
                    <ul>
                        <li>{resultsData.name}</li>
                        <li>{resultsData.surname}</li>
                        <li>{resultsData.sex}</li>
                        <li>{resultsData.competition}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Result;
