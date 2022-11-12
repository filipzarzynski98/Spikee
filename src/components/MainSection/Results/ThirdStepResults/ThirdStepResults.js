import React from 'react';
import "./ThirdStepResults.scss"

const ThirdStepResults = ({
    currentResultsStep,
    setCurrentResultsStep,

    listName
}) => {

    if (currentResultsStep.thirdStep === "active") {
         return (
            <div>
                <p>3 Step</p>
                <h3>{listName}</h3>
                <div>
                    #new-competition
                    <div>
                        # InicialForm.js
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

export default ThirdStepResults;