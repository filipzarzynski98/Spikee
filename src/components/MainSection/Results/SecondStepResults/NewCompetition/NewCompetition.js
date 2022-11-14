import React, {useState} from 'react';
import "./NewCompetition.scss";
import InicialForm from './InicialForm/InicialForm';
import IndividualsForm from "./IndividualsForm/IndividualsForm"
import RelaysForm from "./RelaysForm/RelaysForm"
import FinalForm from "./FinalForm/FinalForm"


const NewCompetition = ({
    athleteData,
    setAthleteData,

    competitionNameAndStage,
    setCompetitionNameAndStage,
}) => {

    const [currentFormType, setCurrentFormType] = useState({ 
        inicialForm: "active",
        individualsForm: "dezactive",
        relaysForm: "dezactive",
        finalForm: "dezactive"
    })

    const [sexFirstLetter, setSexFirstLetter] = useState("")

    const [fromIndividualsRedirected, setFromIndividualsRedirected] = useState("dezactive") 
    const [fromRelaysRedirected, setFromRelaysRedirected] = useState("dezactive")

    return (
        <div className='newCompetition__wrapper'>
            <div>New Competition</div>
            <div>
                <InicialForm
                    currentFormType={currentFormType}
                    setCurrentFormType={setCurrentFormType}
                />
                <IndividualsForm
                    currentFormType={currentFormType}
                    setCurrentFormType={setCurrentFormType}

                    athleteData={athleteData}
                    setAthleteData={setAthleteData}

                    sexFirstLetter={sexFirstLetter}
                    setSexFirstLetter={setSexFirstLetter}

                    competitionNameAndStage={competitionNameAndStage}
                    setCompetitionNameAndStage={setCompetitionNameAndStage}

                    setFromIndividualsRedirected={setFromIndividualsRedirected}
                />
                <RelaysForm
                    currentFormType={currentFormType}
                    setCurrentFormType={setCurrentFormType}
                    
                    athleteData={athleteData}
                    setAthleteData={setAthleteData}

                    sexFirstLetter={sexFirstLetter}
                    setSexFirstLetter={setSexFirstLetter}

                    competitionNameAndStage={competitionNameAndStage}
                    setCompetitionNameAndStage={setCompetitionNameAndStage}

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
              
        </div>
    );
};

export default NewCompetition;