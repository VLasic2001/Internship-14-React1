import React from "react";

class BasketRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      crossText: this.isTextCrossed ? "crossed item-row" : "item-row"
    }
    this.isTextCrossed = false;
}


  handleRemoveClick = (e) => {
    if(this.isTextCrossed){
        this.props.onRemoveItemClick(this.props.label);
    }
    e.stopPropagation()
  };

  handleTextClick = () => {
    this.setState({
      crossText: "crossed item-row"
    });
  };

  render() {
    return (
      <li className={this.state.crossText} onClick={this.handleTextClick}> 
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
