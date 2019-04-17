import React from 'react';
import BasketRow from './BasketRow'

class BasketColumn extends React.Component {
    constructor(props){
        super(props)
        this.state = {showWarning: this.props.basketItems.length ? "none item-row" : "item-row", showTrashcan: this.props.basketItems.length ? "" : "none"}
    }

    componentWillReceiveProps() {
        this.setState({...this.state.showTrashcan, showTrashcan: this.props.basketItems.length ? "" : "none"})
        this.setState({...this.state.showTrashcan, showWarning: this.props.basketItems.length ? "none item-row" : "item-row"})
    }
    
    handleRemoveAllClick = () =>{
        this.props.onRemoveAllClick();
    }
        
    render(){
    return (<div className="items-column">
    <div className="basket-container">
        <h1>Basket</h1>
        <img className={this.state.showTrashcan} src="https://img.icons8.com/metro/26/000000/delete.png" onClick={this.handleRemoveAllClick}/>
    </div>
    <span className={this.state.showWarning}>Your basket is empty!</span>
    {this.props.basketItems.map(basketItem => <BasketRow label={basketItem.label} amount={basketItem.amount} onRemoveItemClick={this.props.onRemoveItemClick} />)}
    </div>)
    }
}

export default BasketColumn;