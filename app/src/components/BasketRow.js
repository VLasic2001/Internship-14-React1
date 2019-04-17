import React from 'react';

class BasketRow extends React.Component {
    handleClick = () => {
        this.props.onClick(this.props.label)
    }
    render(){
        return <span className="basket-row" onClick={this.handleClick}>{this.props.amount} {this.props.label}</span>
    }
}

export default BasketRow;