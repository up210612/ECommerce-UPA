import React from 'react';
import { Link } from 'react-router-dom';
import './ProductList.css';

const ProductItem = ({ id, imageSrc, altText, title, category, rating, attributes, price }) => (
  <div className="product-item">
    <img src={imageSrc} alt={altText} className="product-image" />
    <p className="product-category">{category}</p>
    <Link to={`/productPage/${id}`} className="product-title">{title}</Link>
    <div className="product-rating">{rating}</div>
    <p className="product-attributes">{attributes}</p>
    <p className="product-price">{price}</p>
    <button className="add-button">+ Add</button>
  </div>
);

export default ProductItem;

//<Link to={`/product/${id}`} className="product-title">{title}</Link>