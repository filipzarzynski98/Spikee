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

    const [fromIndividualsRedirected, setFromIndividualsRedirected] = useState("dezactive") 
    const [fromRelaysRedirected, setFromRelaysRedirected] = useState("dezactive") 

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
                setFromIndividualsRedirected={setFromIndividualsRedirected}
            />
            <RelaysForm
                currentFormType={currentFormType}
                setCurrentFormType={setCurrentFormType}
                athleteData={athleteData} 
                setAthleteData={setAthleteData}
                sexFirstLetter={sexFirstLetter}
                setSexFirstLetter={setSexFirstLetter}
                setFromRelaysRedirected={setFromRelaysRedirected}
            />
            <FinalForm 
                currentFormType={currentFormType}
                setCurrentFormType={setCurrentFormType}
                athleteData={athleteData} 
                setAthleteData={setAthleteData}
                resultsData={resultsData} 
                setResultsData={setResultsData}
                // Back to IndividualsForm
                fromIndividualsRedirected={fromIndividualsRedirected}
                setFromIndividualsRedirected={setFromIndividualsRedirected}
                // Back to RelaysForm
                fromRelaysRedirected={fromRelaysRedirected}
                setFromRelaysRedirected={setFromRelaysRedirected}
            />
        </div>
    )
};

export default Form;
