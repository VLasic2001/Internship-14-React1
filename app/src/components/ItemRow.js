import React from 'react';

class ItemRow extends React.Component {
    handleClick = () =>{
        this.props.onClick(this.props.label);
    }
    render(){
    return <span className="item-row" onClick={this.handleClick}>{this.props.label}</span>
    };
}

export default ItemRow;