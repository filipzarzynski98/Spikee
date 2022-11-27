import React from 'react';
import NewCompetition from './NewCompetition/NewCompetition';
import "./CompetitionContainer.scss"

const CompetitionContainer = ({
    competitionsArray,
    setCompetitionsArray
}) => {
    return (
        <div>
            {competitionsArray.map((elem) => {
                return (
                    <div key={elem.id}>
                        <NewCompetition
                            competitionsArray={competitionsArray}
                            setCompetitionsArray={setCompetitionsArray}
                        />
                    </div>)} 
                )
            } 
        </div>
    );
};

export default CompetitionContainer;