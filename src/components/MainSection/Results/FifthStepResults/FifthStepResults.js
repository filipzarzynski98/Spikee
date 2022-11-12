import React from 'react';
import "./FifthStepResults.scss"

const FifthStepResults = ({
    currentResultsStep,
    setCurrentResultsStep,

    listName
}) => {

    if (currentResultsStep.fifthStep === "active") {
        return (
            <div>
                
            </div>
        );
    }
    else {
        return null
    }
    
};

export default FifthStepResults;