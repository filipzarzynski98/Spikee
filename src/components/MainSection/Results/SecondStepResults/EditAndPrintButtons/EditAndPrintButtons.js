import React from 'react';
import "./EditAndPrintButtons.scss"

const EditAndPrintButtons = ({
    listConfirmed,
    setListConfirmed,
    printHandler
}) => {
    if (listConfirmed === true) {
        return (
            <div className='editAndPrintButtons'>
                <button className={`editListButton`} onClick={() => setListConfirmed(false)}>Edit</button> 
                <button className={`printListButton`} onClick={printHandler}>Print</button>
            </div>
        );
    }
};

export default EditAndPrintButtons;