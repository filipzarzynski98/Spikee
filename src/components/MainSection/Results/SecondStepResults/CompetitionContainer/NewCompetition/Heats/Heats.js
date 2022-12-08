import React, {useState} from 'react';
import "./Heats.scss"
import NewHeat from './NewHeat/NewHeat';

const Heats = ({
    isFinalIndividualsFormActive,
    isFinalRelaysFormActive, 
    isNewHeatPossible,
    hideToPrint
}) => {

    const [heatsList, setHeatsList] = useState([])
    const [counter, setCounter] = useState(0)

    const addHeatHandler = (e) => {
        e.preventDefault()
        setCounter(prevState => prevState + 1)
        setHeatsList(prevState => [...prevState, {id: counter}]) 
    }

    const removeHeatHandler = (heatToRemove) => {
        const position = heatsList.indexOf(heatToRemove)
        const filteredHeatsList = heatsList.filter((elem) => heatsList.indexOf(elem) !== position)
        setHeatsList(filteredHeatsList)
    }

    if (isNewHeatPossible === "newHeat-possible") {
        return (
            <div>
                <div>
                    {heatsList.map((elem) => {
                        return (
                            <div className='newHeat-wrapper' key={elem.id}>
                                <NewHeat
                                    heatLabel={<h3>Heat {heatsList.indexOf(elem) + 1}/{heatsList.length}</h3>}
                                    isFinalIndividualsFormActive={isFinalIndividualsFormActive}
                                    isFinalRelaysFormActive={isFinalRelaysFormActive}
                                    hideToPrint={hideToPrint}
                                />
                                <button className={hideToPrint} onClick={() => removeHeatHandler(elem)}>Delete Heat</button>
                            </div>
                        )
                    })}
                    <button className={hideToPrint} onClick={addHeatHandler}>Add Heat</button>
                </div>
            </div>
        );  
    }
    else {
        return null
    }
};

export default Heats;