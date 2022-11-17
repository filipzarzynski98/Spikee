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

    isNewHeatActive,

    isFinalIndividualsFormActive,
    isFinalRelaysFormActive,
  

}) => {

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
            </div>
        ); 
    }
    else {
        return null
    }
    
};

export default NewHeat;