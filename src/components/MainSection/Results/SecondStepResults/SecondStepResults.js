import React, { useEffect, useState } from 'react';
import "./SecondStepResults"
import NewCompetition from './NewCompetition/NewCompetition';

const SecondStepResults = ({
    athleteData,
    setAthleteData,

    currentResultsStep,
    setCurrentResultsStep,

    competitionNameAndStage,
    setCompetitionNameAndStage,

    listName
}) => {

    const [competitionsArray, setCompetitionsArray] = useState([])

    useEffect(() => {
        console.log(competitionsArray)
    }, [competitionsArray])

    const nextStepHandler = (e) => {
        e.preventDefault()

        let counter = 1

        setCompetitionsArray(prevState => [...prevState, counter + competitionsArray.length])
    }

    const removeCompetition = (deletingCompetition) => {
        const updateCompetitionList = competitionsArray.filter((elem) => elem !== deletingCompetition);
        setCompetitionsArray(updateCompetitionList)
       
    }

    if (currentResultsStep.secondStep === "active") {
        return (
            <div>
                <p>2 Step</p>
                <h3>{listName}</h3>
                
                {competitionsArray.map((elem, index) => {
                    return (
                        <div key={index}>
                            <NewCompetition
                                competitionsArray={competitionsArray}
                                setCompetitionsArray={setCompetitionsArray}

                                athleteData={athleteData}
                                setAthleteData={setAthleteData}

                                competitionNameAndStage={competitionNameAndStage}
                                setCompetitionNameAndStage={setCompetitionNameAndStage}
                            />
                            <button onClick={() => removeCompetition(elem)}>Delete</button>
                            <br/>

                        </div>)} 
                    )
                }
                <button onClick={nextStepHandler}>New competition</button> 
                <button>Print</button> 
            </div>
        );
    }
    else {
        return null
    }
};

export default SecondStepResults;