import React, {useState} from 'react';
import "./FinalIndividualsForm.scss"

const FinalIndividualsForm = ({
    currentFormType,
    setCurrentFormType,

    athleteData, 
    setAthleteData,

    setResultsData, 
    resultsData,

    setIsNewHeatPossible,

    isFinalIndividualsFormActive,

}) => {

    // form validation states

    const [validationErrorName, setValidationErrorName] = useState("correct")
    const [validationErrorSurname, setValidationErrorSurname] = useState("correct")
    const [validationErrorSex, setValidationErrorSex] = useState("correct")
    const [validationErrorCompetition, setValidationErrorCompetition] = useState("correct")
    const [validationErrorLicense, setValidationErrorLicense] = useState("correct")


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
        if (athleteData.license === "" || isNaN(parseFloat(athleteData.license)) === true || athleteData.license.length === 1) {
            setValidationErrorLicense("form-error")  
        }
        else{
            setValidationErrorLicense("correct")
        }
        
        if (
                athleteData.name !== "" && athleteData.name.length >= 2 &&
                athleteData.surname !== "" && athleteData.surname.length >= 2 &&
                athleteData.license !== "" && athleteData.license.length > 1 && isNaN(parseFloat(athleteData.license)) === false 
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

    const previousFormStep = (e) => {
        e.preventDefault();

        setCurrentFormType(prevState => {
            return{
                ...prevState,
                inicialForm: "dezactive",
                individualsForm: "active",
                relaysForm: "dezactive",
                finalIndividualsForm: "dezactive",
                finalRelaysForm: "dezactive"
            }
        })

        setIsNewHeatPossible("newCompetitionButton__dezactive")
    }

    if (isFinalIndividualsFormActive === "finalIndividualsForm-active") {
        return (
            <div className='final-form__wrapper'>
               <h3>Add athlete</h3>
               <form>
                    <div>
                        <label>Name</label>
                        <input 
                            type="text" 
                            name="name" 
                            value={athleteData.name} 
                            onChange={handleAthleteDataChange}/>
                        <p className={validationErrorName}>The name must consist of numbers only!</p>
                    </div> 
                    <div>
                        <label>Surname</label>
                        <input 
                            type="text" 
                            name="surname" 
                            value={athleteData.surname} 
                            onChange={handleAthleteDataChange}/>
                        <p className={validationErrorSurname}>The surname must consist of numbers only!</p>
                    </div>
                    <div>
                        <label>License number</label>
                        <input 
                            type="text" 
                            name="license" 
                            value={athleteData.license}
                            onKeyUp={handleOnlyNumber} 
                            onChange={handleLicenseChange}/>
                        <p className={validationErrorLicense}>The license number must only consist of numbers!</p>
                    </div>
                    <div>
                        <button onClick={addAthleteHandler}>Add athlete</button>
                        <button onClick={previousFormStep}>Back</button>
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