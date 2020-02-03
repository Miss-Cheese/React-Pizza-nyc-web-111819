import React, { Component } from 'react';
import Pizza from '../components/Pizza'
class PizzaList extends Component {

  
  render() {

    let pizzaComponentList = this.props.pizzas.map(pizza =>
      < Pizza 
      {... pizza}
      key = {pizza.id}
      pizzas = {this.props.pizzas}
      findPizza={this.props.findPizza}
      />)

      // console.log(this.props)

    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Topping</th>
            <th scope="col">Size</th>
            <th scope="col">Vegetarian?</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
        {pizzaComponentList}
        </tbody>
      </table>
    );
  }

}

export default PizzaList;
