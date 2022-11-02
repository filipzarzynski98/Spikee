import React, {useState} from 'react';
import "./MainSection.scss"
import Form from './Form/Form';
import Results from './Results/Results';

const MainSection = () => {
    const [athleteData, setAthleteData] = useState({name: "", surname: "", sex: "", competition: ""})
    return (
        <div className='mainSection__wrapper'>
            <Results athleteData={athleteData}/>
            <Form athleteData={athleteData} setAthleteData={setAthleteData}/>   
        </div>
    );
};

export default MainSection;