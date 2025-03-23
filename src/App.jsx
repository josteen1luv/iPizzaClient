import React from "react";
import { Link } from "react-router-dom";
import "./App.css"
function App() {
  return (
    <div>
      <div className="hero">
        <h1>Delicious Pizza, Made Fresh Daily! 🍕</h1>
      </div>
      <section className="featured">
        <h2>Our Best-Selling Pizzas</h2>
        <div className="pizza-list">
          <div className="pizza-item">
            <img src="https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Pepperoni Pizza" />
            <h3>Pepperoni Delight</h3>
            <p>Loaded with pepperoni & cheese.</p>
          </div>
          <div className="pizza-item">
            <img src="https://images.pexels.com/photos/31262975/pexels-photo-31262975/free-photo-of-pyszna-pizza-z-dodatkami-na-desce-drewnianej.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Veggie Pizza" />
            <h3>Garden Fresh</h3>
            <p>A veggie lover's dream.</p>
          </div>
          <div className="pizza-item">
            <img src="https://images.pexels.com/photos/1166120/pexels-photo-1166120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Cheese Pizza" />
            <h3>Classic Cheese</h3>
            <p>Simple, cheesy, and delicious.</p>
          </div>
        </div>
      </section>
      <section className="reviews">
        <h2>What Our Customers Say</h2>
        <div className="review-card">
          <p>"Best pizza in town! Always fresh and tasty!"</p>
          <strong>- Sarah M.</strong>
        </div>
        <div className="review-card">
          <p>"Absolutely love the Pepperoni Delight. My go-to!"</p>
          <strong>- Jason R.</strong>
        </div>
      </section>
      <section className="order-now">
        <h2>Ready to Order?</h2>
        <Link to="/order">
          <button>Order Now 🍕</button>
        </Link>
      </section>
    </div>
  );
}

export default App;
