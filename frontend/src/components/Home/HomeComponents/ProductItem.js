import React from 'react';
import { Link } from 'react-router-dom';
import './ProductItem.css';  // Asegúrate de que el CSS esté enlazado correctamente

const ProductItem = ({ id, imageSrc, altText, title, category, rating, attributes, price }) => (
  <Link to={`/productPage/${id}`} className="product-item-link">
    <div className="product-item">
      <div className="product-image-container">
        <img src={imageSrc} alt={altText} className="product-image" />
      </div>
      <p className="product-category">{category}</p>
      <p className="product-title">{title}</p>
      <div className="product-rating">{rating}</div>
      <p className="product-attributes">{attributes}</p>
      <p className="product-price">{price}</p>
      <button className="add-button">+ Add</button>
    </div>
  </Link>
);

export default ProductItem;
