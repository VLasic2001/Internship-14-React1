import React from "react";
import BasketRow from "./BasketRow";

class BasketColumn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showWarning: "item-row", showTrashcan: "none" };
  }

  handleRemoveAllClick = () => {
    this.props.onRemoveAllClick();
  };

  render() {
    return (
      <div className="items-column">
        <div className="basket-container">
          <h1>Basket</h1>
          <img
            //znam da bi ovaj className trebalo preko statea mijenjat ali mi je onda kasnilo 1 klik i nikako nisan moga popravit
            className={this.props.basketItems.length ? "" : "none"}
            src="https://img.icons8.com/metro/26/000000/delete.png"
            onClick={this.handleRemoveAllClick}
            alt="trash can"
          />
        </div>
        <span
          className={
            this.props.basketItems.length ? "none item-row" : "item-row"
          }
        >
          Your basket is empty!
        </span>
        {this.props.basketItems.map((basketItem, index) => (
          <BasketRow
            label={basketItem.label}
            amount={basketItem.amount}
            onRemoveItemClick={this.props.onRemoveItemClick}
            onTextClick={this.props.onTextClick}
            crossed={basketItem.crossed}
            key={index}
          />
        ))}
      </div>
    );
  }
}

export default BasketColumn;
