import React, { useEffect, useState } from 'react';
import "./Result.scss"
import menAvatar from "../../../../images/men-avatar.png"
import womanAvatar from "../../../../images/woman-avatar2.png"
 

const Result = ({resultsData, setResultsData}) => {

    const [avatarGender, setAvatarGender] = useState("")    

    // Setting avatar depending of selected gender

    useEffect(() => {
        chooseAvatarGender()
    })
    
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
                        <li>{resultsData.license}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Result;
