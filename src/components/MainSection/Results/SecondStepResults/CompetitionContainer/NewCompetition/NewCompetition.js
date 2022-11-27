import React, {useEffect, useState} from 'react';
import "./NewCompetition.scss";
import InicialForm from './InicialForm/InicialForm';
import IndividualsForm from "./IndividualsForm/IndividualsForm"
import RelaysForm from "./RelaysForm/RelaysForm"
import Heats from './Heats/Heats';
import NewHeat from './NewHeat/NewHeat';


const NewCompetition = () => {
 
    const [currentFormType, setCurrentFormType] = useState({ 
        inicialForm: "active",
        individualsForm: "dezactive",
        relaysForm: "dezactive",
        finalIndividualsForm: "dezactive",
        finalRelaysForm: "dezactive"
    })

    //Nazwa konkurencji, płeć oraz etap
    const [onChangeCompetitionData, setOnChangeCompetitionData] = useState({competition: "", sex: "", stage: ""})

    // Przypisanie pierwszej litery płci do konkurencji
    const [sexFirstLetter, setSexFirstLetter] = useState("")

    // Warunek renderowania NewCompetition
    const [isCompetitionActive, setIsCompetitionActive] = useState("active")

    // Warunek wyświetlania buttona "New Heat" inicjowany przez pomyślne przejście IndividualsForm/RelaysForm
    const [isNewHeatPossible, setIsNewHeatPossible] = useState("newHeat -dezactive")
    
    // Warunek renderowania FinalIndividualsForm/FinalRelaysForm, który spełniony zostaje podczas kliknięcia "New Heat"
    const [isFinalIndividualsFormActive, setIsFinalIndividualsFormActive] = useState("finalIndividualsForm-dezactive")
    const [isFinalRelaysFormActive, setIsFinalRelaysFormActive] = useState("finalRelaysForm-dezactive")

   
       
    const removeCompetitionHandler = (e) => {
        e.preventDefault()

        setIsCompetitionActive("dezactive")
    }

    if (isCompetitionActive === "active") {
         return (
            <div className='newCompetition__wrapper'>
                <h3>{onChangeCompetitionData.competition} {onChangeCompetitionData.stage}</h3>
                <Heats
                    onChangeCompetitionData={onChangeCompetitionData}

                    isFinalIndividualsFormActive={isFinalIndividualsFormActive}
                    isFinalRelaysFormActive={isFinalRelaysFormActive}

                    isNewHeatPossible={isNewHeatPossible}

                   
                />
              
                <div>
                    <InicialForm
                        currentFormType={currentFormType}
                        setCurrentFormType={setCurrentFormType}
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
                        
                    />    
                </div>   
                <button onClick={removeCompetitionHandler}>Delete Competition</button>  
                
                 
                
                           
            </div>
        );
    }
    else {
        return null
    }

   
};

export default NewCompetition;