import React from 'react';
import "./RelaysForm.scss"
import RelaysCompetitions from '../relaysCompetition';


const RelaysForm = ({
    currentFormType,
    setCurrentFormType,
    athleteData, 
    setAthleteData,
    sexFirstLetter,
    setSexFirstLetter
}) => {

    const setRelaysWomen = (e) => {
        e.preventDefault();

        setAthleteData(prevState => {
            return{
                ...prevState,
                sex: "female"
            }
        })

        setSexFirstLetter("W")
    }

    const setRelaysMen = (e) => {
        e.preventDefault();

        setAthleteData(prevState => {
            return{
                ...prevState,
                sex: "male"
            }
        })

        setSexFirstLetter("M")
    }


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
                    <button onClick={setRelaysWomen}>Women</button>
                    <button onClick={setRelaysMen}>Men</button>
                </div>
                <h3>Choose competition</h3>
                <select>
                    <option></option>
                    {RelaysCompetitions.map((elem, index) => <option key={index}>{elem} {sexFirstLetter}</option>)}
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