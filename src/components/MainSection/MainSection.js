import React, {useState} from 'react';
import "./MainSection.scss"
import Results from './Results/Results';

const MainSection = () => {

    const [athleteData, setAthleteData] = useState({name: "", surname: "", sex: "", competition: "", license: ""})
    const [resultsData, setResultsData] = useState([])
    const [competitionNameAndStage, setCompetitionNameAndStage] = useState("")

    return (
        <div className='mainSection__wrapper'>
            <Results
                athleteData={athleteData}
                setAthleteData={setAthleteData}
                
                resultsData={resultsData}
                setResultsData={setResultsData}
                
                competitionNameAndStage={competitionNameAndStage}
                setCompetitionNameAndStage={setCompetitionNameAndStage}
            />  
        </div>
    );
};

export default MainSection;