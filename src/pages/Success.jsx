import React from "react";
import { Link } from "react-router-dom";
import "./Success.css";
import { useDispatch } from "react-redux";

function Success() {
  const dispatch = useDispatch();
  dispatch({ type: "cart/resetCart" });

  return (
    <div className="success-container">
      <h2>Order Successful!</h2>
      <p>
        Your order has been placed successfully. Thank you for shopping with us!
      </p>

      <div className="order-details">
        <p>
          Estimated Delivery Time: <strong>30-45 minutes</strong>
        </p>
      </div>

      <div className="success-actions">
        <Link to="/" className="btn-primary">
          Go home
        </Link>
        <Link to="/contact" className="btn-secondary">
          Contact us
        </Link>
      </div>
    </div>
  );
}

export default Success;
