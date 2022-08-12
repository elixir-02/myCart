import React from "react";

export const Products = ({ productItems, handleAddProduct }) => {
  return (
    <>
      <div className="card-group">
        {productItems.map((currProduct) => {
          const { id, name, price, image } = currProduct;
          return (
            <div key={id} className="card">
              <img src={image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h3 className="card-title">{name}</h3>
                <h3 className="card-title">${price}</h3>
                <button
                  onClick={() => handleAddProduct(currProduct)}
                  className="btn btn-primary positioning"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
