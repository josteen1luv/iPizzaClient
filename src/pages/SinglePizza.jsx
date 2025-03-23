import React from "react";
import { useParams } from "react-router-dom";
import { useGetSinglePizzaQuery } from "../store/pizzaApiSlice.js";
import SinglePizzaInfo from "../components/SinglePizzaInfo.jsx";

function SinglePizza() {
  const { id } = useParams();
  const { data: pizza, isLoading, isError } = useGetSinglePizzaQuery(id);

  // Wait until data is loaded
  if (isLoading) return <p>Loading pizza...</p>;
  if (isError || !pizza) return <p>Failed to load pizza.</p>;

  return <SinglePizzaInfo pizza={pizza} />;
}

export default SinglePizza;
