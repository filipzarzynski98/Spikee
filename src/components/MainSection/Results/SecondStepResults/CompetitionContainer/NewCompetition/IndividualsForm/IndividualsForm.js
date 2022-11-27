import React from 'react';
import "./IndividualsForm.scss"
import IndividualCompetitions from '../individualCompetitions';

const IndividualsForm = ({
    currentFormType,
    setCurrentFormType,

    onChangeCompetitionData,
    setOnChangeCompetitionData,
  

    sexFirstLetter,
    setSexFirstLetter,

    setIsNewHeatPossible,

    setIsFinalIndividualsFormActive
}) => {

  


    const setIndividualWomen = (e) => {
        e.preventDefault();

        setOnChangeCompetitionData(prevState => {
            return{
                ...prevState,
                sex: "female"
            }
        })

        setSexFirstLetter("W")
    }

    const setIndividualMen = (e) => {
        e.preventDefault();

        setOnChangeCompetitionData(prevState => {
            return{
                ...prevState,
                sex: "male"
            }
        })

        setSexFirstLetter("M")
    }



    const hurdlesCompetition =  () => {
        if (onChangeCompetitionData.sex === "female") {
            return "100m Hurdles"
        }
        else {
            return "110m Hurdles"
        } 
    }

    const heptathlonOrDecathlon =  () => {
        if (onChangeCompetitionData.sex === "female") {
            return "Heptathlon"
        }
        else {
            return "Decathlon"
        } 
    }
    
    const setCompetitionHandler = (e) => {
        setOnChangeCompetitionData(prevState => {
            return {
                ...prevState,
                competition: e.target.value
            }
        })
    }

    const setStageHandler = (e) => {
        setOnChangeCompetitionData(prevState => {
            return {
                ...prevState,
                stage: e.target.value
            }
        })
    }

    const previousFormStep = (e) => {
        e.preventDefault();
  
        setCurrentFormType(prevState => {
          return{
            ...prevState,
            inicialForm: "active",
            individualsForm: "dezactive",
            relaysForm: "dezactive",
            finalIndividualsForm: "dezactive",
            finalRelaysForm: "dezactive"
          }
        })
    }

    const nextFormStep = (e) => {
        e.preventDefault();

        setCurrentFormType(prevState => {
          return{
            ...prevState,
            inicialForm: "dezactive",
            individualsForm: "dezactive",
            relaysForm: "dezactive",
            finalIndividualsForm: "active",
            finalRelaysForm: "dezactive"
          }
        })

        setIsNewHeatPossible("newHeat-possible")

        setIsFinalIndividualsFormActive("finalIndividualsForm-active")
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
                <select 
                    value={onChangeCompetitionData.competition}
                    onChange={setCompetitionHandler}
                >
                        <option></option>
                        {IndividualCompetitions.map((elem, index) => <option key={index}>{elem} {sexFirstLetter}</option>)}
                        <option>{hurdlesCompetition()}</option>
                        <option>{heptathlonOrDecathlon()}</option>
                </select>
                <h3>Choose competition stage</h3>
                <select
                    value={onChangeCompetitionData.stage}
                    onChange={setStageHandler}
                >
                    <option></option>
                    <option>Heats</option>
                    <option>Pre-eliminations</option>
                    <option>Eliminations</option>
                    <option>Semifinal</option>
                    <option>Final</option>
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

export default IndividualsForm;