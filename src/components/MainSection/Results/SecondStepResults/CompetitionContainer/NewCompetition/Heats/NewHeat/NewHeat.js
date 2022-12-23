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
    const [athleteData, setAthleteData] = useState({name: "", surname: "", pb: "", ageCategory: "", yearOfBirth: "", license: "", track: ""})

    const [teamsList, setTeamsList] = useState([])
    const [teamData, setTeamData] = useState({type: "", clubName: "", country: "", pbOrNR: "", track: ""})

   
    return (
        <div className='newHeat__sizer'>
            {heatLabel}
            <div>
                <div className='athletesList'>
                    <Athlete
                        athletesList={athletesList}
                        setAthletesList={setAthletesList}
                        isFinalIndividualsFormActive={isFinalIndividualsFormActive}
                        isListConfirmed={isListConfirmed}
                    />
                    <FinalIndividualsForm
                        athleteData={athleteData}
                        setAthleteData={setAthleteData}
                        isFinalIndividualsFormActive={isFinalIndividualsFormActive}
                        setAthletesList={setAthletesList}
                        isListConfirmed={isListConfirmed}
                    />
                </div>
                <div className='teamsList'>
                    <Team
                        teamsList={teamsList}
                        setTeamsList={setTeamsList}
                        isFinalRelaysFormActive={isFinalRelaysFormActive}
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
        </div>
    )
}

export default NewHeat;