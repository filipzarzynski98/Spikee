import React from 'react';
import "./RelaysForm.scss"
import RelaysCompetitions from '../relaysCompetition';

const RelaysForm = ({
    currentFormType,
    setCurrentFormType,

    onChangeCompetitionData,
    setOnChangeCompetitionData,

    sexFirstLetter,
    setSexFirstLetter,

    setIsNewHeatPossible,

    setShowAddTeamButton,

    setIsNewHeatActive
}) => {

    const setRelaysWomen = (e) => {
        e.preventDefault();

        setOnChangeCompetitionData(prevState => {
            return{
                ...prevState,
                sex: "female"
            }
        })

        setSexFirstLetter("W")

        console.log(sexFirstLetter)
    }

    const setRelaysMen = (e) => {
        e.preventDefault();

        setOnChangeCompetitionData(prevState => {
            return{
                ...prevState,
                sex: "male"
            }
        })

        setSexFirstLetter("M")
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
            finalIndividualsForm: "dezactive",
            finalRelaysForm: "active"
          }
        })

        setIsNewHeatPossible("newCompetitionButton__active")

        setShowAddTeamButton("addTeamButton-active")

        setIsNewHeatActive("newHeat-active")
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
                <select
                    value={onChangeCompetitionData.competition}
                    onChange={setCompetitionHandler}
                >
                    <option></option>
                    {RelaysCompetitions.map((elem, index) => <option key={index}>{elem} {sexFirstLetter}</option>)}
                </select>
                <h3>Choose stage</h3>
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

export default RelaysForm;