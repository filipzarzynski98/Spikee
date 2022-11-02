import React, {useState} from 'react';
import "./MainSection.scss"
import Form from './Form/Form';
import Results from './Results/Results';

const MainSection = () => {
    const [athleteData, setAthleteData] = useState({name: "", surname: ""})
    const [resultsData, setResultsData] = useState({})
    return (
        <div className='mainSection__wrapper'>
            <Results resultsData={resultsData}/>
            <Form athleteData={athleteData} setAthleteData={setAthleteData} setResultsData={setResultsData}/>   
        </div>
    );
};

export default MainSection;