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

    const competitionsNeutralColorToPrint = () => {
        if (listConfirmed === false) {
            return 'competitions__wrapper'
        }
        else {
            return 'competitions__wrapper-neutralized' 
        }
    }

    return (
        <div className={competitionsNeutralColorToPrint()}>
            {competitionsArray.map((elem) => {
                return (
                    <div className='seperate__wrapper' key={elem.id}>
                        <NewCompetition
                            competitionsArray={competitionsArray}
                            setCompetitionsArray={setCompetitionsArray}
                            listConfirmed={listConfirmed}
                            isListConfirmed={isListConfirmed}
                        />
                        <div className='deleteCompButton__wrapper'>
                            <button 
                                className={`deleteCompButton ${isListConfirmed('active')}`} 
                                onClick={() => removeCompetitionHandler(elem)}
                            >
                              Delete Competition
                            </button>
                        </div>
                        <div className={`${isListConfirmed('competitions__seperator')}`}></div> 
                    </div>)} 
                )
            }
        </div>
    );
};

export default CompetitionContainer;