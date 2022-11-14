import React, { useState } from 'react';
import "./SecondStepResults"
import NewCompetition from './NewCompetition/NewCompetition';

const SecondStepResults = ({
    currentResultsStep,
    setCurrentResultsStep,

    listName
}) => {

    const [competitionsArray, setCompetitionArray] = useState([])

    const nextStepHandler = (e) => {
        e.preventDefault()

        setCompetitionArray(prevState => [...prevState, {}])
        console.log(competitionsArray)

        // setCurrentResultsStep(prevState => {
        //     return {
        //         ...prevState,
        //         firstStep: "dezactive",
        //         secondStep: "dezactive",
        //         thirdStep: "active",
        //         fourthStep: "dezactive",
        //         fifthStep: "dezactive"
        //     }
        // })
    }

    if (currentResultsStep.secondStep === "active") {
        return (
            <div>
                <p>2 Step</p>
                <h3>{listName}</h3>
                <button onClick={nextStepHandler}>New competition</button>
                {competitionsArray.map((elem, index) => {
                    return (
                        <div key={index}>

                            <NewCompetition/>

                        </div>)} 
                    )
                }   
            </div>
        );
    }
    else {
        return null
    }
};

export default SecondStepResults;