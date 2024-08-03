import React, { useEffect, useState } from 'react';
import ProductItem from './ProductItem';
import './ProductList.css';

export default function ProductList({ setSelectedProduct }) {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:8080/products/getProductsHome');
        const data = await response.json();
        const productsWithRating = data.map(product => ({
          ...product,
          rating: generateRandomRating()
        }));
        setProducts(productsWithRating);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const generateRandomRating = () => {
    const rating = Math.floor(Math.random() * 5) + 1;
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product); // Establece el producto seleccionado
  };

  return (
    <div>
      <div className="product-grid">
        {currentProducts.map((product) => (
          <div key={product.idProduct} onClick={() => handleProductClick(product)}>
            <ProductItem
              id={product.idProduct}
              imageSrc={product.productImageRoute}
              altText={`Producto ${product.idProduct}`}
              title={product.productName}
              category={product.idCategory ? product.idCategory : 'Sin categoría'}
              rating={product.rating}
              attributes={product.productDescription ? product.productDescription : 'Sin descripción'}
              price={`$${product.unitPrice}`}
            />
          </div>
        ))}
      </div>
      <div className="pagination-controls">
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Anterior
        </button>
        <span>Página {currentPage}</span>
        <button onClick={handleNextPage} disabled={indexOfLastProduct >= products.length}>
          Siguiente
        </button>
      </div>
    </div>
  );
}
