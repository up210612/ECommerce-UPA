import React from 'react';
import './ProductList.css'; // We'll create this CSS file

const ProductItem = ({ imageSrc, altText, title, attributes, price }) => (
  <div className="product-item">
    <img src={imageSrc} alt={altText} className="product-image" />
    <a href="#" className="product-title">{title}</a>
    <p className="product-attributes">{attributes}</p>
    <p className="product-price">{price}</p>
  </div>
);

export default function ProductList() {
  const products = [
    { id: 1, title: "Título del producto 1", attributes: "Atributos", price: "$00.00" },
    { id: 2, title: "Título del producto 2", attributes: "Atributos", price: "$00.00" },
    { id: 3, title: "Título del producto 3", attributes: "Atributos", price: "$00.00" },
    { id: 4, title: "Título del producto 4", attributes: "Atributos", price: "$00.00" },
    { id: 5, title: "Título del producto 5", attributes: "Atributos", price: "$00.00" },
    { id: 6, title: "Título del producto 6", attributes: "Atributos", price: "$00.00" },
    // Add more products as needed
  ];

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductItem
          key={product.id}
          imageSrc="https://placehold.co/150x150"
          altText={`Producto ${product.id}`}
          title={product.title}
          attributes={product.attributes}
          price={product.price}
        />
      ))}
    </div>
  );
}