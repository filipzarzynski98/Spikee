import React, { useState, useRef, useEffect } from 'react';
import "./SecondStepResults.scss"
import CompetitionContainer from './CompetitionContainer/CompetitionContainer';
import { useReactToPrint } from 'react-to-print';

const SecondStepResults = ({
    currentResultsStep,
    listName
}) => {
    
    const [competitionsArray, setCompetitionsArray] = useState([])
    const [competitionsCounter, setCompetitionsCounter] = useState(0)
    const [listConfirmed, setListConfirmed] = useState("unconfirmed")
    const [isEditButtonActive, setIsEditButtonActive] = useState("hide")
    const [isThereAnyCompetition, setIsThereAnyCompetition] = useState(false)

    useEffect(() => {
        console.log(competitionsArray)
    }, [competitionsArray])

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

    const confirmButton = () => {
       if (listConfirmed === "unconfirmed" && isThereAnyCompetition === true ) {
            return "active" 
       }
       else {
        return "hide"
       } 
    }

    const printButton = () => {
       if (listConfirmed === "unconfirmed") {
            return "hide"
       }
       else {
            return "active"
       } 
    }

    const confirmList = () => {
        setListConfirmed("confirmed")
        setIsEditButtonActive("active")
    }

    const editList = () => {
        setIsEditButtonActive("hide")
        setListConfirmed("unconfirmed")
    }

    const hideToPrint = () => {
        if (listConfirmed === "unconfirmed") {
            return "active"
        }
        else {
            return "hide"
        }
    }
 
    if (currentResultsStep.secondStep === "active") {
        return (
            <div className='secondStep__wrapper'>
                {/* <p>2 Step</p> */}
                <div className='competitionContainer__wrapper' ref={competitionsRef}>
                    <h2>{listName}</h2>
                    <CompetitionContainer
                        competitionsArray={competitionsArray}
                        removeCompetitionHandler={removeCompetitionHandler}
                        setCompetitionsArray={setCompetitionsArray}
                        hideToPrint={hideToPrint()}
                    />
                </div>
                <div className='secondStep__buttons'>
                    <div className='newCompetitionAndConfirmListButtons'>
                        <button className='newCompetitionButton' onClick={addNewCompetition}>New competition</button>
                        <button className={`confirmListButton ${confirmButton()}`} onClick={confirmList}>Confirm List</button> 
                    </div>
                    <div className='editAndPrintButtons'>
                        <button className={`editListButton ${isEditButtonActive}`} onClick={editList}>Edit</button> 
                        <button className={`printListButton ${printButton()}`} onClick={printHandler}>Print</button>
                    </div>
                </div>
            </div>
        );
    }
    else {
        return null
    }
};

export default SecondStepResults;