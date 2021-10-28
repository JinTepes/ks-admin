import React from 'react';

import AddItemStyle from '../Layouts/AddItemStyle.module.css';

function ItemCard( { onDelete, Item, duration, index } ){
    return(
        <div className={Item.itemName}>
            <div className={AddItemStyle.cardHolder}>
                <div>
                    {Item.itemName}
                </div>
                <div>
                    Duration: {duration}
                </div>
                <div className={AddItemStyle.delBtn}>
                    <div onClick={()=>onDelete(Item.itemName)}>
                        Delete
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemCard;