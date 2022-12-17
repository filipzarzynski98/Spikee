import React, {useState} from 'react';
import "./Heats.scss"
import NewHeat from './NewHeat/NewHeat';

const Heats = ({
    isFinalIndividualsFormActive,
    isFinalRelaysFormActive, 
    isNewHeatPossible,
    isListConfirmed
}) => {

    const [heatsList, setHeatsList] = useState([])
    const [heatsCounter, setHeatsCounter] = useState(0)

    const addHeatHandler = (e) => {
        e.preventDefault()
        setHeatsCounter(prevState => prevState + 1)
        setHeatsList(prevState => [...prevState, {id: heatsCounter}]) 
    }

    const removeHeatHandler = (heatToRemove) => {
        const position = heatsList.indexOf(heatToRemove)
        const filteredHeatsList = heatsList.filter((elem) => heatsList.indexOf(elem) !== position)
        setHeatsList(filteredHeatsList)
    }

    if (isNewHeatPossible === "newHeat-possible") {
        return (
            <div>
                <div className='heats__wrapper'>
                    {heatsList.map((elem) => {
                        return (
                            <div className='newHeat-wrapper' key={elem.id}>
                                <NewHeat
                                    heatLabel={<h3>Heat {heatsList.indexOf(elem) + 1}/{heatsList.length}</h3>}
                                    isFinalIndividualsFormActive={isFinalIndividualsFormActive}
                                    isFinalRelaysFormActive={isFinalRelaysFormActive}
                                    isListConfirmed={isListConfirmed}
                                />
                                <button className={isListConfirmed('active')} onClick={() => removeHeatHandler(elem)}>Delete Heat</button>
                            </div>
                        )
                    })}
                    <button 
                        className={`addHeatButton ${isListConfirmed('active')}`} 
                        onClick={addHeatHandler}
                    >
                        Add Heat
                    </button>
                </div>
            </div>
        );  
    }
    else {
        return null
    }
};

export default Heats;