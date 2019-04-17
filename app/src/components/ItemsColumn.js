import React from 'react';
import ItemRow from './ItemRow';

const ItemsColumn = props => {
    return (<div className="items-column">
        <h1>Groceries</h1>
        {props.items.map(item => <ItemRow label={item} onClick={props.onClick}/>)}
    </div>)
}

export default ItemsColumn;