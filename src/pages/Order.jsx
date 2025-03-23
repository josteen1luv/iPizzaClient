import React from "react";
import PizzaItem from "../components/PizzaItem";
import "./Order.css";
import { useGetAllPizzaQuery } from "../store/pizzaApiSlice.js";

function Order() {
  // const pizzas = [
  //   {
  //     Name: "Veggie Pizza",
  //     PhotoUrl: "https://images.pexels.com/photos/31262975/pexels-photo-31262975/free-photo-of-pyszna-pizza-z-dodatkami-na-desce-drewnianej.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     Price: 25.00,
  //     Ingredients: ["Tomatoes", "Onions", "Peppers", "Olives", "Mushrooms"],
  //     Size: 'Large',
  //     DoughType: 'Thin Crust'
  //   },
  //   {
  //     Name: "Pepperoni Pizza",
  //     PhotoUrl: "https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&w=600",
  //     Price: 22.00,
  //     Ingredients: ["Pepperoni", "Mozzarella", "Tomato Sauce"],
  //     Size: 'Medium',
  //     DoughType: 'Classic Crust'
  //   },
  //   {
  //     Name: "Cheese Pizza",
  //     PhotoUrl: "https://images.pexels.com/photos/1166120/pexels-photo-1166120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     Price: 18.00,
  //     Ingredients: ["Mozzarella", "Cheddar", "Tomato Sauce"],
  //     Size: 'Small',
  //     DoughType: 'Stuffed Crust'
  //   }
  // ];
  const pizzas = useGetAllPizzaQuery().data;

  return (
    <div className="order">
      <h2>Order Pizza</h2>
      <p>Choose from our delicious menu!</p>

      {pizzas ? (
        <div className="pizza-list">
          {pizzas.map((pizza) => (
            <PizzaItem key={pizza.id} pizza={pizza} />
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default Order;
