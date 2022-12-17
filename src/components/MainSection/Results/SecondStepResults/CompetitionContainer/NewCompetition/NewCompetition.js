import React, {useState} from 'react';
import "./NewCompetition.scss";
import InicialForm from './InicialForm/InicialForm';
import IndividualsForm from "./IndividualsForm/IndividualsForm"
import RelaysForm from "./RelaysForm/RelaysForm"
import Heats from './Heats/Heats';

const NewCompetition = ({
    hideToPrint,
    competitionsArray,
    removeCompetitionHandler,
    listConfirmed,
    isListConfirmed
}) => {
 
    const [currentFormType, setCurrentFormType] = useState({ 
        inicialForm: "active",
        individualsForm: "dezactive",
        relaysForm: "dezactive",
        finalIndividualsForm: "dezactive",
        finalRelaysForm: "dezactive"
    })
    const [onChangeCompetitionData, setOnChangeCompetitionData] = useState({
        competition: "", 
        sex: "", 
        stage: ""
    })
    const [sexFirstLetter, setSexFirstLetter] = useState("")
    const [isCompetitionActive, setIsCompetitionActive] = useState("active")
    const [isNewHeatPossible, setIsNewHeatPossible] = useState("newHeat -dezactive")
    const [isFinalIndividualsFormActive, setIsFinalIndividualsFormActive] = useState("finalIndividualsForm-dezactive")
    const [isFinalRelaysFormActive, setIsFinalRelaysFormActive] = useState("finalRelaysForm-dezactive")

   

    if (isCompetitionActive === "active") {
         return (
            <div className='newCompetition__wrapper'>
                <div className='heatsContainer'>
                    <h3>{onChangeCompetitionData.competition} {onChangeCompetitionData.stage}</h3>
                    <Heats
                        onChangeCompetitionData={onChangeCompetitionData}
                        isFinalIndividualsFormActive={isFinalIndividualsFormActive}
                        isFinalRelaysFormActive={isFinalRelaysFormActive}
                        isNewHeatPossible={isNewHeatPossible}
                        isListConfirmed={isListConfirmed}
                    />
                </div>
                <div className='forms__wrapper'>
                    <InicialForm
                        currentFormType={currentFormType}
                        setCurrentFormType={setCurrentFormType}
                        hideToPrint={hideToPrint}
                        isListConfirmed={isListConfirmed}
                    />
                    <IndividualsForm
                        currentFormType={currentFormType}
                        setCurrentFormType={setCurrentFormType}
                        onChangeCompetitionData={onChangeCompetitionData}
                        setOnChangeCompetitionData={setOnChangeCompetitionData}
                        sexFirstLetter={sexFirstLetter}
                        setSexFirstLetter={setSexFirstLetter}
                        setIsNewHeatPossible={setIsNewHeatPossible}
                        setIsFinalIndividualsFormActive={setIsFinalIndividualsFormActive}
                        isListConfirmed={isListConfirmed}
                    />
                    <RelaysForm
                        currentFormType={currentFormType}
                        setCurrentFormType={setCurrentFormType}                      
                        onChangeCompetitionData={onChangeCompetitionData}
                        setOnChangeCompetitionData={setOnChangeCompetitionData}
                        sexFirstLetter={sexFirstLetter}
                        setSexFirstLetter={setSexFirstLetter} 
                        setIsNewHeatPossible={setIsNewHeatPossible}
                        setIsFinalRelaysFormActive={setIsFinalRelaysFormActive}
                        isListConfirmed={isListConfirmed}
                    />    
                </div>        
            </div>
        );
    }
    else {
        return null
    }
};

export default NewCompetition;