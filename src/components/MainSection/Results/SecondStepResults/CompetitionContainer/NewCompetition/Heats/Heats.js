import React, {useState} from 'react';
import "./Heats.scss"
import NewHeat from './NewHeat/NewHeat';

const Heats = ({
    isFinalIndividualsFormActive,
    isFinalRelaysFormActive, 
    isNewHeatPossible,
    isListConfirmed,
    setCompetitionNameBGColor
}) => {

    const [heatsList, setHeatsList] = useState([])
    const [heatsCounter, setHeatsCounter] = useState(0)

    const addHeatHandler = (e) => {
        e.preventDefault()
        setHeatsCounter(prevState => prevState + 1)
        setHeatsList(prevState => [...prevState, {id: heatsCounter}])
        setCompetitionNameBGColor("competitionNameBGColor") 
    }

    const removeHeatHandler = (heatToRemove) => {
        const position = heatsList.indexOf(heatToRemove)
        const filteredHeatsList = heatsList.filter((elem) => heatsList.indexOf(elem) !== position)
        setHeatsList(filteredHeatsList)
    }

    if (isNewHeatPossible === "newHeat-possible") {
        return (
            <div className='heatsWrapper__sizer'>
                <div className='heats__wrapper'>
                    {heatsList.map((elem) => {
                        return (
                            <div className='newHeat-wrapper' key={elem.id}>
                                <NewHeat
                                    heatLabel={<p className='heat__label'>Heat {heatsList.indexOf(elem) + 1}/{heatsList.length}</p>}
                                    isFinalIndividualsFormActive={isFinalIndividualsFormActive}
                                    isFinalRelaysFormActive={isFinalRelaysFormActive}
                                    isListConfirmed={isListConfirmed}
                                />
                                <button className={isListConfirmed('active')} onClick={() => removeHeatHandler(elem)}>Delete Heat</button>
                            </div>
                        )
                    })}
                </div>
                <button 
                    className={`addHeatButton ${isListConfirmed('active')}`} 
                    onClick={addHeatHandler}
                >
                    Add Heat
                </button>
            </div>
        );  
    }
    else {
        return null
    }
};

export default Heats;