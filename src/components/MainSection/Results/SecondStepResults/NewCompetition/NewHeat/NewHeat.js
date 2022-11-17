import React, { useState } from 'react';
import "./NewHeat.scss"
import FinalIndividualsForm from './FinalIndividualsForm/FinalIndividualsForm';
import FinalRelaysForm from './FinalRelaysForm/FinalRelaysForm';

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


    // Do zrobienia: Usuwacz zawodnika, komponent NewAthlete
    

    if (isNewHeatActive === "newHeat-active") {
        return (
            <div>
                <div>
                    {athletesList.map((elem, index) => {
                        return(
                            <div key={index}>
                                <p>{elem.name}</p>
                                <p>{elem.surname}</p>
                                <p>{elem.license}</p>
                                <p>{elem.track}</p>
                                <button>Remove Athlete</button>
                            </div>
                        )
                    })}
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