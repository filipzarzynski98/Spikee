import React, {useState} from 'react';
import "./Form.scss"
import Competitions from './competitions';


const Form = ({athleteData, setAthleteData, resultsData, setResultsData}) => {

    const [sex, setSex] = useState("")
    const [sexFirstLetter, setSexFirstLetter] = useState("")
    
   

    const handleSexSelect = (e) => {
        if (e.target.value === "Kobieta") {
            setSex("Kobieta")
            setSexFirstLetter("K")
            setAthleteData(prevState => {
                return {
                    ...prevState,
                    sex: "Kobieta"
                }
            })
        }
        if (e.target.value === "Mężczyzna") {
            setSex("Mężczyzna")
            setSexFirstLetter("M")
            setAthleteData(prevState => {
                return {
                    ...prevState,
                    sex: "Mężczyzna"
                }
            })
        }
    }

    
    const handle100mHurdlesOption = () => {
        if (sex === "Kobieta") {
            return `100m p.pł ${sexFirstLetter}`
        }
        else {
            return `110m p.pł ${sexFirstLetter}`
        }
    }

    const heptathlonOrDecathlon = () => {
        if (sex === "Kobieta") {
            return `Siedmiobój ${sexFirstLetter}`
        }
        else {
            return `Dziesięciobój ${sexFirstLetter}`
        }
    }

    const handleAthleteDataChange = (e) => {
        const {name, value} = e.target;
        setAthleteData(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    const handleCompetitionSelect = (e) => {
        setAthleteData(prevState => {
            return {
                ...prevState,
                competition: e.target.value
            }
        })
    }

    const handleClick = (e) => {
        e.preventDefault();

        setResultsData(prevState => [...prevState, athleteData])
        
        setAthleteData(prevState => {
            return {
                ...prevState,
                name: "",
                surname: "",
                
            }
        })
    }

    return (
        <div className='form__wrapper'>
           <h3>Dodaj zawodnika</h3>
           <form>
                <div>
                    <label>Imię</label>
                    <input type="text" name="name" value={athleteData.name} onChange={handleAthleteDataChange}></input>
                </div> 
                <div>
                    <label>Nazwisko</label>
                    <input type="text" name="surname" value={athleteData.surname} onChange={handleAthleteDataChange}></input>
                </div>
                <div>
                    <label>Płeć</label>
                    <select value={sex} onChange={handleSexSelect}>
                        <option></option>
                        <option>Kobieta</option>
                        <option>Mężczyzna</option>
                    </select>
                </div>
                <div>
                    <label>Konkurencja</label>
                    <select onChange={handleCompetitionSelect}>
                        <option></option>
                        {Competitions.map((elem, index) => <option key={index}>{elem} {sexFirstLetter}</option>)}
                        <option>{handle100mHurdlesOption()}</option>
                        <option>{heptathlonOrDecathlon()}</option>                   
                    </select>
                </div>
                <button onClick={handleClick}>Dodaj</button>
           </form>
            
        </div>
    );
};

export default Form;
