import React from 'react';
import "./Team.scss"

const Team = ({
    teamsList,
    setTeamsList,
    hideToPrint,
    isFinalRelaysFormActive
}) => {

    const removeTeamHandler = (teamToRemove) => {
        const position = teamsList.indexOf(teamToRemove)
        const remove = teamsList.filter(elem => teamsList.indexOf(elem) !== position)
        setTeamsList(remove)
    }

    if (isFinalRelaysFormActive === "finalRelaysForm-active") {
        return (
            <div className='teamsList__wrapper'>
                <table className='teamsTable'>
                    <tr>
                        <th className='name__flex-start'>Club/country</th>
                        <th>Track</th>
                        <th>Remove</th>
                    </tr>
                    {teamsList.map((elem, index) => {
                        return(
                            <tr key={index}>
                                <td><h4>{elem.clubName} {elem.country}</h4></td>
                                <td className='center'><h4>{elem.track}</h4></td>                        
                                <td className='center'><button className={hideToPrint} onClick={() => removeTeamHandler(elem)}>Remove Team</button></td> 
                            </tr>
                        )
                    })}
                </table>
            </div>
        );
    }
};

export default Team;