import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectCartInfo, selectCartPizzas } from "../store/cartSlice";
import { usePostCheckoutMutation } from "../store/pizzaApiSlice.js";
import { useForm } from "react-hook-form";
import "./Checkout.css";

function Checkout() {
  const navigate = useNavigate();
  const cart = useSelector(selectCartInfo);
  const [postCheckout] = usePostCheckoutMutation();
  const cartPizzas = useSelector(selectCartPizzas);

  const totalSum = cartPizzas.reduce((sum, pizza) => sum + pizza.sum, 0);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [error, setError] = useState(null);

  // Redirect if the cart is empty
  useEffect(() => {
    if (cart.orderedPizzas.length === 0) {
      navigate("/"); // Redirect to home if the cart is empty
    }
  }, [cart, navigate]);

  // Submit function for handling the checkout form submission
  const onSubmit = async (data) => {
    const orderData = {
      address: data,
      orderedPizzas: cart.orderedPizzas,
    };
    try {
      await postCheckout(orderData).unwrap();

      navigate("/success");

      setTimeout(1000);

      reset();
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>

      {error && <p className="error-message">{error}</p>}

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-group">
          <label htmlFor="street">Street</label>
          <input
            type="text"
            id="street"
            name="street"
            {...register("street", { required: "Street is required" })}
          />
          {errors.street && (
            <p className="error-message">{errors.street.message}</p>
          )}
        </div>

        <div className="input-group">
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            name="city"
            {...register("city", { required: "City is required" })}
          />
          {errors.city && (
            <p className="error-message">{errors.city.message}</p>
          )}
        </div>

        <div className="input-group">
          <label htmlFor="state">State</label>
          <input
            type="text"
            id="state"
            name="state"
            {...register("state", { required: "State is required" })}
          />
          {errors.state && (
            <p className="error-message">{errors.state.message}</p>
          )}
        </div>

        <div className="input-group">
          <label htmlFor="postalCode">Postal Code</label>
          <input
            type="text"
            id="postalCode"
            name="postalCode"
            {...register("postalCode", { required: "Postal Code is required" })}
          />
          {errors.postalCode && (
            <p className="error-message">{errors.postalCode.message}</p>
          )}
        </div>

        <div className="input-group">
          <label htmlFor="country">Country</label>
          <input
            type="text"
            id="country"
            name="country"
            {...register("country", { required: "Country is required" })}
          />
          {errors.country && (
            <p className="error-message">{errors.country.message}</p>
          )}
        </div>

        {/* Display the total price */}
        <div className="total-price">
          <p>
            <strong>Total: ${totalSum.toFixed(2)}</strong>
          </p>
        </div>

        <div className="payment-buttons">
          <button type="submit" className="pay-button">
            Pay with Cash
          </button>
          <button type="submit" className="pay-button" disabled>
            Pay with Card
          </button>
        </div>
      </form>
    </div>
  );
}

export default Checkout;
