import React from 'react';
import "./Athlete.scss"

const Athlete = ({
    athletesList,
    setAthletesList,
    hideToPrint,
    isFinalIndividualsFormActive

}) => {

    const removeAthleteHandler = (athleteToRemove) => {
        const position = athletesList.indexOf(athleteToRemove)
         const remove = athletesList.filter((elem) => athletesList.indexOf(elem) !== position)
         setAthletesList(remove)
    }

    if (isFinalIndividualsFormActive === "finalIndividualsForm-active") {
        return (
            <div className='athletesList__wrapper'>
                <table>
                    <tr className='tableLabel'>
                        <th className='name__flex-start'>Name</th>
                        <th>Track</th>
                        <th>Age Category</th>
                        <th>Year of birth</th>
                        <th>Data Base</th>
                        <th>Remove</th>
                    </tr>
                    {athletesList.map((elem, index) => {
                        return(
                        <tr key={index}>
                            <td><h4>{elem.name} {elem.surname}</h4></td>
                            <td className='center'><p>{elem.track}</p></td>
                            <td className='center'>{elem.ageCategory}</td>
                            <td className='center'>{elem.yearOfBirth}</td>
                            <td className='center'>
                                <button className={hideToPrint}>
                                    <a 
                                    href={`https://statystyka.pzla.pl/personal.php?page=profile&nr_zaw=${elem.license}&r=1&sezon_Z_L=Z`}
                                    target='_blank'
                                    rel="noreferrer"
                                    >
                                        Domtel
                                    </a>
                                </button>
                            </td>
                            <td className='center'><button className={hideToPrint} onClick={() => removeAthleteHandler(elem)}>Remove</button></td>
                        </tr>   
                    )
                })}
                </table>
            </div>
        );
    }
};

export default Athlete;