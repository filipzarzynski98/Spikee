import React, {useState} from 'react';
import "./Form.scss"
import Competitions from './competitions';


const Form = ({athleteData, setAthleteData}) => {

    const [sex, setSex] = useState("")
    const [sexFirstLetter, setSexFirstLetter] = useState("")
    

    const handleSexChange = (e) => {
        setSex(e.target.value)
        if (sex === "male") {
            setSexFirstLetter("M")
        }
        else {
            setSexFirstLetter("K")
        }
         
    }

    const handle100mHurdlesOption = () => {
        if (sex === "female") {
            return `110m p.pł ${sexFirstLetter}`
        }
        else {
            return `100m p.pł ${sexFirstLetter}`
        }
    }

    const heptathlonOrDecathlon = () => {
        if (sex === "female") {
            return `Dziesięciobój ${sexFirstLetter}`
        }
        else {
            return `Siedmiobój ${sexFirstLetter}`
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
                    <select value={sex} onChange={handleSexChange}>
                        <option></option>
                        <option value="male">Kobieta</option>
                        <option value="female">Mężczyzna</option>
                    </select>
                </div>
                <div>
                    <label>Konkurencja</label>
                    <select>
                        {Competitions.map((elem, index) => <option key={index}>{elem} {sexFirstLetter}</option>)}
                        <option>{handle100mHurdlesOption()}</option>
                        <option>{heptathlonOrDecathlon()}</option>                   
                    </select>
                </div>
                <button>Dodaj</button>
           </form>
            
        </div>
    );
};

export default Form;
