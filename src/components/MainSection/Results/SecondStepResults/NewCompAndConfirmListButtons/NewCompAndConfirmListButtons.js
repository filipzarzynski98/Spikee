import React from 'react';
import "./NewCompAndConfirmListButtons.scss"

const NewCompAndConfirmListButtons = ({
    addNewCompetition,
    isThereAnyCompetition,
    confirmList,
    listConfirmed
}) => {

    const newCompetitionButtonAppear = () => {
        if (listConfirmed === true) {
            return null
        }
        else {
            return <button className='newCompetitionButton' onClick={addNewCompetition}>New Competition</button>
        }
    }
    const confirmButtonAppear = () => {
        if (isThereAnyCompetition === true && listConfirmed === false) {
            return  <button className='confirmListButton' onClick={confirmList}>Confirm List</button>
        }
    }
    return (
        <div className='newCompAndConfirmListButtons__wrapper'>
            {newCompetitionButtonAppear()}
            {confirmButtonAppear()}
        </div>
    );
};

export default NewCompAndConfirmListButtons;