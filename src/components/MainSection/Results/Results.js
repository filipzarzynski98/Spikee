import React from 'react';
import "./Results.scss"
import Result from './Result/Result';

const Results = ({
    resultsData, 
    setResultsData,
    competitionNameAndStage,
    setCompetitionNameAndStage
}) => {

    

    const removeAthlete = (deletingAthleteLicense) => {
        const updateAthletesList = resultsData.filter((athlete) => athlete !== deletingAthleteLicense);
        setResultsData(updateAthletesList)
    }


    return (
        <div className='results__wrapper'>
            <div>
                <h4>{competitionNameAndStage}</h4> 
                {resultsData.map((elem, index) => {
                    const domtelHref = `https://statystyka.pzla.pl/personal.php?page=profile&nr_zaw=${elem.license}&r=1`
                    return(
                        <div key={index}>
                            <Result setResultsData={setResultsData} resultsData={elem}/>
                            <button onClick={() => removeAthlete(elem)}>Usuń</button>
                            <button>
                                <a 
                                    href={domtelHref} 
                                    target="_blank" 
                                    rel="noreferrer"
                                >
                                    Domtel
                                </a>
                            </button>
                        </div>
                        )
                    }
                )}    
            </div>
            <div className='buttons__wrapper'>
                <button>Drukuj</button>
            </div>      
        </div>
    );
};

export default Results;