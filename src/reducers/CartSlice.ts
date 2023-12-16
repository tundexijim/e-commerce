import { createSlice } from "@reduxjs/toolkit";

const initialState: any = [];

const CartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addtoCart: (state, action) => {
      state.push({ ...action.payload.item, qty: action.payload.qty });
    },
    removefromCart: (state, action) => {
      state.filter((c: any) => c.id !== action.payload.id);
    },
  },
});

export const { addtoCart, removefromCart } = CartSlice.actions;

export default CartSlice.reducer;

export const selectAllCarts = (state: any) => state.cart;
