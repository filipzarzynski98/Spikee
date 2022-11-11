import React from 'react';
import "./RelaysForm.scss"
import RelaysCompetitions from '../relaysCompetition';


const RelaysForm = ({
    currentFormType,
    setCurrentFormType,
    athleteData, 
    setAthleteData,
    sexFirstLetter,
    setSexFirstLetter,
    setFromRelaysRedirected,
    competitionNameAndStage,
    setCompetitionNameAndStage
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


    const previousFormStep = (e) => {
        e.preventDefault();
  
        setCurrentFormType(prevState => {
          return{
            ...prevState,
            inicialForm: "active",
            individualsForm: "dezactive",
            relaysForm: "dezactive",
            finalForm: "dezactive"
          }
        })
      }

      const nextFormStep = (e) => {
        e.preventDefault();

        setFromRelaysRedirected("active")
  
        setCurrentFormType(prevState => {
          return{
            ...prevState,
            inicialForm: "dezactive",
            individualsForm: "dezactive",
            relaysForm: "dezactive",
            finalForm: "active"
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
                <button onClick={previousFormStep}>Back</button>
                <button onClick={nextFormStep}>Next</button>  
            </div>
        );
    }
    else {
        return null
    }
    
};

export default RelaysForm;