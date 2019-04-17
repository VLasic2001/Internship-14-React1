import React from 'react';

const BasketRow = props => {
    return <span className="basket-row">{props.amount} {props.label}</span>
}

export default BasketRow;