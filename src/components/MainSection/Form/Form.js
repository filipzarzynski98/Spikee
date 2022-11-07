import React, {useState} from 'react';
import "./Form.scss"
import Competitions from './competitions';


const Form = ({athleteData, setAthleteData, setResultsData, resultsData}) => {

    const [sex, setSex] = useState("")
    const [sexFirstLetter, setSexFirstLetter] = useState("")

    // form validation states

    const [validationErrorName, setValidadionErrorName] = useState("correct")
    const [validationErrorSurname, setValidadionErrorSurname] = useState("correct")
    const [validationErrorLicense, setValidadionErrorLicense] = useState("correct")


    // Inputs values are setting to athleteData.name and athleteData.surname
    
    const handleAthleteDataChange = (e) => {
        const {name, value} = e.target;
        setAthleteData(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    // Setting gender to sex and athleteData 
    // Also adding first gender letter to a competition

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

    // There are few competitions which specificity depends on gender

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

    // Setting selected competition to athleteData

    const handleCompetitionSelect = (e) => {
        setAthleteData(prevState => {
            return {
                ...prevState,
                competition: e.target.value
            }
        })
    }

    // Validation logic
    // After positive validation, athleteData is setting as one of the elements of resultsData object array
    // Inputs are cleared

    const handleClick = (e) => {
        e.preventDefault();

        if (athleteData.name === "" || athleteData.name.length < 2) {
            setValidadionErrorName("form-error")
        }
        else {
                setValidadionErrorName("correct")
        } 
        if (athleteData.surname === "" || athleteData.surname.length < 2) {
            setValidadionErrorSurname("form-error")
        }
        else {
            setValidadionErrorSurname("correct")
        } 
        if (athleteData.license === "" || athleteData.license.length < 2) {
            setValidadionErrorLicense("form-error")  
        }
        else{
            setValidadionErrorLicense("correct")
        }
        
        if (
            athleteData.name !== "" && athleteData.name.length >= 2 &&
            athleteData.surname !== "" && athleteData.surname.length >= 2 &&
            athleteData.license !== "" && athleteData.license.length >= 2
            ) {
                setResultsData(prevState => [...prevState, athleteData])
            
                setAthleteData(prevState => {
                    return {
                        ...prevState,
                        name: "",
                        surname: "",
                        license: ""  
                    }
                }) 
            }
    }

    return (
        <div className='form__wrapper'>
           <h3>Dodaj zawodnika</h3>
           <form>
                <div>
                    <label>Imię</label>
                    <input 
                        type="text" 
                        name="name" 
                        value={athleteData.name} 
                        onChange={handleAthleteDataChange}/>
                    <p className={validationErrorName}>Imię musi składać się co najmniej z 2 liter!</p>
                </div> 
                <div>
                    <label>Nazwisko</label>
                    <input 
                        type="text" 
                        name="surname" 
                        value={athleteData.surname} 
                        onChange={handleAthleteDataChange}/>
                    <p className={validationErrorSurname}>Nazwisko musi składać się co najmniej z 2 liter!</p>
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
                <div>
                    <label>Nr licencji</label>
                    <input 
                        type="text" 
                        name="license" 
                        value={athleteData.license} 
                        onChange={handleAthleteDataChange}/>
                    <p className={validationErrorLicense}>Nr licencji musi składać się wyłącznie z cyfr!</p>
                </div>
                <button onClick={handleClick}>Dodaj</button>
           </form>
            
        </div>
    );
};

export default Form;
