import React from 'react';
import "./NewCompetition.scss";
import InicialForm from './InicialForm/InicialForm';
import IndividualsForm from "./IndividualsForm/IndividualsForm"
import RelaysForm from "./RelaysForm/RelaysForm"
import FinalForm from "./FinalForm/FinalForm"


const NewCompetition = ({
   
}) => {

    return (
        <div className='newCompetition__wrapper'>
            <div>New Competition</div>
            <div>
                <InicialForm/>
                <IndividualsForm/>
                <RelaysForm/>
                <FinalForm/>
            </div>
              
        </div>
    );
};

export default NewCompetition;