import React, { useState } from 'react';
import "./NewHeat.scss"
import FinalIndividualsForm from './FinalIndividualsForm/FinalIndividualsForm';
import FinalRelaysForm from './FinalRelaysForm/FinalRelaysForm';

const NewHeat = ({
    currentFormType,
    setCurrentFormType,

    athleteData,
    setAthleteData,

    setIsNewHeatPossible,

    showAddAthletesButton,
    setShowAddAthletesButton,
    showAddTeamButton,
    setShowAddTeamButton,

    isNewHeatActive,
}) => {

    const [isFinalIndividualsFormActive, setIsFinalIndividualsFormActive] = useState("finalIndividualsForm-dezactive")
    const [isFinalRelaysFormActive, setIsFinalRelaysFormActive] = useState("finalRelaysForm-dezactive")

    const isFinalIndividualsFormActivation = (e) => {
        setIsFinalIndividualsFormActive("finalIndividualsForm-active")
        setShowAddAthletesButton("addAthleteButton-dezactive")
    }
    const isFinalRelaysFormActivation = (e) => {
        setIsFinalRelaysFormActive("finalRelaysForm-active")
        setShowAddTeamButton("addTeamButton-dezactive")
    }


    // PO TRENINGU - DODAJ ZNIKANIE "ADD ATLETE" I "ADD TEAM"

    if (isNewHeatActive === "newHeat-active") {
        return (
            <div>
                <div>
                </div>
                <FinalIndividualsForm
                    currentFormType={currentFormType}
                    setCurrentFormType={setCurrentFormType}

                    athleteData={athleteData}
                    setAthleteData={setAthleteData}

                    setIsNewHeatPossible={setIsNewHeatPossible}

                    isFinalIndividualsFormActive={isFinalIndividualsFormActive}
                />
                <FinalRelaysForm
                    currentFormType={currentFormType}
                    setCurrentFormType={setCurrentFormType}

                    isFinalRelaysFormActive={isFinalRelaysFormActive}
                />
                <br/>
                <button 
                    className={showAddAthletesButton}
                    onClick={isFinalIndividualsFormActivation}
                >
                    New Athlete
                </button>
                <button 
                    className={showAddTeamButton}
                    onClick={isFinalRelaysFormActivation}
                >
                    New Team
                </button>
            </div>
        ); 
    }
    else {
        return null
    }
    
};

export default NewHeat;