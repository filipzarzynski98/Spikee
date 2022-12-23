import React, { useState } from 'react';
import "./FirstStepResults.scss"

const FirstStepResults = ({
    currentResultsStep,
    setCurrentResultsStep,
    listName,
    setListName
}) => {

    const [listNameValidation, setListNameValidation] = useState("correct")

    const setListNameHandler = (e) => {
        setListName(e.target.value)
    }

    const nextStepHandler = (e) => {
        e.preventDefault()
        if (listName === "") {
            setListNameValidation("error")
        }
        else {
            setCurrentResultsStep(prevState => {
            return {
                    ...prevState,
                    firstStep: "dezactive",
                    secondStep: "active",
                }
            })
        } 
    }

    if (currentResultsStep.firstStep === "active") {
         return (
            <div className='firstStepResults__wrapper'>
                <h2>Set your list name</h2>
                <div className='listNameInput__wrapper'>
                    <input
                        className='listNameInput'
                        value={listName}
                        placeholder="e.g. My List"
                        onChange={setListNameHandler}
                    ></input>
                    <p className={listNameValidation}>Type the name</p>
                </div>
                <button className='setListNameButton' onClick={nextStepHandler}>Let's roll!</button>    
            </div>
         );
    }
    else {
        return null
    }
};

export default FirstStepResults;