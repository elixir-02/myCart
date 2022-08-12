import React from "react";

import { Link } from "react-router-dom";

export const Header = ({ cartItems }) => {
  return (
    <header className="header">
      <div>
        <h2>
          <Link to="/" className="logo">
            {" "}
            GADGETS
          </Link>
        </h2>
      </div>
      <div className="header-links">
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/signup">SignUp</Link>
          </li>
          <li>
            <Link to="/cart" className="cart">
              <i className="fa fa-thin fa-cart-shopping"></i>
              <span className="cart-mini">
                {cartItems.length === 0 ? "" : cartItems.length}
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};
