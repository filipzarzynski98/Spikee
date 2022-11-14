import React from 'react';
import "./FourthStepResults.scss"

const FourthStepResults = ({
    currentResultsStep,
    setCurrentResultsStep,

    listName
}) => {

    const previousStepHandler = (e) => {
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

    if (currentResultsStep.fourthStep === "active") {
        return (
            <div>
                <p>4 Step</p>
                <div>
                    #new-competition
                    <div>
                        # IndividualsForm.js || RelaysForm.js
                        <button>Next</button>
                    </div>
                </div>
                <button>New competition</button>
                <button>Print</button>
                <button onClick={previousStepHandler}>BACK</button>
            </div>
        ); 
    }
    else {
        return null
    }
};

export default FourthStepResults;