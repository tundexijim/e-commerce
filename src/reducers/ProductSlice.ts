import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState: any = [];

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await axios.get("https://dummyjson.com/products?limit=10");
  return response.data;
});

const ProductSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default ProductSlice.reducer;

export const selectAllProducts = (state: any) => state.products;
