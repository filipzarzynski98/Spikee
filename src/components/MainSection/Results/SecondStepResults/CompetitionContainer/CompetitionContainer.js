import React from 'react';
import NewCompetition from './NewCompetition/NewCompetition';
import "./CompetitionContainer.scss"

const CompetitionContainer = ({
    competitionsArray,
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
                    </div>)} 
                )
            } 
        </div>
    );
};

export default CompetitionContainer;