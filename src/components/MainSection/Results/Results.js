import React, { useState } from 'react';
import "./Results.scss"
// import Result from './Result/Result';
import FirstStepResults from './FirstStepResults/FirstStepResults';
import SecondStepResults from './SecondStepResults/SecondStepResults'
// import ThirdStepResults from './ThirdStepResults/ThirdStepResults'
// import FourthStepResults from './FourthStepResults/FourthStepResults'
// import FifthStepResults from './FifthStepResults/FifthStepResults'


const Results = ({
    athleteData,
    setAthleteData,

    resultsData, 
    setResultsData,
    competitionNameAndStage,
    setCompetitionNameAndStage
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

                athleteData={athleteData}
                setAthleteData={setAthleteData}

                competitionNameAndStage={competitionNameAndStage}
                setCompetitionNameAndStage={setCompetitionNameAndStage}
            />  
        </div>
    );
};

export default Results;