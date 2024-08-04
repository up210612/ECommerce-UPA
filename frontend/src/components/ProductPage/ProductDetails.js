import React from 'react';
import './ProductDetails.css';

const ProductDetails = () => {
  const sizes = ['XS', 'S', 'M', 'L', 'XL'];

  return (
    <div className="product-details">
      <h1>Test</h1>
      <p>{'Test' || 'Sin descripción'}</p>
      <h3>$500</h3>

      <div>
        <h4>Talla:</h4>
        {sizes.map((size, index) => (
          <button key={index}>
            {size}
          </button>
        ))}
      </div>

      <div>
        <h4>Selecciona la Cantidad:</h4>
        <input type="number" min="1" defaultValue="1" />
      </div>

      <div class="mt-3 d-grid gap-2 mx-auto">
        <button class="btn btn-primary" type="button">Agregar al carrito</button>
      </div>
    </div>
  );
};

export default ProductDetails;
