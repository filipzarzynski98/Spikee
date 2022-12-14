import React from 'react';
import NewCompetition from './NewCompetition/NewCompetition';
import "./CompetitionContainer.scss"

const CompetitionContainer = ({
    competitionsArray,
    removeCompetitionHandler,
    setCompetitionsArray,
    hideToPrint
}) => {
    return (
        <div>
            {competitionsArray.map((elem) => {
                return (
                    <div key={elem.id}>
                        <NewCompetition
                            competitionsArray={competitionsArray}
                            setCompetitionsArray={setCompetitionsArray}
                            hideToPrint={hideToPrint}
                        />
                        <button 
                            className={hideToPrint} 
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