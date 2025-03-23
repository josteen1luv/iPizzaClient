import React from "react";
import {Link} from "react-router-dom";

function PizzaItem({ pizza}) {
    const size = pizza.size === 0 ? 'Small' : pizza.size === 1 ? 'Medium' : 'Large';
    const dough = pizza.dough ? 'Thick' : 'Thin';
  return (
    <div className="pizza-item">
        <div>
            <img src={pizza.photoUrl} alt={pizza.name}/>
            <h3>{pizza.name}</h3>
            <p><strong>Price:</strong> ${pizza.price.toFixed(2)}</p>
            <p><strong>Ingredients:</strong> {pizza.ingredients.map(e => e.name).join(", ")}</p>
            <p><strong>Size:</strong> {size}</p>
            <p><strong>Dough Type:</strong> {dough}</p>
        </div>
        <Link to={`/pizza/${pizza.id}`}>
            <button>Add to Cart</button>
        </Link>

    </div>
  );
}

export default PizzaItem;
