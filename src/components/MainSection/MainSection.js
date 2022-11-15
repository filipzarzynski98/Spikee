import React, {useState} from 'react';
import "./MainSection.scss"
import Results from './Results/Results';

const MainSection = () => {

    return (
        <div className='mainSection__wrapper'>
            <Results/>  
        </div>
    );
};

export default MainSection;