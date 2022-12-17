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
    setIsFinalRelaysFormActive,
    isListConfirmed
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
        setIsNewHeatPossible("newHeat-possible")
        setIsFinalRelaysFormActive("finalRelaysForm-active")
    }

    if (currentFormType.relaysForm === "active") {
        return (
            <div className={isListConfirmed('relaysForm__wrapper')}>
                <p>RelaysForm</p>
                <h2>Ladies or gentlemen...?</h2>
                <div className='womenAndManButtons__wrapper'>
                    <button className='womenButton' onClick={setRelaysWomen}>Women</button>
                    <button className='menButton' onClick={setRelaysMen}>Men</button>
                </div>
                <h2>Choose competition</h2>
                <select
                    className='relaysForm__select'
                    value={onChangeCompetitionData.competition} 
                    onChange={setCompetitionHandler}
                    >
                        <option></option>
                        {RelaysCompetitions.map((elem, index) => <option key={index}>{elem} {sexFirstLetter}</option>)}
                </select>
                <h2>Choose stage</h2>
                <select
                    className='relaysForm__select' 
                    value={onChangeCompetitionData.stage} 
                    onChange={setStageHandler}>
                        <option></option>
                        <option>Heats</option>
                        <option>Pre-eliminations</option>
                        <option>Eliminations</option>
                        <option>Semifinal</option>
                        <option>Final</option>
                </select>
                <div className='backAndNextButtons__wrapper'>
                    <button className='backButton' onClick={previousFormStep}>Back</button>
                    <button className='nextButton' onClick={nextFormStep}>Next</button> 
                </div>   
            </div>
        );
    }
    else {
        return null
    }
};

export default RelaysForm;