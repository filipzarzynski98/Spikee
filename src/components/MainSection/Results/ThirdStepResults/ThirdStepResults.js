import React from 'react';
import "./ThirdStepResults.scss"
import InicialForm from "./InicialForm/InicialForm"

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
                <div className='newCompetition__wrapper'>
                    <div>New Competition</div>
                    <InicialForm  
                        currentResultsStep={currentResultsStep} 
                        setCurrentResultsStep={setCurrentResultsStep}
                    />
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