import React, { useState, useRef} from 'react';
import "./SecondStepResults.scss"
import CompetitionContainer from './CompetitionContainer/CompetitionContainer';
import { useReactToPrint } from 'react-to-print';
import NewCompAndConfirmListButtons from './NewCompAndConfirmListButtons/NewCompAndConfirmListButtons';
import EditAndPrintButtons from './EditAndPrintButtons/EditAndPrintButtons';


const SecondStepResults = ({
    currentResultsStep,
    listName
}) => {
    
    const [competitionsArray, setCompetitionsArray] = useState([])
    const [competitionsCounter, setCompetitionsCounter] = useState(0)
    const [listConfirmed, setListConfirmed] = useState(false)
    const [isThereAnyCompetition, setIsThereAnyCompetition] = useState(false)

    const competitionsRef = useRef();
    const printHandler = useReactToPrint({
        content: () => competitionsRef.current,
        documentTitle: `${listName}`,
    })
    
    const addNewCompetition = (e) => {
        e.preventDefault()
        setCompetitionsCounter(prevState => prevState + 1)
        setCompetitionsArray(prevState => [...prevState, {id: competitionsCounter}]) 
        setIsThereAnyCompetition(true)
    }

    const removeCompetitionHandler = (competitionToRemove) => {
        const position = competitionsArray.indexOf(competitionToRemove)
        const filteredCompetitionsArray = competitionsArray.filter((elem) => competitionsArray.indexOf(elem) !== position)
        setCompetitionsArray(filteredCompetitionsArray)
    }

    const confirmList = () => {
        setListConfirmed(true)
    }

    // const hideToPrint = () => {
    //     if (listConfirmed === true) {
    //         return "hide"
    //     }
    //     else {
    //         return "active"
    //     }
    // }
 
    if (currentResultsStep.secondStep === "active") {
        return (
            <div className='secondStep__wrapper'>
                <div className='competitionContainer__wrapper' ref={competitionsRef}>
                    <div className='listName__wrapper'>
                        <h2 className='listName'>{listName}</h2>
                    </div>
                    <CompetitionContainer
                        competitionsArray={competitionsArray}
                        removeCompetitionHandler={removeCompetitionHandler}
                        setCompetitionsArray={setCompetitionsArray}
                        listConfirmed={listConfirmed}
                    />
                </div>
                <div className='secondStep__buttons'>
                    <NewCompAndConfirmListButtons
                        addNewCompetition={addNewCompetition}
                        isThereAnyCompetition={isThereAnyCompetition}
                        confirmList={confirmList}
                        listConfirmed={listConfirmed}
                    />
                    <EditAndPrintButtons
                        listConfirmed={listConfirmed}
                        setListConfirmed={setListConfirmed}
                        printHandler={printHandler}
                    />
                </div>
            </div>
        );
    }
    else {
        return null
    }
};

export default SecondStepResults;