import React from 'react';
import "./Team.scss"

const Team = ({
    teamsList,
    setTeamsList
}) => {

    const removeTeamHandler = (teamToRemove) => {
        const position = teamsList.indexOf(teamToRemove)
        const remove = teamsList.filter(elem => teamsList.indexOf(elem) !== position)
        setTeamsList(remove)
    }
    return (
        <div>
            {teamsList.map((elem, index) => {
                return(
                    <div key={index}>
                        <h4>{elem.clubName} {elem.country} Track: {elem.track}</h4>
                        <button>Domtel</button>
                        <button onClick={() => removeTeamHandler(elem)}>Remove Team</button>
                    </div>
                )
            })}
        </div>
    );
};

export default Team;