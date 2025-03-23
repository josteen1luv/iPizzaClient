import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addPizza } from "../store/cartSlice.js";
import { useGetAllIngredientsQuery } from "../store/pizzaApiSlice.js";
import "./SinglePizzaInfo.css";
import { useNavigate } from "react-router-dom";

function SinglePizzaInfo({ pizza }) {
  const [ingredientCounts, setIngredientCounts] = useState(
    pizza.ingredients
      ? pizza.ingredients.map((ingredient) => ({
          id: ingredient.id,
          name: ingredient.name,
          quantity: 1,
          price: ingredient.price,
        }))
      : [],
  );
  const [size, setSize] = useState(pizza.size);
  const [dough, setDough] = useState(pizza.dough);
  const [totalSum, setTotalSum] = useState(pizza.price);
  const [selectedExtraIngredientId, setSelectedExtraIngredientId] =
    useState(null);
  const [extraIngredientsLeft, setExtraIngredientsLeft] = useState([]);

  const { data: allIngredients } = useGetAllIngredientsQuery();

  useEffect(() => {
    const extraIngredients = allIngredients?.filter(
      (ingredient) =>
        !pizza.ingredients.some(
          (pizzaIngredient) => pizzaIngredient.id === ingredient.id,
        ),
    );
    setExtraIngredientsLeft(extraIngredients || []);
  }, [allIngredients, pizza.ingredients]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const calculateAdditionalIngredients = () => {
    return ingredientCounts
      .filter(({ quantity, id }) => {
        const isOriginalIngredient = pizza.ingredients.some(
          (pizzaIngredient) => pizzaIngredient.id === id,
        );
        return isOriginalIngredient ? quantity > 1 : quantity > 0;
      })
      .map(({ id, name, quantity, price }) => {
        const isOriginalIngredient = pizza.ingredients.some(
          (pizzaIngredient) => pizzaIngredient.id === id,
        );
        return {
          id,
          name,
          quantity: isOriginalIngredient ? quantity - 1 : quantity,
          price,
        };
      });
  };

  const updateIngredientCount = (ingredientId, change, func) => {
    func((prevCounts) => {
      return prevCounts.map((ingredient) =>
        ingredient.id === ingredientId
          ? {
              ...ingredient,
              quantity: Math.max(0, ingredient.quantity + change),
            }
          : ingredient,
      );
    });
  };

  const calculateTotalSum = () => {
    const additionalIngredients = calculateAdditionalIngredients();
    const mult = size === 0 ? 1 : size === 1 ? 1.25 : 1.5;
    const extraDoughFee = dough ? 4 : 0;
    const additionalIngredientsPrice = additionalIngredients.reduce(
      (total, { quantity, price }) => total + quantity * price,
      0,
    );
    const sum = pizza.price * mult + extraDoughFee + additionalIngredientsPrice;
    setTotalSum(sum);
  };

  const handleAddToCart = () => {
    const additionalIngredients = calculateAdditionalIngredients();
    const order = {
      pizzaId: pizza.id,
      name: pizza.name,
      photoUrl: pizza.photoUrl,
      size,
      dough,
      additionalIngredients,
      sum: totalSum,
    };
    dispatch(addPizza(order));
    alert("Pizza added to the cart successfully.");
    navigate("/order");
  };

  const handleSizeChange = (e) => setSize(Number(e.target.value));
  const handleDoughChange = (e) => setDough(Number(e.target.value));

  useEffect(() => {
    if (selectedExtraIngredientId !== null) {
      const ingredient = extraIngredientsLeft.find(
        (item) => item.id === selectedExtraIngredientId,
      );
      if (ingredient) {
        setIngredientCounts((prevCounts) => [
          ...prevCounts,
          {
            id: ingredient.id,
            name: ingredient.name,
            quantity: 0,
            price: ingredient.price,
          },
        ]);
        setExtraIngredientsLeft((prevExtraIngredients) =>
          prevExtraIngredients.filter((e) => e.id !== ingredient.id),
        );
        setSelectedExtraIngredientId(null);
      }
    }
  }, [selectedExtraIngredientId]);

  useEffect(calculateTotalSum, [ingredientCounts, size, dough]);

  return (
    <div className="container">
      <h2>{pizza.name}</h2>
      <img src={pizza.photoUrl} alt={pizza.name} />
      <div>
        <label htmlFor="size">Size:</label>
        <select id="size" value={size} onChange={handleSizeChange}>
          <option value={0}>Small</option>
          <option value={1}>Medium</option>
          <option value={2}>Large</option>
        </select>
      </div>
      <div>
        <label htmlFor="dough">Dough Type:</label>
        <select id="dough" value={dough} onChange={handleDoughChange}>
          <option value={0}>Thin</option>
          <option value={1}>Thick</option>
        </select>
      </div>
      <p>Price: ${totalSum.toFixed(2)}</p>
      <h4>Ingredients:</h4>
      <div className="ingredients-list">
        {ingredientCounts.map((ingredient) => {
          return (
            <div key={ingredient.id} className="ingredient-item">
              <span>{ingredient.name}</span>
              <div className="ingredient-counter">
                <button
                  onClick={() =>
                    updateIngredientCount(
                      ingredient.id,
                      -1,
                      setIngredientCounts,
                    )
                  }
                  disabled={
                    ingredient.quantity <=
                    (pizza.ingredients.some(
                      (pizzaIngredient) => pizzaIngredient.id === ingredient.id,
                    )
                      ? 1
                      : 0)
                  }
                >
                  &lt;
                </button>
                <span>{ingredient ? ingredient.quantity : 1}</span>
                <button
                  onClick={() =>
                    updateIngredientCount(ingredient.id, 1, setIngredientCounts)
                  }
                >
                  &gt;
                </button>
              </div>
            </div>
          );
        })}
      </div>
      {extraIngredientsLeft && extraIngredientsLeft.length > 0 && (
        <>
          <h4>Add extra ingredients:</h4>

          <div className="extra-ingredients-dropdown">
            <select
              value={selectedExtraIngredientId || ""}
              onChange={(e) =>
                setSelectedExtraIngredientId(Number(e.target.value))
              }
            >
              <option value="" disabled>
                Select an ingredient
              </option>
              {extraIngredientsLeft.map((ingredient) => (
                <option key={ingredient.id} value={ingredient.id}>
                  {ingredient.name}
                </option>
              ))}
            </select>
          </div>
        </>
      )}
      <button className="add-to-cart" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
}

export default SinglePizzaInfo;
