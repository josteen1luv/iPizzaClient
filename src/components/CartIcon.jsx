import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartPizzas } from "../store/cartSlice";
import "./CartIcon.css";

function CartIcon() {
  const cart = useSelector(selectCartPizzas);
  const itemCount = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
  const [topPosition, setTopPosition] = useState(80);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setTopPosition(Math.max(10, 80 - window.scrollY));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (location.pathname === "/cart") {
    return null;
  }

  return (
    <Link to="/cart" className="cart-icon" style={{ top: `${topPosition}px` }}>
      🛒 <span className="cart-count">{itemCount}</span>
    </Link>
  );
}

export default CartIcon;
