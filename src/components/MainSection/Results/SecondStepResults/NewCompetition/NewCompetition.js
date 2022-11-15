import React, {useState} from 'react';
import "./NewCompetition.scss";
import InicialForm from './InicialForm/InicialForm';
import IndividualsForm from "./IndividualsForm/IndividualsForm"
import RelaysForm from "./RelaysForm/RelaysForm"
import FinalForm from "./FinalForm/FinalForm"


const NewCompetition = ({

}) => {

    const [currentFormType, setCurrentFormType] = useState({ 
        inicialForm: "active",
        individualsForm: "dezactive",
        relaysForm: "dezactive",
        finalForm: "dezactive"
    })

    const [onChangeCompetitionData, setOnChangeCompetitionData] = useState({competition: "", sex: "", stage: ""})
    const [finalCompetitionData, setFinalCompetitionData] = useState([])

    const [athleteData, setAthleteData] = useState({name: "", surname: "", license: ""})
    const [sexFirstLetter, setSexFirstLetter] = useState("")
    const [resultsData, setResultsData] = useState([])

    const [fromIndividualsRedirected, setFromIndividualsRedirected] = useState("dezactive") 
    const [fromRelaysRedirected, setFromRelaysRedirected] = useState("dezactive")

    const [isComponentActive, setIsComponentActive] = useState("active")

  
    const removeComponent = (e) => {
        e.preventDefault()

        setIsComponentActive("dezactive")
    }

    if (isComponentActive === "active") {
         return (
            <div className='newCompetition__wrapper'>
                <div>
                    <h3>{onChangeCompetitionData.competition} {onChangeCompetitionData.stage}</h3>
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
                        finalCompetitionData={finalCompetitionData}
                        setFinalCompetitionData={setFinalCompetitionData}

                        sexFirstLetter={sexFirstLetter}
                        setSexFirstLetter={setSexFirstLetter}

                        setFromIndividualsRedirected={setFromIndividualsRedirected}
                    />
                    <RelaysForm
                        currentFormType={currentFormType}
                        setCurrentFormType={setCurrentFormType}
                        
                        onChangeCompetitionData={onChangeCompetitionData}
                        setOnChangeCompetitionData={setOnChangeCompetitionData}
                        finalCompetitionData={finalCompetitionData}
                        setFinalCompetitionData={setFinalCompetitionData}

                        sexFirstLetter={sexFirstLetter}
                        setSexFirstLetter={setSexFirstLetter}

                        setFromRelaysRedirected={setFromRelaysRedirected}
                    />
                    <FinalForm
                        currentFormType={currentFormType}
                        setCurrentFormType={setCurrentFormType}

                        athleteData={athleteData}
                        setAthleteData={setAthleteData}

                        fromIndividualsRedirected={fromIndividualsRedirected}
                        setFromIndividualsRedirected={setFromIndividualsRedirected}
                        fromRelaysRedirected={fromRelaysRedirected}
                        setFromRelaysRedirected={setFromRelaysRedirected}
                    />
                </div>
                <button onClick={removeComponent}>Delete</button>            
            </div>
        );
    }
    else {
        return null
    }

   
};

export default NewCompetition;