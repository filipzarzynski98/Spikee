import React from 'react';
import "./InicialForm.scss"

const InicialForm = ({
    currentFormType,
    setCurrentFormType
}) => {

    const handleIndividualsCompetitionChange = (e) => {
      e.preventDefault();
      setCurrentFormType(prevState => {
        return{
          ...prevState,
          inicialForm: "dezactive",
          individualsForm: "active",
          relaysForm: "dezactive",
          finalForm: "dezactive"
        }
      })
    }
    
    const handleRelaysCompetitionChange = (e) => {
      e.preventDefault();
      setCurrentFormType(prevState => {
        return{
          ...prevState,
          inicialForm: "dezactive",
          individualsForm: "dezactive",
          relaysForm: "active",
          finalForm: "dezactive"
        }
      })
    }

    if (currentFormType.inicialForm === "active") {
      return (
        <div>
          <h2>Choose competition type...</h2>
          <button onClick={handleIndividualsCompetitionChange}>Inividuals</button>  
          <button onClick={handleRelaysCompetitionChange}>Relays</button> 
        </div>
      );
    }
    else {
      return null
    }
    
};

export default InicialForm;