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
    hideToPrint
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
                        hideToPrint={hideToPrint}
                    />
                </div>
                <div>
                    <Team
                        teamsList={teamsList}
                        setTeamsList={setTeamsList}
                        hideToPrint={hideToPrint}
                    />
                </div>
                <FinalIndividualsForm
                    athleteData={athleteData}
                    setAthleteData={setAthleteData}
                    isFinalIndividualsFormActive={isFinalIndividualsFormActive}
                    setAthletesList={setAthletesList}
                    hideToPrint={hideToPrint}
                />
                <FinalRelaysForm
                    teamData={teamData}
                    setTeamData={setTeamData}
                    setTeamsList={setTeamsList}
                    isFinalRelaysFormActive={isFinalRelaysFormActive}
                    hideToPrint={hideToPrint}
                />
            </div>   
        </div>
    )
}

export default NewHeat;