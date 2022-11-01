import React from 'react';
import "./MainSection.scss"
import Form from './Form/Form';
import Results from './Results/Results';

const MainSection = () => {
    return (
        <div className='mainSection__wrapper'>
            <Results/>
            <Form/>   
        </div>
    );
};

export default MainSection;