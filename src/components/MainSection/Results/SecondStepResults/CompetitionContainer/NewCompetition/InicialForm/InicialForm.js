import React from 'react';
import "./InicialForm.scss"

const InicialForm = ({
    currentFormType,
    setCurrentFormType,
    hideToPrint,
    isListConfirmed
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
            <div className={isListConfirmed('inicialForm__wrapper')}>
                <h2>Choose competition type...</h2>
                <div className='individualsAndRelaysButtons__wrapper'>
                    <button 
                        className='individualsButton' 
                        onClick={redirectToIndividualsHandler}
                    >
                    Inividuals
                    </button>  
                    <button
                        className='relaysButton'
                        onClick={redirectToRelaysHandler}
                    >
                    Relays
                    </button>
                </div>
                
            </div>
        );
    }
    else {
        return null
    }
};

export default InicialForm;