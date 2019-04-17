import React from "react";

class BasketRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { crossed: false };
  }
  handleRemoveClick = e => {
    if (!this.props.crossed) {
      this.props.onRemoveItemClick(this.props.label);
    }
    e.stopPropagation();
  };

  handleTextClick = () => {
    this.props.onTextClick(this.props.label);
  };

  componentWillReceiveProps({ crossed }) {
    this.setState({ ...this.state.crossed, crossed });
  }

  render() {
    console.log(this.props.crossed);
    return (
      <li
        className={this.props.crossed ? "item-row crossed" : "item-row"}
        onClick={this.handleTextClick}
      >
        <span>
          <span className="minus" onClick={this.handleRemoveClick}>
            -
          </span>
          {this.props.amount} {this.props.label}
        </span>
      </li>
    );
  }
}

export default BasketRow;
