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

    const listElemsColour = (index) => {
        if (index % 2 === 0) {
            return "darkRed"
        }
        else {
            return "black"
        }
    }
    return (
        <div className='athletesList__wrapper'>
            <table>
                <tr>
                    <th className='name__flex-start'>Name</th>
                    <th>Track</th>
                    <th>License</th>
                    <th>Data Base</th>
                    <th>Remove</th>
                </tr>
                {athletesList.map((elem, index) => {
                    return(
                    <>
                        <tr className={listElemsColour(index)} key={index}>
                            <td><h4>{elem.name} {elem.surname}</h4></td>
                            <td className='center'><p>{elem.track}</p></td>
                            <td className='center'><p>{elem.license}</p></td>
                            <td className='center'><button className={hideToPrint}>Domtel</button></td>
                            <td className='center'><button className={hideToPrint} onClick={() => removeAthleteHandler(elem)}>Remove</button></td>
                        </tr>
                        <div className='buttons__wrapper'>
                            
                        </div>
                        
                    </>
                )
            })}
            </table>
        </div>
    );
};

export default Athlete;