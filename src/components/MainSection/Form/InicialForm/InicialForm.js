import React from 'react';
import "./InicialForm.scss"

const InicialForm = ({
    currentFormType,
    setCurrentFormType
}) => {

  
    if (currentFormType.inicialForm === "active") {
      return (
        <div>
          <h2>Choose competition type...</h2>
          <button>Inividuals</button>  
          <button>Relays</button>  
        </div>
      );
    }
    else {
      return null
    }
    
};

export default InicialForm;