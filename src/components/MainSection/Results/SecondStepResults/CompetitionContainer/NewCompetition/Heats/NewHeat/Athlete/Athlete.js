import React from 'react';
import "./Athlete.scss"

const Athlete = ({
    athletesList,
    setAthletesList,
    hideToPrint
}) => {

    const removeAthleteHandler = (athleteToRemove) => {
        const position = athletesList.indexOf(athleteToRemove)
         const remove = athletesList.filter((elem) => athletesList.indexOf(elem) !== position)
         setAthletesList(remove)
    }
    return (
        <div>
            {athletesList.map((elem, index) => {
                return(
                    <div key={index}>
                        <h4>{elem.name} {elem.surname}</h4> 
                        <p>{elem.track}</p>
                        {/* Do zrobienia przekierowanie z pomocą routera!   */}
                        <button className={hideToPrint}>Domtel</button>
                        <button className={hideToPrint} onClick={() => removeAthleteHandler(elem)}>Remove Athlete</button>
                    </div>
                )
            })}
        </div>
    );
};

export default Athlete;