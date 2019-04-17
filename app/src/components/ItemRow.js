import React from "react";

class ItemRow extends React.Component {
  handleAddClick = () => {
    this.props.onClick(this.props.label);
  };
  render() {
    return (
      <li className="item-row">
        <span className="plus" onClick={this.handleAddClick}>
          +
        </span>
        <span className="item-row" onClick={this.handleClick}>
          {this.props.label}
        </span>
      </li>
    );
  }
}

export default ItemRow;
