import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../slices/cartSlice';
import './ProductDetails.css';

const ProductDetails = ({ product = {} }) => {
  const dispatch = useDispatch();
  const sizes = product.sizes || []; // Verificar si sizes está definido, de lo contrario, usar un array vacío
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value, 10));
  };

  const handleAddToCart = () => {
    const mainImage = product.productImages.find(image => image.includes('Principal'));

    const item = {
      idProduct: product.idProduct,
      productName: product.productName,
      unitPrice: product.unitPrice,
      size: selectedSize.sizeName,
      quantity: quantity,
      image: mainImage ? mainImage : null,
    };

    dispatch(addItem(item));
  };

  return (
    <div className="product-details">
      <h1>{product.productName}</h1>
      <p>{product.categoryName || 'Sin descripción'}</p>
      <h3>{"$" + product.unitPrice}</h3>

      <div>
        <h4>Talla:</h4>
        {sizes.map((size, index) => (
          <button
            key={index}
            className={`btn ${selectedSize === size ? 'btn-selected' : 'btn-primary'}`}
            disabled={size.quantity === 0}
            onClick={() => handleSizeClick(size)}
          >
            {size.sizeName}
          </button>
        ))}
      </div>

      <div>
        <h4>Selecciona la Cantidad:</h4>
        <input
          className='form-select'
          type="number"
          min="1"
          value={quantity}
          onChange={handleQuantityChange}
        />
      </div>

      <div className="mt-3 d-grid gap-2 mx-auto">
        <button className="btn btn-primary" type="button" disabled={!selectedSize} onClick={handleAddToCart}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
