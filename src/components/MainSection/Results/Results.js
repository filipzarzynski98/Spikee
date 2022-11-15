import React, { useState } from 'react';
import "./Results.scss"
import FirstStepResults from './FirstStepResults/FirstStepResults';
import SecondStepResults from './SecondStepResults/SecondStepResults'

const Results = ({
   
}) => {

    const [currentResultsStep, setCurrentResultsStep] = useState({
        firstStep: "active",
        secondStep: "dezactive",
        thirdStep: "dezactive",
        fourthStep: "dezactive",
        fifthStep: "dezactive"
    })

    const [listName, setListName] = useState("")

    

    // const removeAthlete = (deletingAthleteLicense) => {
    //     const updateAthletesList = resultsData.filter((athlete) => athlete !== deletingAthleteLicense);
    //     setResultsData(updateAthletesList)
    // }


    return (
        <div className='results__wrapper'>

            <FirstStepResults
                currentResultsStep={currentResultsStep}
                setCurrentResultsStep={setCurrentResultsStep}

                listName={listName}
                setListName={setListName}
            />
            <SecondStepResults
                currentResultsStep={currentResultsStep}
                setCurrentResultsStep={setCurrentResultsStep}

                listName={listName}
            />  
        </div>
    );
};

export default Results;