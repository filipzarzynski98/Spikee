import React, {useState} from 'react';
import "./FinalIndividualsForm.scss"

const FinalIndividualsForm = ({
    athleteData, 
    setAthleteData,
    isFinalIndividualsFormActive,
    setAthletesList,
    isListConfirmed
}) => {

    // form validation states

    const [validationErrorName, setValidationErrorName] = useState("correct")
    const [validationErrorSurname, setValidationErrorSurname] = useState("correct")
    const [validationErrorLicense, setValidationErrorLicense] = useState("correct")

    const ageCategories = ["Dziecko mł.", "Dziecko st.", "U16", "U18", "U20", "U23", "Senior", "Weteran", "Masters"]
    const tracks = [1,2,3,4,5,6,7,8,9];

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

    const handleAgeCategoryChange = (e) => {
        setAthleteData(prevState => {
            return {
                ...prevState,
                ageCategory: e.target.value
            }
        })
    } 

    const yearsGenerator = () => {
        let currentYear = new Date().getFullYear()
        let earliestYear = 1900
        const years = []

        for (let i = currentYear; i >= earliestYear; i--) {
            years.push(i)
        }
        
        return years.map((elem, index) => <option key={index}>{elem}</option>)
    }

    const handleYearOfBirthChange = (e) => {
        setAthleteData(prevState => {
            return {
                ...prevState,
                yearOfBirth: e.target.value
            }
        })
    }

      // Setting license value to state
    // Only number validation

    const handleLicenseChange = (e) => {
        setAthleteData(prevState => {
            return {
                ...prevState,
                license: e.target.value
            }
        })
    }

    const handleOnlyNumber = () => {
        if (isNaN(parseFloat(athleteData.license))) {
            setValidationErrorLicense("form-error")
        }
        else {
            setValidationErrorLicense("correct")
        } 
    }

    const handleTrackChange = (e) => {
        setAthleteData(prevState => {
            return {
                ...prevState,
                track: parseInt(e.target.value)
            }
        })
    }

    // Validation logic
    // After positive validation, athleteData is setting as one of the elements of resultsData object array
    // Inputs are cleared

    const addAthleteHandler = (e) => {
        e.preventDefault();

        if (athleteData.name === "" || athleteData.name.length < 2 ) {
            setValidationErrorName("form-error")
        }
        else {
            setValidationErrorName("correct")
        } 
        if (athleteData.surname === "" || athleteData.surname.length < 2) {
            setValidationErrorSurname("form-error")
        }
        else {
            setValidationErrorSurname("correct")
        }
        if (athleteData.license === "" || isNaN(parseFloat(athleteData.license)) === true || athleteData.license.length <= 2) {
            setValidationErrorLicense("form-error")  
        }
        else{
            setValidationErrorLicense("correct")
        }
        
        if (
                athleteData.name !== "" && athleteData.name.length >= 2 &&
                athleteData.surname !== "" && athleteData.surname.length >= 2 &&
                athleteData.license !== "" && athleteData.license.length >= 2 && isNaN(parseFloat(athleteData.license)) === false    
        ) {
                setAthletesList(prevState => [...prevState, athleteData])
                setAthleteData(prevState => {
                    return {
                        ...prevState,
                        name: "",
                        surname: "",
                        license: "",
                        track: ""  
                    }
                }) 
            }
    }

    if (isFinalIndividualsFormActive === "finalIndividualsForm-active") {
        return (
            <div className={isListConfirmed('FinalIndividualsForm__wrapper')}>
               <h3>Add athlete</h3>
               <form>
                    <div className='labelAndData__wrapper'>
                        <label>Name<span>*</span></label>
                        <input 
                            type="text" 
                            name="name" 
                            value={athleteData.name} 
                            onChange={handleAthleteDataChange}/>
                        <p className={validationErrorName}>The name must consist of numbers only!</p>
                    </div> 
                    <div className='labelAndData__wrapper'>
                        <label>Surname<span>*</span></label>
                        <input 
                            type="text" 
                            name="surname" 
                            value={athleteData.surname} 
                            onChange={handleAthleteDataChange}/>
                        <p className={validationErrorSurname}>The surname must consist of numbers only!</p>
                    </div>
                    <div className='labelAndData__wrapper'>
                        <label>PB</label>
                        <input
                            type="text" 
                            name="pb" 
                            value={athleteData.pb} 
                            onChange={handleAthleteDataChange}
                        />
                    </div>
                    <div className='labelAndData__wrapper'>
                        <label>Age Category</label>
                        <select value={athleteData.ageCategory} onChange={handleAgeCategoryChange}>
                            <option></option>
                            {ageCategories.map((elem, index) => <option key={index}>{elem}</option>)}
                        </select>
                    </div>
                    <div className='labelAndData__wrapper'>
                        <label>Year of birth</label>
                        <select value={athleteData.yearOfBirth} onChange={handleYearOfBirthChange}>
                            <option></option>
                            {yearsGenerator()}
                        </select>
                    </div>
                    <div className='labelAndData__wrapper'>
                        <label>License number</label>
                        <input 
                            type="text" 
                            name="license" 
                            value={athleteData.license}
                            onKeyUp={handleOnlyNumber} 
                            onChange={handleLicenseChange}
                        />
                        <p className={validationErrorLicense}>Only numbers! Min 2 digits!</p>
                    </div>
                    <div className='labelAndData__wrapper'>
                        <label>Select track - optional</label>
                        <select value={athleteData.track} onChange={handleTrackChange}>
                                <option></option>
                                {tracks.map((elem, index) => <option key={index}>{elem}</option>)}
                        </select>
                    </div>
                    <div className='addAthleteButton__wrapper'>
                        <button className='addAthleteButton' onClick={addAthleteHandler}>Add athlete</button>
                    </div>
               </form>
            </div>
        );  
    }
    else {
        return null
    }
};

export default FinalIndividualsForm;