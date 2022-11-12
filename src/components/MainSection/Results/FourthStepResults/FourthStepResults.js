import React from 'react';
import "./FourthStepResults.scss"

const FourthStepResults = ({
    currentResultsStep,
    setCurrentResultsStep,

    listName
}) => {

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
            </div>
        ); 
    }
    else {
        return null
    }
};

export default FourthStepResults;