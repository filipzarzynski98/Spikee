import React from 'react';
import "./RelaysForm.scss"

const RelaysForm = ({
    currentFormType,
    setCurrentFormType
}) => {

    const backToPreviousFormStep = (e) => {
        e.preventDefault();
  
        setCurrentFormType(prevState => {
          return{
            ...prevState,
            inicialForm: "active",
            individualsForm: "dezactive",
            relaysForm: "dezctive",
            finalForm: "dezactive"
          }
        })
      }

    if (currentFormType.relaysForm === "active") {
        return (
            <div>
                <p>RelaysForm</p>
                <h3>Ladies or gentlemen...?</h3>
                <div>
                    <button>Women</button>
                    <button>Men</button>
                </div>
                <h3>Choose competition</h3>
                <select>
                    <option></option>
                    <option></option>
                </select> 
                <button onClick={backToPreviousFormStep}>Back</button> 
            </div>
        );
    }
    else {
        return null
    }
    
};

export default RelaysForm;