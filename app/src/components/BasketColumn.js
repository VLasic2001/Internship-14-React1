import React from 'react';
import BasketRow from './BasketRow'

const BasketColumn = props => {
    return (<div className="items-column">
    <h1>Basket</h1>
    {props.basketItems.map(basketItem => <BasketRow label={basketItem.label} amount={basketItem.amount}/>)}
    </div>)
}

export default BasketColumn;