import React from 'react';
import "./NewCompetition.scss";
import InicialForm from './InicialForm/InicialForm';


const NewCompetition = () => {
    return (
        <div className='newCompetition__wrapper'>
            <div>New Competition</div>
            <InicialForm/>  
        </div>
    );
};

export default NewCompetition;