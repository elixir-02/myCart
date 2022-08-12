import React from "react";
import { Routes, Route } from "react-router-dom";
import { Products } from "./Products";
import { Signup } from "./Signup";
import { Cart } from "./Cart";

export const Routing = ({
  productItems,
  cartItems,
  handleAddProduct,
  handleRemoveProduct,
  clearCart,
}) => {
  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Products
              productItems={productItems}
              handleAddProduct={handleAddProduct}
            />
          }
        />
        <Route
          exact
          path="/home"
          element={
            <Products
              productItems={productItems}
              handleAddProduct={handleAddProduct}
            />
          }
        ></Route>
        <Route exact path="/signup" element={<Signup />} />
        <Route
          exact
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              handleAddProduct={handleAddProduct}
              handleRemoveProduct={handleRemoveProduct}
              clearCart={clearCart}
            />
          }
        />
      </Routes>
    </>
  );
};
