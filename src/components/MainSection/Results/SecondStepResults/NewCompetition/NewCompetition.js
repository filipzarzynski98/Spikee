import React, {useEffect, useState} from 'react';
import "./NewCompetition.scss";
import InicialForm from './InicialForm/InicialForm';
import IndividualsForm from "./IndividualsForm/IndividualsForm"
import RelaysForm from "./RelaysForm/RelaysForm"
import NewHeat from './NewHeat/NewHeat';


const NewCompetition = () => {

    const [isNewHeatActive, setIsNewHeatActive] = useState("dezactive")
    
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

    const [showAddAthletesButton, setShowAddAthletesButton] = useState("dezactive")
    const [showAddTeamButton, setShowAddTeamButton] = useState("dezactive")

    const [heatsList, setHeatsList] = useState([])

    const [addedAthletesList, setAddedAthletesList] = useState([])

    useEffect(() => {
        console.log(heatsList)
    }, [heatsList])

    const addHeatHandler = (e) => {
        e.preventDefault()

        let counter = 1
        let index = counter + heatsList.length 

        setHeatsList(prevState => [...prevState, {heat: index}])
    }
  
    const removeCompetitionHandler = (e) => {
        e.preventDefault()

        setIsCompetitionActive("dezactive")
    }

    const removeHeatHandler = ( heatToRemove) => {
        const position = heatsList.indexOf(heatToRemove)
        const remove = heatsList.filter((elem) => elem.heat !== heatToRemove)
        setHeatsList(remove)
    }

    // Środa 16.11 - do zrobienia tablica z nowymi seriami, z usuwaczem i automatycznymi oznaczeniami serii

    if (isCompetitionActive === "active") {
         return (
            <div className='newCompetition__wrapper'>
                <div>
                    {/* Nazwa konkurencji */}
                    <h3>{onChangeCompetitionData.competition} {onChangeCompetitionData.stage}</h3>
                    {heatsList.map((elem) => {
                        return (
                            <div key={elem.heat}>
                                <div className='newHeat'>
                                    {/* Kontener na nowe pozycje zawodników/sztafet */}
                                    <NewHeat
                                        currentFormType={currentFormType}
                                        setCurrentFormType={setCurrentFormType}
                        
                                        athleteData={athleteData}
                                        setAthleteData={setAthleteData}
                        
                                        setIsNewHeatPossible={setIsNewHeatPossible}

                                        isNewHeatActive={isNewHeatActive}

                                        showAddAthletesButton={showAddAthletesButton}
                                    />
                                </div>
                                <button onClick={() => removeHeatHandler(elem.heat)}>Delete Heat</button>
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
                    />
                    <RelaysForm
                        currentFormType={currentFormType}
                        setCurrentFormType={setCurrentFormType}
                        
                        onChangeCompetitionData={onChangeCompetitionData}
                        setOnChangeCompetitionData={setOnChangeCompetitionData}

                        sexFirstLetter={sexFirstLetter}
                        setSexFirstLetter={setSexFirstLetter} 
                        
            
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