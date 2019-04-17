import React from 'react';

const BasketRow = props => {
    return <span className="item-row">{props.amount} {props.label}</span>
}

export default BasketRow;