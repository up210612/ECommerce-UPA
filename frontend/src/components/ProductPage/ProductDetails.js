import React from 'react';
import './ProductDetails.css';

const ProductDetails = ({ product }) => {
  const sizes = ['XS', 'S', 'M', 'L', 'XL']; 

  return (
    <div className="product-details"> 
      <h1>TituloProducto</h1>
      <p>DescripcionProducto</p>
      <h3>PrecioProducto</h3>

      <div>
        <h4>Talla:</h4>
        {sizes.map((size, index) => (
          <button key={index}>
            {size}
          </button>
        ))}
      </div>

      <div>
        <h4>Selecciona el Género:</h4>
        <select defaultValue="hombre">
          <option value="hombre">Hombre</option>
          <option value="mujer">Mujer</option>
        </select>
      </div>

      <div>
        <h4>Selecciona la Cantidad:</h4>
        <input type="number" min="1" defaultValue="1" />
      </div>
    </div>
  );
};

export default ProductDetails;
