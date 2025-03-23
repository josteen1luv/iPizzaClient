import React from "react";
import PizzaItem from "../components/PizzaItem";
import "./Order.css";
import { useGetAllPizzaQuery } from "../store/pizzaApiSlice.js";

function Order() {
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
