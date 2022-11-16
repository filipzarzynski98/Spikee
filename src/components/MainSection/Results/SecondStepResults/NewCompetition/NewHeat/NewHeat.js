import React from 'react';
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

    isNewHeatActive
}) => {

    if (isNewHeatActive === "active") {
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
                />
                <FinalRelaysForm
                    currentFormType={currentFormType}
                    setCurrentFormType={setCurrentFormType}
                />
                <br/>
                <button className={showAddAthletesButton}>New Athlete</button>
                <button>New Team</button>
            </div>
        ); 
    }
    else {
        return null
    }
    
};

export default NewHeat;