import React from 'react';
import "./SecondStepResults"

const SecondStepResults = ({
    currentResultsStep,
    setCurrentResultsStep,

    listName
}) => {

    const nextStepHandler = (e) => {
        e.preventDefault()

        setCurrentResultsStep(prevState => {
            return {
                ...prevState,
                firstStep: "dezactive",
                secondStep: "dezactive",
                thirdStep: "active",
                fourthStep: "dezactive",
                fifthStep: "dezactive"
            }
        })
    }

    if (currentResultsStep.secondStep === "active") {
        return (
            <div>
                <p>2 Step</p>
                <h3>{listName}</h3>
                <button onClick={nextStepHandler}>New competition</button>    
            </div>
        );
    }
    else {
        return null
    }
};

export default SecondStepResults;