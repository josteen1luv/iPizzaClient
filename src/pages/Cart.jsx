import React from "react";
import { useSelector } from "react-redux";
import { selectCartPizzas } from "../store/cartSlice";
import "./Cart.css";
import { Link } from "react-router-dom";

function CartPage() {
  const cartPizzas = useSelector(selectCartPizzas);

  const totalSum = cartPizzas.reduce((sum, pizza) => sum + pizza.sum, 0);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>

      {cartPizzas.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-list">
            {cartPizzas.map((pizza) => (
              <div key={pizza.pizzaId} className="cart-card">
                <img
                  src={pizza.photoUrl}
                  alt={pizza.name}
                  className="cart-img"
                />
                <div className="cart-details">
                  <h3>{pizza.name}</h3>
                  <p className="cart-meta">
                    Size:{" "}
                    <span>
                      {pizza.size === 0
                        ? "Small"
                        : pizza.size === 1
                          ? "Medium"
                          : "Large"}
                    </span>
                  </p>
                  <p className="cart-meta">
                    Dough: <span>{pizza.dough === 0 ? "Thin" : "Thick"}</span>
                  </p>
                  {pizza.additionalIngredients &&
                    pizza.additionalIngredients.length > 0 && (
                      <p className="cart-meta">
                        Extras:{" "}
                        <span>
                          {pizza.additionalIngredients
                            .map((ing) => `${ing.name} (${ing.quantity})`)
                            .join(", ")}
                        </span>
                      </p>
                    )}
                  <p className="cart-price">${pizza.sum.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3>Total: ${totalSum.toFixed(2)}</h3>
            <Link to={"/checkout"}>
              <button className="checkout-btn">Proceed to Checkout</button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default CartPage;
