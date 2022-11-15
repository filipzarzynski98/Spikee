import React from 'react';
import "./FinalRelaysForm.scss"
import countryList from './countryList';

const FinalRelaysForm = ({
    currentFormType,
    setCurrentFormType,


}) => {

    const previousFormStep = (e) => {
        e.preventDefault();

        setCurrentFormType(prevState => {
            return{
                ...prevState,
                inicialForm: "dezactive",
                individualsForm: "dezactive",
                relaysForm: "active",
                finalIndividualsForm: "dezactive",
                finalRelaysForm: "dezactive"
            }
        })

    }

    if (currentFormType.finalRelaysForm === "active") {
        return (
            <div>
                <p>FinalRelaysForm</p>
                <button>Club</button>
                <button>Country</button>
                <h4>Enter the name of the club</h4>
                <input></input>
                <h4>Choose country</h4>
                <select>
                    {countryList.map((elem, index) => <option key={index}>{elem}</option>)}
                </select>
                <br/>
                <button onClick={previousFormStep}>Back</button> 
                <button>Submit</button>
            </div>
        );
    }
    else {
        return null
    }
};

export default FinalRelaysForm;