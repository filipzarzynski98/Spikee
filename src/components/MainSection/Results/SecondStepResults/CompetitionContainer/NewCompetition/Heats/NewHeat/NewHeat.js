import React, {useState } from 'react';
import "./NewHeat.scss"
import FinalIndividualsForm from './FinalIndividualsForm/FinalIndividualsForm';
import FinalRelaysForm from './FinalRelaysForm/FinalRelaysForm';
import Athlete from './Athlete/Athlete';
import Team from './Team/Team';

const NewHeat = ({
    isFinalIndividualsFormActive,
    isFinalRelaysFormActive,
    heatLabel, 
    isListConfirmed
}) => {

    const [athletesList, setAthletesList] = useState([])
    const [athleteData, setAthleteData] = useState({name: "", surname: "", license: "", track: ""})

    const [teamsList, setTeamsList] = useState([])
    const [teamData, setTeamData] = useState({type: "", clubName: "", country: "", track: ""})


    return (
        <div>
            {heatLabel}
            <div>
                <div>
                    <Athlete
                        athletesList={athletesList}
                        setAthletesList={setAthletesList}
                    />
                </div>
                <div>
                    <Team
                        teamsList={teamsList}
                        setTeamsList={setTeamsList} 
                    />
                </div>
                <FinalIndividualsForm
                    athleteData={athleteData}
                    setAthleteData={setAthleteData}
                    isFinalIndividualsFormActive={isFinalIndividualsFormActive}
                    setAthletesList={setAthletesList}
                    isListConfirmed={isListConfirmed}
                />
                <FinalRelaysForm
                    teamData={teamData}
                    setTeamData={setTeamData}
                    setTeamsList={setTeamsList}
                    isFinalRelaysFormActive={isFinalRelaysFormActive}
                    isListConfirmed={isListConfirmed}
                />
            </div>   
        </div>
    )
}

export default NewHeat;