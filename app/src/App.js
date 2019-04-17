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
      ]
    };
    this.handleAddItemClick = this.handleAddItemClick.bind(this);
    this.handleRemoveItemClick = this.handleRemoveItemClick.bind(this);
    this.handleRemoveAllItems = this.handleRemoveAllItems.bind(this);
  }

  handleAddItemClick(item) {
    if(this.state.basketItems.find(basketItem => basketItem.label == item)){
      var itemToUpdate = this.state.basketItems.find(basketItem => basketItem.label == item)
      var prevBasket = this.state.basketItems;
      itemToUpdate.amount++;
      this.setState({basketItems: prevBasket});
      return;
    }
    this.setState(state => state.basketItems.push({label: item, amount: 1}))
  }

  handleRemoveItemClick(item) {
    var itemToUpdate = this.state.basketItems.find(basketItem => basketItem.label == item)
    itemToUpdate.amount--;
    var prevBasket = this.state.basketItems;
    this.setState({basketItems: prevBasket});
    if(!itemToUpdate.amount){
      let filteredBasket = this.state.basketItems.filter(basketItem => basketItem.label !== itemToUpdate.label)
      this.setState({basketItems: filteredBasket});
    }
  }

  handleRemoveAllItems(){
    this.setState({basketItems: []});
  }

  render() {
    return (
      <div className="container">
        <ItemsColumn items={this.state.items} onClick={this.handleAddItemClick} />
        <BasketColumn basketItems={Array.from(this.state.basketItems)} onRemoveItemClick={this.handleRemoveItemClick} onRemoveAllClick={this.handleRemoveAllItems}/>
      </div>
    );
  }
}

export default App;
