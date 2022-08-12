import React from "react";

export const Cart = ({
  cartItems,
  handleAddProduct,
  handleRemoveProduct,
  clearCart,
}) => {
  const totalPrice = cartItems.reduce((price, items) => {
    return price + items.quantity * items.price;
  }, 0);

  return (
    <div className="cart-items">
      <div className="cart-items-header">Cart Items</div>

      <div className="clear-cart">
        {cartItems.length >= 1 && (
          <button onClick={clearCart} className="clear-cart-btn">
            Clear Cart
          </button>
        )}
      </div>

      {cartItems.length === 0 && (
        <div className="cart-items-empty">No items here</div>
      )}
      <div>
        {cartItems.map((item) => {
          return (
            <div key={item.id} className="cart-items-list">
              <img className="cart-items-image" src={item.image} alt="" />
              <div className="cart-items-name">{item.name}</div>
              <div className="cart-items-function">
                <button
                  onClick={() => handleRemoveProduct(item)}
                  className="cart-items-remove"
                >
                  -
                </button>

                <button
                  onClick={() => handleAddProduct(item)}
                  className="cart-items-add"
                >
                  +
                </button>
              </div>
              <div className="cart-items-price">
                {item.quantity} * ${item.price}
              </div>
            </div>
          );
        })}
      </div>
      <div className="cart-items-total-price-name">
        Total Price
        <div className="cart-items-total-price">${totalPrice}</div>
      </div>
    </div>
  );
};
