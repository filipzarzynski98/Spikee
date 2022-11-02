import React, {useState} from 'react';
import "./MainSection.scss"
import Form from './Form/Form';
import Results from './Results/Results';

const MainSection = () => {
    const [athleteName, setAthleteName] = useState("")
    return (
        <div className='mainSection__wrapper'>
            <Results athleteName={athleteName}/>
            <Form athleteName={athleteName} setAthleteName={setAthleteName}/>   
        </div>
    );
};

export default MainSection;