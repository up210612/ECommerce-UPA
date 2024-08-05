import React from 'react';
import './ProductDetails.css';


const ProductDetails = ({product}) => {
  
  const sizes = ['XS', 'S', 'M', 'L', 'XL'];

  return (
    <div className="product-details">
      <h1>{product.productName}</h1>
      <p>{product.categoryName || 'Sin descripción'}</p>
      <h3>{"$" + product.unitPrice}</h3>

      <div>
        <h4>Talla:</h4>
        {sizes.map((size, index) => (
          <button key={index} class="btn btn-primary">
            {size}
          </button>
        ))}
      </div>

      <div>
        <h4>Selecciona la Cantidad:</h4>
        <input className='form-select' type="number" min="1" defaultValue="1" />
      </div>

      <div class="mt-3 d-grid gap-2 mx-auto">
        <button class="btn btn-primary" type="button">Agregar al carrito</button>
      </div>
    </div>
  );
};

export default ProductDetails;
