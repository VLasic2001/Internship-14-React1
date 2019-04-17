import React, { Component } from "react";
import "./App.css";
import ItemsColumn from "./components/ItemsColumn";
import BasketColumn from "./components/BasketColumn"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        "Strawberry",
        "Blueberry",
        "Oragne",
        "Banana",
        "Apple",
        "Carrot",
        "Celery",
        "Mushroom",
        "Green Pepper",
        "Eggs",
        "Cheese",
        "Butter"
      ],
      basketItems: [
        {label: "Strawberry", amount: 2}
      ]
    };
  }
  render() {
    return (
      <div className="container">
        <ItemsColumn items={this.state.items} />
        <BasketColumn basketItems={this.state.basketItems} />
      </div>
    );
  }
}

export default App;
