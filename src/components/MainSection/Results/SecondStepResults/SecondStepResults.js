import React, { useState, useRef } from 'react';
import "./SecondStepResults.scss"
import CompetitionContainer from './CompetitionContainer/CompetitionContainer';
import { useReactToPrint } from 'react-to-print';

const SecondStepResults = ({
    currentResultsStep,
    listName
}) => {
    
    const [competitionsArray, setCompetitionsArray] = useState([])
    const [listConfirmed, setListConfirmed] = useState("unconfirmed")
    const [isEditButtonActive, setIsEditButtonActive] = useState("hide")

    const competitionsRef = useRef();
    const printHandler = useReactToPrint({
        content: () => competitionsRef.current,
        documentTitle: `${listName}`,
    })
    
    const addNewCompetition = (e) => {
        e.preventDefault()
        let counter = 1
        setCompetitionsArray(prevState => [...prevState, {id: counter + competitionsArray.length}])
    }

    const confirmButton = () => {
       if (listConfirmed === "unconfirmed") {
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
                        setCompetitionsArray={setCompetitionsArray}
                        hideToPrint={hideToPrint()}
                    />
                </div>
                <div className='secondStep__buttons'>
                    <button onClick={addNewCompetition}>New competition</button>
                    <button className={isEditButtonActive} onClick={editList}>Edit</button> 
                    <button className={printButton()} onClick={printHandler}>Print</button>
                    <button className={confirmButton()} onClick={confirmList}>Confirm</button>
                </div>
            </div>
        );
    }
    else {
        return null
    }
};

export default SecondStepResults;