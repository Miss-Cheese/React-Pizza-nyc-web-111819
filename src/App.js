import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

class App extends Component {

  state = {
    pizzas: [],
    soughtPizza: {
      topping: "",
      size: "",
      vegetarian: false
    }
  }

  componentDidMount() {
    fetch("http://localhost:3000/pizzas")
    .then(response => response.json())
    .then(pizzaData => this.setState({
      pizzas: pizzaData
    }))
  }

  findPizza = (pizzaId) => {
    let targetPizza = this.state.pizzas.find(pizza => pizza.id === pizzaId)
    this.setState({
      soughtPizza: targetPizza
    })
  }

  
  handleTopping = (event) => {
    this.setState({
      ...this.state,
      soughtPizza: {
        ...this.state.soughtPizza,
        topping: event.target.value
      }
    })
  }

  handleSize = (event) => {
    this.setState({
      ...this.state,
      soughtPizza: {
        ...this.state.soughtPizza,
        size: event.target.value
      }
    })
  }

  handleVegetarian = () => {
    this.setState({
      ...this.state,
      soughtPizza: {
        ...this.state.soughtPizza,
        vegetarian: !this.state.soughtPizza.vegetarian
      }
    })
  }

  pizzaSubmit = () => {
    let targetPizza = this.state.soughtPizza

    fetch(`http://localhost:3000/pizzas/${targetPizza.id}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(targetPizza)
    })
    .then(response => response.json())
    .then(pizzaData => {
      let pizzaArr = this.state.pizzas.map(pizza => pizza.id === this.state.soughtPizza.id ? {...pizzaData} : pizza)
      this.setState({ pizzas: [...pizzaArr] }) 
    })
  }
    
  
  render() {
  
    return (
      <Fragment>
        <Header/>
        <PizzaForm pizzas={this.state.pizzas} soughtPizza={this.state.soughtPizza}
        handleTopping={this.handleTopping}
        handleSize={this.handleSize}
        handleVegetarian={this.handleVegetarian}
        pizzaSubmit={this.pizzaSubmit}
        />
        <PizzaList pizzas={this.state.pizzas} findPizza={this.findPizza}/>
      </Fragment>
    );
  }
}

export default App;
