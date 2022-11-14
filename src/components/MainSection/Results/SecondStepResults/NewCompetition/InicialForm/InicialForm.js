import React from 'react';
import "./InicialForm.scss"

const InicialForm = ({
    currentResultsStep,
    setCurrentResultsStep,
}) => {

    const redirectToIndividualsHandler = (e) => {
        e.preventDefault()
        setCurrentResultsStep(prevState => {
            return {
                ...prevState,
                firstStep: "dezactive",
                secondStep: "dezactive",
                thirdStep: "dezactive",
                fourthStep: "active",
                fifthStep: "dezactive"
            }
        })
    }

    const redirectToRelaysHandler = (e) => {
        e.preventDefault()
        setCurrentResultsStep(prevState => {
            return {
                ...prevState,
                firstStep: "dezactive",
                secondStep: "dezactive",
                thirdStep: "dezactive",
                fourthStep: "active",
                fifthStep: "dezactive"
            }
        })
    }

    return (
        <div className='inicialForm__wrapper'>
            <h2>Choose competition type...</h2>
            <button onClick={redirectToIndividualsHandler}>Inividuals</button>  
            <button onClick={redirectToRelaysHandler}>Relays</button> 
        </div>
    );
};

export default InicialForm;