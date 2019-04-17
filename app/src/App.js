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
    this.addItemToBasket = this.addItemToBasket.bind(this);
  }

  addItemToBasket(item) {
    if(this.state.basketItems.find(basketItem => basketItem.label == item)){
      var itemToUpdate = this.state.basketItems.find(basketItem => basketItem.label == item)
      var prevBasket = this.state.basketItems;
      itemToUpdate.amount++;
      this.setState({basketItems: prevBasket});
      return;
    }

    this.setState(state => state.basketItems.push({label: item, amount: 1}))
  }

  render() {
    return (
      <div className="container">
        <ItemsColumn items={this.state.items} onClick={this.addItemToBasket} />
        <BasketColumn basketItems={Array.from(this.state.basketItems)} />
      </div>
    );
  }
}

export default App;
