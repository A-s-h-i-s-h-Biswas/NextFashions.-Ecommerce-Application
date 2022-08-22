import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
    // price:[],
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      // state.price.push(action.payload.price);
      state.total += action.payload.price * action.payload.quantity;
    },
    deleteProduct: (state, action) => {
      state.quantity -= 1;
      state.total -= action.payload.price * action.payload.quantity;
      state.products=action.payload.products;
    },
    deleteAllProducts: (state, action) => {
        state.quantity=0;
        state.total =0;
        state.products=[];
    },
    
  },
});

export const { addProduct, deleteProduct, deleteAllProducts} = cartSlice.actions;
export default cartSlice.reducer;