import React from 'react';
import "./RelaysForm.scss"

const RelaysForm = ({
    currentFormType,
    setCurrentFormType
}) => {
    if (currentFormType.relaysForm === "active") {
        return (
            <div>
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
            </div>
        );
    }
    else {
        return null
    }
    
};

export default RelaysForm;