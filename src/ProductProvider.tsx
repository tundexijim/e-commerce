"use client";

import React from "react";
import store from "./store";
import { Provider } from "react-redux";

const ProductProvider = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};
export default ProductProvider;
