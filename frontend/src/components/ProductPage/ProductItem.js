import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap'; // Asegúrate de importar el archivo CSS
import './ProductItem.css';
const ProductItem = ({images = []}) => {

  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setSelectedIndex(selectedIndex);
  };

  return (
    <div className="product-item-container">
      <Carousel activeIndex={selectedIndex} onSelect={handleSelect}>
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <img src={"/" + image} className="d-block w-100" alt={`Slide ${index}`} />
          </Carousel.Item>
        ))}
      </Carousel>
      <div className="thumbnail-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={"/" + image}
            className={`thumbnail ${selectedIndex === index ? 'selected' : ''}`}
            alt={`Thumbnail ${index}`}
            onClick={() => handleSelect(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductItem;
