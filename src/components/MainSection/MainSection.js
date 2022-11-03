import React, {useState} from 'react';
import "./MainSection.scss"
import Form from './Form/Form';
import Results from './Results/Results';

const MainSection = () => {
    const [athleteData, setAthleteData] = useState({name: "", surname: "", sex: "", competition: ""})
    const [resultsData, setResultsData] = useState([])
    return (
        <div className='mainSection__wrapper'>
            <Results resultsData={resultsData}/>
            <Form athleteData={athleteData} setAthleteData={setAthleteData} resultsData={resultsData} setResultsData={setResultsData}/>   
        </div>
    );
};

export default MainSection;