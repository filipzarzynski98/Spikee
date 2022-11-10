import React, {useState} from 'react';
import "./Form.scss"
import InicialForm from './InicialForm/InicialForm';
import IndividualsForm from './IndividualsForm/IndividualsForm'
import RelaysForm from './RelaysForm/RelaysForm'
import FinalForm from './FinalForm/FinalForm';


const Form = ({athleteData, setAthleteData, setResultsData, resultsData}) => {

    const [currentFormType, setCurrentFormType] = useState({ 
        inicialForm: "active",
        individualsForm: "dezactive",
        relaysForm: "dezactive",
        finalForm: "dezactive"
    })

    const [sexFirstLetter, setSexFirstLetter] = useState("")

    return (
        <div className='form__wrapper'>
            <InicialForm
                currentFormType={currentFormType}
                setCurrentFormType={setCurrentFormType}
            />
            <IndividualsForm
                currentFormType={currentFormType}
                setCurrentFormType={setCurrentFormType}
                athleteData={athleteData} 
                setAthleteData={setAthleteData}
                sexFirstLetter={sexFirstLetter}
                setSexFirstLetter={setSexFirstLetter}
            />
            <RelaysForm
                currentFormType={currentFormType}
                setCurrentFormType={setCurrentFormType}
                athleteData={athleteData} 
                setAthleteData={setAthleteData}
                sexFirstLetter={sexFirstLetter}
                setSexFirstLetter={setSexFirstLetter}
            />
            <FinalForm 
                currentFormType={currentFormType}
                setCurrentFormType={setCurrentFormType}
                athleteData={athleteData} 
                setAthleteData={setAthleteData}
                resultsData={resultsData} 
                setResultsData={setResultsData}
            />
        </div>
    )
};

export default Form;
