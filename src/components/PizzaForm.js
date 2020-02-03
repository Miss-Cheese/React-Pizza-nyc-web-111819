import React from "react"

const PizzaForm = (props) => {


  return(
      <div className="form-row">
        <div className="col-5">
            <input onChange={(event) => props.handleTopping(event)} type="text" className="form-control" placeholder="Pizza Topping" value={props.soughtPizza.topping}/>
        </div>
        <div className="col">
          <select onChange={(event) => props.handleSize(event)} value={props.soughtPizza.size} className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input onChange={(event) => props.handleVegetarian(event)} name="button" className="form-check-input" type="radio" value="Vegetarian" checked={props.soughtPizza.vegetarian && true}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input onChange={(event) => props.handleVegetarian(event)} name="button" className="form-check-input" type="radio" value="Not Vegetarian" checked={!props.soughtPizza.vegetarian && true}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={props.pizzaSubmit}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
