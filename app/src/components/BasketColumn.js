import React from 'react';
import BasketRow from './BasketRow'

class BasketColumn extends React.Component {
    render(){
    return (<div className="items-column">
    <h1>Basket</h1>
    {this.props.basketItems.map(basketItem => <BasketRow label={basketItem.label} amount={basketItem.amount} onClick={this.props.onClick}/>)}
    </div>)
    }
}

export default BasketColumn;