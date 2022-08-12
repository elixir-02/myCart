import "./App.css";
import data from "./components/Data";
import { Header } from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import { Routing } from "./components/Routing";
import { useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const { productItems } = data;

  const handleAddProduct = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id);
    if (productExist) {
      setCartItems(
        cartItems.map((currItem) =>
          currItem.id === product.id
            ? { ...productExist, quantity: productExist.quantity + 1 }
            : currItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveProduct = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id);
    if (productExist.quantity === 1) {
      setCartItems(
        cartItems.filter((curr) => {
          return curr.id !== product.id;
        })
      );
    } else {
      setCartItems(
        cartItems.map((currItem) =>
          currItem.id === product.id
            ? { ...productExist, quantity: productExist.quantity - 1 }
            : currItem
        )
      );
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <>
      <BrowserRouter>
        <Header cartItems={cartItems} />
        <Routing
          productItems={productItems}
          cartItems={cartItems}
          handleAddProduct={handleAddProduct}
          handleRemoveProduct={handleRemoveProduct}
          clearCart={clearCart}
        />
      </BrowserRouter>
    </>
  );
}

export default App;
