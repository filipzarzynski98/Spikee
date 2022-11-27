import React, { useState, useRef } from 'react';
import "./SecondStepResults.scss"
import CompetitionContainer from './CompetitionContainer/CompetitionContainer';
import { useReactToPrint } from 'react-to-print';

const SecondStepResults = ({
    currentResultsStep,
    setCurrentResultsStep,

    listName
}) => {
    
    const [competitionsArray, setCompetitionsArray] = useState([])

    const competitionsRef = useRef();
    const printHandler = useReactToPrint({
        content: () => competitionsRef.current,
        documentTitle: `${listName}`,
        onAfterPrint: () => console.log("printing succesfull!")
    })
    
    const addNewCompetition = (e) => {
        e.preventDefault()
        let counter = 1
        setCompetitionsArray(prevState => [...prevState, {id: counter + competitionsArray.length}])
    }

    if (currentResultsStep.secondStep === "active") {
        return (
            <div className='secondStep__wrapper'>
                <p>2 Step</p>
                <div ref={competitionsRef}>
                    <h2>{listName}</h2>
                    <CompetitionContainer
                        competitionsArray={competitionsArray}
                        setCompetitionsArray={setCompetitionsArray}
                    />
                </div>
                <div>
                    <button onClick={addNewCompetition}>New competition</button> 
                    <button onClick={printHandler}>Print</button>
                </div>
            </div>
        );
    }
    else {
        return null
    }
};

export default SecondStepResults;