import React from 'react';
import "./InicialForm.scss"

const InicialForm = ({
    currentFormType,
    setCurrentFormType,
    hideToPrint
}) => {

    const redirectToIndividualsHandler = (e) => {
        e.preventDefault();
        setCurrentFormType(prevState => {
            return {
                ...prevState,
                inicialForm: "dezactive",
                individualsForm: "active",
                relaysForm: "dezactive",
                finalIndividualsForm: "dezactive",
                finalRelaysForm: "dezactive"
            }
        })
    } 
    
    const redirectToRelaysHandler = (e) => {
        e.preventDefault();
        setCurrentFormType(prevState => {
            return {
                ...prevState,
                inicialForm: "dezactive",
                individualsForm: "dezactive",
                relaysForm: "active",
                finalForm: "dezactive",
                finalRelaysForm: "dezactive"
            }
        })
    }
    
    if (currentFormType.inicialForm === "active") {
         return (
            <div className={`inicialForm__wrapper ${hideToPrint}`}>
                <h2>Choose competition type...</h2>
                <button onClick={redirectToIndividualsHandler}>Inividuals</button>  
                <button onClick={redirectToRelaysHandler}>Relays</button> 
            </div>
        );
    }
    else {
        return null
    }
};

export default InicialForm;