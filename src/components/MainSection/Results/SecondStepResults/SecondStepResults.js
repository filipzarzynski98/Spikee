import React, { useState } from 'react';
import "./SecondStepResults.scss"
import CompetitionContainer from './CompetitionContainer/CompetitionContainer';
import NewCompetition from './NewCompetition/NewCompetition';

const SecondStepResults = ({
    currentResultsStep,
    setCurrentResultsStep,

    listName
}) => {
    
    const [competitionsArray, setCompetitionsArray] = useState([])
    
    const addNewCompetition = (e) => {
        e.preventDefault()
        let counter = 1
        setCompetitionsArray(prevState => [...prevState, {id: counter + competitionsArray.length}])
    }

    if (currentResultsStep.secondStep === "active") {
        return (
            <div className='secondStep__wrapper'>
                <div>
                    <p>2 Step</p>
                    <h3>{listName}</h3>
                    
                    {/* {competitionsArray.map((elem) => {
                        return (
                            <div key={elem.id}>
                                <NewCompetition
                                    competitionsArray={competitionsArray}
                                    setCompetitionsArray={setCompetitionsArray}
                                />
                            </div>)} 
                        )
                    }  */}

                    <CompetitionContainer
                        competitionsArray={competitionsArray}
                        setCompetitionsArray={setCompetitionsArray}
                    />
                    
                </div>
                <div>
                    <button onClick={addNewCompetition}>New competition</button> 
                    <button>Print</button>
                </div>
            </div>
        );
    }
    else {
        return null
    }
};

export default SecondStepResults;