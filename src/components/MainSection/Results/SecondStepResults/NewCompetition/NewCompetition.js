import React, {useEffect, useState} from 'react';
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

    const [athleteData, setAthleteData] = useState({name: "", surname: "", license: ""})
    const [sexFirstLetter, setSexFirstLetter] = useState("")
    const [resultsData, setResultsData] = useState([])

    const [isCompetitionActive, setIsCompetitionActive] = useState("active")
    const [isNewHeatPossible, setIsNewHeatPossible] = useState("newCompetitionButton__dezactive")

    const [showAddAthletesButton, setShowAddAthletesButton] = useState("addAthleteButton-dezactive")
    const [showAddTeamButton, setShowAddTeamButton] = useState("addTeamButton-dezactive")

    const [heatsList, setHeatsList] = useState([]) 

    const [addedAthletesList, setAddedAthletesList] = useState([])

    

    useEffect(() => {
        console.log(heatsList)
    }, [heatsList])

    

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

    // Środa 16.11 - do zrobienia tablica z nowymi seriami, z usuwaczem i automatycznymi oznaczeniami serii

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
                        
                                        athleteData={athleteData}
                                        setAthleteData={setAthleteData}
                        
                                        setIsNewHeatPossible={setIsNewHeatPossible}

                                        isNewHeatActive={isNewHeatActive}

                                        showAddAthletesButton={showAddAthletesButton}
                                        showAddTeamButton={showAddTeamButton}
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

                        setShowAddAthletesButton={setShowAddAthletesButton}

                        setIsNewHeatActive={setIsNewHeatActive}
                    />
                    <RelaysForm
                        currentFormType={currentFormType}
                        setCurrentFormType={setCurrentFormType}
                        
                        onChangeCompetitionData={onChangeCompetitionData}
                        setOnChangeCompetitionData={setOnChangeCompetitionData}

                        sexFirstLetter={sexFirstLetter}
                        setSexFirstLetter={setSexFirstLetter} 
                        
                        setIsNewHeatPossible={setIsNewHeatPossible}

                        setShowAddTeamButton={setShowAddTeamButton}

                        setIsNewHeatActive={setIsNewHeatActive}
                        
                    />    
                </div>
                <div>
                    <button 
                        className={isNewHeatPossible}
                        onClick={addHeatHandler}
                    >
                            New Heat
                    </button>
                    <button onClick={removeCompetitionHandler}>Delete</button>  
                </div>
                           
            </div>
        );
    }
    else {
        return null
    }

   
};

export default NewCompetition;