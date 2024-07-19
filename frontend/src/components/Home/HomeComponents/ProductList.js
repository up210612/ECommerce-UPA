import React from 'react';
import ProductItem from './ProductItem';
import './ProductList.css';

export default function ProductList() {
  const products = [
    { id: 1, title: "Título del producto 1", category: "Categoría 1", rating: "★★★★☆", attributes: "Atributos", price: "$00.00" },
    { id: 2, title: "Título del producto 2", category: "Categoría 2", rating: "★★★☆☆", attributes: "Atributos", price: "$00.00" },
    { id: 3, title: "Título del producto 3", category: "Categoría 3", rating: "★★★★★", attributes: "Atributos", price: "$00.00" },
    { id: 4, title: "Título del producto 4", category: "Categoría 4", rating: "★★☆☆☆", attributes: "Atributos", price: "$00.00" },
    { id: 5, title: "Título del producto 5", category: "Categoría 5", rating: "★★★★☆", attributes: "Atributos", price: "$00.00" },
    { id: 6, title: "Título del producto 6", category: "Categoría 6", rating: "★★★☆☆", attributes: "Atributos", price: "$00.00" },
    // Add more products as needed
  ];

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductItem
          key={product.id}
          id={product.id}
          imageSrc="https://placehold.co/150x150"
          altText={`Producto ${product.id}`}
          title={product.title}
          category={product.category}
          rating={product.rating}
          attributes={product.attributes}
          price={product.price}
        />
      ))}
    </div>
  );
}
