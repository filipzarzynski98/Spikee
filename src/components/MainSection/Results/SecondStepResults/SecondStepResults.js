import React, { useEffect, useState } from 'react';
import "./SecondStepResults"
import NewCompetition from './NewCompetition/NewCompetition';

const SecondStepResults = ({
    currentResultsStep,
    setCurrentResultsStep,

    listName
}) => {

    const [competitionsArray, setCompetitionsArray] = useState([])

    useEffect(() => {
        console.log(competitionsArray)
    }, [competitionsArray])

    const nextStepHandler = (e) => {
        e.preventDefault()

        let counter = 1

        setCompetitionsArray(prevState => [...prevState, counter + competitionsArray.length])
       

        // setCurrentResultsStep(prevState => {
        //     return {
        //         ...prevState,
        //         firstStep: "dezactive",
        //         secondStep: "dezactive",
        //         thirdStep: "active",
        //         fourthStep: "dezactive",
        //         fifthStep: "dezactive"
        //     }
        // })
    }

    const removeCompetition = (deletingCompetition) => {
        const updateCompetitionList = competitionsArray.filter((elem) => elem !== deletingCompetition);
        setCompetitionsArray(updateCompetitionList)
       
    }

    if (currentResultsStep.secondStep === "active") {
        return (
            <div>
                <p>2 Step</p>
                <h3>{listName}</h3>
                <button onClick={nextStepHandler}>New competition</button>
                {competitionsArray.map((elem, index) => {
                    return (
                        <div key={index}>

                            <NewCompetition
                                competitionsArray={competitionsArray}
                                setCompetitionsArray={setCompetitionsArray}
                            />
                            <button onClick={() => removeCompetition(elem)}>Delete</button>
                            <br/>

                        </div>)} 
                    )
                }   
            </div>
        );
    }
    else {
        return null
    }
};

export default SecondStepResults;