import React from 'react';
import NewCompetition from './NewCompetition/NewCompetition';
import "./CompetitionContainer.scss"

const CompetitionContainer = ({
    competitionsArray,
    removeCompetitionHandler,
    setCompetitionsArray,
    hideToPrint,
    listConfirmed
}) => {

    const isListConfirmed = (wrapperName) => {
        if (listConfirmed === false) {
            return wrapperName
        }
        else {
            return `hide`
        }
    }

    return (
        <div className='competitions__wrapper'>
            {competitionsArray.map((elem) => {
                return (
                    <div key={elem.id}>
                        <NewCompetition
                            competitionsArray={competitionsArray}
                            setCompetitionsArray={setCompetitionsArray}
                            listConfirmed={listConfirmed}
                            isListConfirmed={isListConfirmed}
                        />
                        <button 
                            className={isListConfirmed('active')} 
                            onClick={() => removeCompetitionHandler(elem)}
                        >
                            Delete Competition
                        </button> 
                    </div>)} 
                )
            } 
        </div>
    );
};

export default CompetitionContainer;