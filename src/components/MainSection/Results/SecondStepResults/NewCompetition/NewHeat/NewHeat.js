import React, { useEffect, useState } from 'react';
import "./NewHeat.scss"
import FinalIndividualsForm from './FinalIndividualsForm/FinalIndividualsForm';
import FinalRelaysForm from './FinalRelaysForm/FinalRelaysForm';
import Athlete from './Athlete/Athlete';
import Team from './Team/Team';

const NewHeat = ({
  
    isFinalIndividualsFormActive,
    isFinalRelaysFormActive,

    heatLabel,

    setCounter
    
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

                    athletesList={athletesList}
                    setAthletesList={setAthletesList}
                />
                <FinalRelaysForm
                    teamData={teamData}
                    setTeamData={setTeamData}
                    teamsList={teamsList}
                    setTeamsList={setTeamsList}

                    isFinalRelaysFormActive={isFinalRelaysFormActive}
                />
            </div>   
        </div>
    )
}

export default NewHeat;


//////////////////////////////////////////////////////////
// Do ew. weryfikacji

// import React, {useState} from 'react';

// const NewHeat = () => {

//     const [heatsList, setHeatsList] = useState([])
//     const [counterID, setCounterID] = useState(0)

//     const addHeatHandler = (e) => {
//         e.preventDefault();
//         setCounterID(prevState => prevState + 1)
//         setHeatsList(prevState => [...prevState, counterID])
//     }

//     const removeHeatHandler = (heatToRemove) => {
//         const position = heatsList.indexOf(heatToRemove);
//         const filteredHeatsList = heatsList.filter((elem) => heatsList.indexOf(elem) !== position);
//         setHeatsList(filteredHeatsList);
//     }

//     return (
//         <div>
//             {heatsList.map((elem, index) => {
//                 return(
//                     <div key={index}>
//                         <h4>Heat {heatsList.indexOf(elem) + 1} / {heatsList.length}</h4>
//                         <SomeComponent/>
//                         <AnotherComponent/>
//                         <button onClick={() => removeHeatHandler(elem)}>Remove Heat</button>
//                     </div>
//                 ) 
//             })}
//             <button onClick={addHeatHandler}>Add Heat</button>
//         </div>
//     )
// }

// export default NewHeat;

/////////////////////////////////////////////////////////