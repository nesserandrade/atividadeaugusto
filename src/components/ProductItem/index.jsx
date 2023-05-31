import { React, useState } from "react";
import "../../App.css";

const ProductItem = ({ title, price, image, description, index, category }) => {
  const [selecteditem, setSelectedItem] = useState(0);

  return (
    <>
      {selecteditem == index ? (
        <div
          className="product-hover"
          onMouseEnter={() => {
            setSelectedItem(index);
          }}
          onMouseLeave={() => {
            setSelectedItem(0);
          }}
        >
          <p className="product-description">{description}</p>
          <div className="product-groups">
            <p className="product-group">Categoria: {category}</p>
          </div>
        </div>
      ) : (
        <div
          className="product-item"
          onMouseEnter={() => {
            setSelectedItem(index);
          }}
          onMouseLeave={() => {
            setSelectedItem(-1);
          }}
        >
          <img className="img-product" src={image} alt={title} />
          <div className="product-body">
            <p className="product-name">{title}</p>
            <p className="product-cost">R${price}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductItem;
