import React, { useState } from 'react';
import "./NewHeat.scss"
import FinalIndividualsForm from './FinalIndividualsForm/FinalIndividualsForm';
import FinalRelaysForm from './FinalRelaysForm/FinalRelaysForm';
import Athlete from './Athlete/Athlete';

const NewHeat = ({
    currentFormType,
    setCurrentFormType,

    setIsNewHeatPossible,

    isNewHeatActive,

    isFinalIndividualsFormActive,
    isFinalRelaysFormActive,
  

}) => {

    const [athletesList, setAthletesList] = useState([])
    const [athleteData, setAthleteData] = useState({name: "", surname: "", license: "", track: ""})

    const [teamsList, setTeamsList] = useState([])
    const [teamData, setTeamData] = useState({})


    
    

    if (isNewHeatActive === "newHeat-active") {
        return (
            <div>
                <div>
                    <Athlete
                        athletesList={athletesList}
                        setAthletesList={setAthletesList}
                    />
                </div>
                <FinalIndividualsForm
                    currentFormType={currentFormType}
                    setCurrentFormType={setCurrentFormType}

                    athleteData={athleteData}
                    setAthleteData={setAthleteData}

                    setIsNewHeatPossible={setIsNewHeatPossible}

                    isFinalIndividualsFormActive={isFinalIndividualsFormActive}

                    athletesList={athletesList}
                    setAthletesList={setAthletesList}
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