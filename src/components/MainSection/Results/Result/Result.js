import React, { useEffect, useState } from 'react';
import "./Result.scss"
import menAvatar from "../../../../images/men-avatar.png"
import womanAvatar from "../../../../images/woman-avatar2.png"
 

const Result = ({resultsData}) => {

    const [avatarGender, setAvatarGender] = useState("")

    const domtelHref = `https://statystyka.pzla.pl/personal.php?page=profile&nr_zaw=${resultsData.license}&r=1`
    

    // Setting avatar depending of selected gender

    useEffect(() => {
        chooseAvatarGender()
    }, [resultsData])
    
    const chooseAvatarGender = () => {
        if (resultsData.sex === "Kobieta") {
            setAvatarGender(womanAvatar)
        }
        if (resultsData.sex === "Mężczyzna") {
            setAvatarGender(menAvatar)
        }
    }
    
    return (
        <div className='result'>
            <img className='avatar' src={avatarGender} alt='men-avatar' />
            <div className='data__wrapper'>
                <div className='athlete-data'>
                    <ul>
                        <li>{resultsData.name}</li>
                        <li>{resultsData.surname}</li>
                        <li>{resultsData.sex}</li>
                        <li>{resultsData.competition}</li>
                    </ul>
                </div>
            </div>
            <button>
                <a href={domtelHref} target="_blank">Domtel</a>
            </button>
            <button>Usuń</button>
        </div>
    );
};

export default Result;
