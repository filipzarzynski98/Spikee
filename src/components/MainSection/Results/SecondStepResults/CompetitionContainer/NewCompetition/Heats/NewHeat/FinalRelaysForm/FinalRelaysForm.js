import React, { useState} from 'react';
import "./FinalRelaysForm.scss"
import countryList from './countryList';

const FinalRelaysForm = ({
    isFinalRelaysFormActive,
    teamData,
    setTeamData,
    setTeamsList,
    isListConfirmed
}) => {

    const [kindOfTeam, setKindOfTeam] = useState({club: "clubInput-dezactive", country: "countrySelect-dezactive"})

    const tracks = [1,2,3,4,5,6,7,8,9]

    const selectClubHandler = (e) => {
        e.preventDefault()
        setKindOfTeam(prevState => {
            return{
                ...prevState,
                club: "clubInput-active",
                country: "countrySelect-dezactive" 
            }
        })
        setTeamData(prevState => {
            return {
                ...prevState,
                type: "club"
            }
        })
    }

    const isKindOfTeamChoosed = () => {
        if (kindOfTeam.club ===  "clubInput-active" || kindOfTeam.country === "countrySelect-active") {
            return 'addTeamButton'
        }
        else {
            return "hide"
        }
    }
    
    const selectCountryHandler = (e) => {
        e.preventDefault()
        setKindOfTeam(prevState => {
            return {
                ...prevState,
                country: "countrySelect-active",
                club: "clubInput-dezactive"
            }
        })
        setTeamData(prevState => {
            return {
                ...prevState,
                type: "country"
            }
        })
    }

    const clubNameHandler = (e) => {
        setTeamData(prevState => {
            return {
                ...prevState,
                clubName: e.target.value
            }
        })
    }

    const chooseCountryHandler = (e) => {
        setTeamData(prevState => {
            return {
                ...prevState,
                country: e.target.value
            }
        })
    }

    const selectTrackHandler = (e) => {
        setTeamData(prevState => {
            return {
                ...prevState,
                track: e.target.value 
            }
        })
    }

    const addTeamHandler = (e) => {
        e.preventDefault()
        setTeamsList(prevState => [...prevState, teamData])
        setTeamData(prevState => {
            return {
                ...prevState,
                type: "", 
                clubName: "", 
                country: "", 
                track: ""
            }
        })
    }

    if (isFinalRelaysFormActive === "finalRelaysForm-active") {
        return (
            <div className={isListConfirmed('finalRelaysForm__wrapper')}>
                <p>FinalRelaysForm</p>
                <h2>Set kind of team</h2>
                <div className='clubAndCountryButtons__wrapper'>
                    <button className='clubButton' onClick={selectClubHandler}>Club</button>
                    <button className='countryButton' onClick={selectCountryHandler}>Country</button>
                </div>
                <div className={kindOfTeam.club}>
                    <h4>Enter the name of the club</h4>
                    <input value={teamData.clubName} onChange={clubNameHandler}/>
                    <label>Select track</label>
                    <select className='track__selectField' value={teamData.track} onChange={selectTrackHandler}>
                        <option></option>
                        {tracks.map((elem, index) => <option key={index}>{elem}</option>)}
                    </select> 
                </div>
                <div className={kindOfTeam.country}>
                    <h4>Choose country</h4>
                    <select value={teamData.country} onChange={chooseCountryHandler}>
                        <option></option>
                        {countryList.map((elem, index) => <option key={index}>{elem}</option>)}
                    </select>
                    <label>Select track</label>
                    <select className='track__selectField' value={teamData.track} onChange={selectTrackHandler}>
                        <option></option>
                        {tracks.map((elem, index) => <option key={index}>{elem}</option>)}
                    </select> 
                </div>
                <div className='addTeamButton__wrapper'>
                    <button className={isKindOfTeamChoosed()} onClick={addTeamHandler}>Add team</button> 
                </div>
                
            </div>
        );
    }
    else {
        return null
    }
};

export default FinalRelaysForm;