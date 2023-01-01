import React, { useEffect, useState } from 'react';
import "./FirstStepResults.scss"
import {motion} from "framer-motion"
import icon from "../../../../images/Spikee - ikona.png"

const FirstStepResults = ({
    currentResultsStep,
    setCurrentResultsStep,
    listName,
    setListName
}) => {

    const [listNameValidation, setListNameValidation] = useState("correct")
    const [iconMove, setIconMove] = useState(false)
    const [submitButtonContent, setSubmitButtonContent] = useState("title")
    const [elementPosition, setElementPosition] = useState("setListNameButton")

    const nextStepHandler = () => {
        setCurrentResultsStep(prevState => {
            return {
                    ...prevState,
                    firstStep: "dezactive",
                    secondStep: "active",
                }
        })
    }

  
    useEffect(() => {
            if (iconMove === true) {
                setTimeout(nextStepHandler, 1200)
            }
    })


    const setListNameHandler = (e) => {
        setListName(e.target.value)
    }

    const submitButtonContentHandler = () => {
        if (submitButtonContent === "title") {
            return "Let's start!"
        }
        else {
            return(
                <motion.img 
                    className="icon-button" 
                    src={icon}
                    animate={{left: iconMove ? 227 : 0}}
                    transition={{type:'tween', duration: 1}}
                 /> 
            )
        }
        
    }

    const submitListNameHandler = (e) => {
        e.preventDefault()
        if (listName === "") {
            setListNameValidation("error")
        }
        else {
            setIconMove(!iconMove)
            setSubmitButtonContent("icon")
            setElementPosition("setListNameButton-submited")
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
                <button 
                    className={elementPosition} 
                    onClick={submitListNameHandler}
                >
                    {submitButtonContentHandler()}
                </button>    
            </div>
         );
    }
    else {
        return null
    }
};

export default FirstStepResults;