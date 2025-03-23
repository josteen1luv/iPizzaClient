import { api } from "./api.js";

export const pizzaApiSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllPizza: builder.query({
      query: () => ({
        url: `/pizzas`,
        method: "get",
      }),
      providesTags: ["Pizza"],
    }),
    getSinglePizza: builder.query({
      query: (id) => ({
        url: `/pizzas/${id}`,
        method: "get",
      }),
      providesTags: ["Pizza"],
    }),
    getAllIngredients: builder.query({
      query: () => ({
        url: `/getAllingredients`,
        method: "get",
      }),
    }),
    postCheckout: builder.mutation({
      query: (orderData) => ({
        url: "/orders",
        method: "POST",
        data: orderData,
      }),
    }),
  }),
});
export const {
  useGetAllPizzaQuery,
  useGetSinglePizzaQuery,
  useGetAllIngredientsQuery,
  usePostCheckoutMutation,
} = pizzaApiSlice;
