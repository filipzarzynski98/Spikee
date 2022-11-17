import React, {useState} from 'react';
import "./NewCompetition.scss";
import InicialForm from './InicialForm/InicialForm';
import IndividualsForm from "./IndividualsForm/IndividualsForm"
import RelaysForm from "./RelaysForm/RelaysForm"
import NewHeat from './NewHeat/NewHeat';


const NewCompetition = () => {

    const [isNewHeatActive, setIsNewHeatActive] = useState("newHeat-dezactive")

    
    
    const [currentFormType, setCurrentFormType] = useState({ 
        inicialForm: "active",
        individualsForm: "dezactive",
        relaysForm: "dezactive",
        finalIndividualsForm: "dezactive",
        finalRelaysForm: "dezactive"
    })

    const [onChangeCompetitionData, setOnChangeCompetitionData] = useState({competition: "", sex: "", stage: ""})

    
    const [sexFirstLetter, setSexFirstLetter] = useState("")
    const [resultsData, setResultsData] = useState([])

    const [isCompetitionActive, setIsCompetitionActive] = useState("active")
    const [isNewHeatPossible, setIsNewHeatPossible] = useState("newCompetitionButton__dezactive")

    const [heatsList, setHeatsList] = useState([]) 

    const [isFinalIndividualsFormActive, setIsFinalIndividualsFormActive] = useState("finalIndividualsForm-dezactive")
    const [isFinalRelaysFormActive, setIsFinalRelaysFormActive] = useState("finalRelaysForm-dezactive")
    

    const addHeatHandler = (e) => {
        e.preventDefault()
        let counter = 1
        setHeatsList(prevState => [...prevState, counter + heatsList.length])
        
    }
  
    const removeCompetitionHandler = (e) => {
        e.preventDefault()

        setIsCompetitionActive("dezactive")
    }

    const removeHeatHandler = (heatToRemove) => {
        const position = heatsList.indexOf(heatToRemove)
        const remove = heatsList.filter((elem) => heatsList.indexOf(elem) !== position)
        setHeatsList(remove)
    }

    if (isCompetitionActive === "active") {
         return (
            <div className='newCompetition__wrapper'>
                <div>
                    {/* Nazwa konkurencji */}
                    <h3>{onChangeCompetitionData.competition} {onChangeCompetitionData.stage}</h3>
                    {heatsList.map((elem, index) => {
                        return (
                            <div key={index}>
                                <div className='newHeat'>
                                    <h4>Heat {heatsList.indexOf(elem) + 1}/{heatsList.length}</h4>
                                    {/* Kontener na nowe pozycje zawodników/sztafet */}
                                    <NewHeat
                                        currentFormType={currentFormType}
                                        setCurrentFormType={setCurrentFormType}
                        
                                        setIsNewHeatPossible={setIsNewHeatPossible}

                                        isNewHeatActive={isNewHeatActive}

                                        isFinalIndividualsFormActive={isFinalIndividualsFormActive}
                                        isFinalRelaysFormActive={isFinalRelaysFormActive}
                                    />
                                </div>
                                <button onClick={() => removeHeatHandler(elem)}>Delete Heat</button>
                            </div>
                              
                            
                        )
                    })}
                </div>
              
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

                        setIsNewHeatActive={setIsNewHeatActive}
                        
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

                        setIsNewHeatActive={setIsNewHeatActive}

                        setIsFinalRelaysFormActive={setIsFinalRelaysFormActive}
                        
                    />    
                </div>
                <div className='newCompetitions__buttons__wrapper'>
                   <button 
                    className={isNewHeatPossible}
                    onClick={addHeatHandler}
                    >
                            New Heat
                    </button>
                    <button onClick={removeCompetitionHandler}>Delete Competition</button>  
                </div>
                 
                
                           
            </div>
        );
    }
    else {
        return null
    }

   
};

export default NewCompetition;