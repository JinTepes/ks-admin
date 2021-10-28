import React from 'react';

function DropdownBoxMap( { oItems } ){

    return(
        <>
        {
            oItems.map((item, index) => (
                <option key={index} id={item.itemId}>{item.itemName}</option>
            ))
        }
        </>
    );

}

export default DropdownBoxMap;