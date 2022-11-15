import React, {useState} from 'react';
import "./NewCompetition.scss";
import InicialForm from './InicialForm/InicialForm';
import IndividualsForm from "./IndividualsForm/IndividualsForm"
import RelaysForm from "./RelaysForm/RelaysForm"
import FinalIndividualsForm from "./FinalIndividualsForm/FinalIndividualsForm"
import FinalRelaysForm from './FinalRelaysForm/FinalRelaysForm';


const NewCompetition = () => {

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

  
    const removeCompetition = (e) => {
        e.preventDefault()

        setIsCompetitionActive("dezactive")
    }

    // Środa 16.11 - do zrobienia tablica z nowymi seriami, z usuwaczem i automatycznymi oznaczeniami serii

    if (isCompetitionActive === "active") {
         return (
            <div className='newCompetition__wrapper'>
                <div>
                    <h3>{onChangeCompetitionData.competition} {onChangeCompetitionData.stage}</h3>
                    <div>
                        <p></p>
                        <p></p>
                        <p></p>
                    </div>
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
                    <FinalIndividualsForm
                        currentFormType={currentFormType}
                        setCurrentFormType={setCurrentFormType}

                        athleteData={athleteData}
                        setAthleteData={setAthleteData}

                        
                    />
                    <FinalRelaysForm
                        currentFormType={currentFormType}
                        setCurrentFormType={setCurrentFormType}
                    />
                    
                </div>
                <div>
                    <button className={isNewHeatPossible}>New Heat</button>
                    <button onClick={removeCompetition}>Delete</button>  
                </div>
                           
            </div>
        );
    }
    else {
        return null
    }

   
};

export default NewCompetition;