import React from 'react';
import "./Form.scss"

const Form = () => {
    return (
        <div className='form__wrapper'>
           <h3>Dodaj zawodnika</h3>
           <div>
                <label>Imię</label>
                <input type="text"></input>
           </div>
            
        </div>
    );
};

export default Form;