import React, { useState } from 'react';
import "./Results.scss"
import FirstStepResults from './FirstStepResults/FirstStepResults';
import SecondStepResults from './SecondStepResults/SecondStepResults'

const Results = () => {

    const [currentResultsStep, setCurrentResultsStep] = useState({
        firstStep: "active",
        secondStep: "dezactive",
    })

    const [listName, setListName] = useState("")

    return (
        <div className='results__wrapper'>
            <div>
                <FirstStepResults
                    currentResultsStep={currentResultsStep}
                    setCurrentResultsStep={setCurrentResultsStep}
                    listName={listName}
                    setListName={setListName}
                />
            </div>
            <div className='secondStep__container'>
                <SecondStepResults
                    currentResultsStep={currentResultsStep}
                    setCurrentResultsStep={setCurrentResultsStep}
                    listName={listName}
                />  
            </div>
        </div>
    );
};

export default Results;