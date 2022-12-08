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
            <div>
                <p>1 Step</p>
                <h2>Set your list name</h2>
                <input
                    value={listName}
                    placeholder="e.g. My List"
                    onChange={setListNameHandler}
                ></input>
                <p className={listNameValidation}>Type the name</p>
                <button onClick={nextStepHandler}>Next</button>    
            </div>
         );
    }
    else {
        return null
    }
};

export default FirstStepResults;