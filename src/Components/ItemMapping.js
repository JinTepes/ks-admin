import React from 'react';
import ItemCard from './ItemCard';

function ItemMapping( { onDelete, Items, duration } ){
    
    return(
        <>
            {
               Items.map((Item, index) =>(
                    <ItemCard key={index} Item={Item} onDelete={onDelete} duration={duration} index={index} />
                ))
            }
        </>
    );
}

export default ItemMapping;