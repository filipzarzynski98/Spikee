import React from 'react';
import "./IndividualsForm.scss"
import IndividualCompetitions from '../individualCompetitions';

const IndividualsForm = ({
    currentFormType,
    setCurrentFormType,
    athleteData, 
    setAthleteData,
    sexFirstLetter,
    setSexFirstLetter
}) => {

    

    const setIndividualWomen = (e) => {
        e.preventDefault();

        setAthleteData(prevState => {
            return{
                ...prevState,
                sex: "female"
            }
        })

        setSexFirstLetter("W")
    }

    const setIndividualMen = (e) => {
        e.preventDefault();

        setAthleteData(prevState => {
            return{
                ...prevState,
                sex: "male"
            }
        })

        setSexFirstLetter("M")
    }



    const hurdlesCompetition =  () => {
        if (athleteData.sex === "female") {
            return "100m Hurdles"
        }
        else {
            return "110m Hurdles"
        } 
    }

    const heptathlonOrDecathlon =  () => {
        if (athleteData.sex === "female") {
            return "Heptathlon"
        }
        else {
            return "Decathlon"
        } 
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

    if (currentFormType.individualsForm === "active") {
       return (
            <div>
                <p>IndividualsForm</p>
                <h3>Ladies or gentlemen...?</h3>
                <div>
                    <button onClick={setIndividualWomen}>Women</button>
                    <button onClick={setIndividualMen}>Men</button>
                </div>
                <h3>Choose competition</h3>
                <select>
                    <option></option>
                    {IndividualCompetitions.map((elem, index) => <option key={index}>{elem} {sexFirstLetter}</option>)}
                    <option>{hurdlesCompetition()}</option>
                    <option>{heptathlonOrDecathlon()}</option>
                </select> 
                <button onClick={backToPreviousFormStep}>Back</button> 
            </div>
        );  
    }
    else {
        return null
    }
};

export default IndividualsForm;