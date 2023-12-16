import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./reducers/CartSlice";
import ProductSlice from "./reducers/ProductSlice";

const store = configureStore({
  reducer: {
    products: ProductSlice,
    cart: CartSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
