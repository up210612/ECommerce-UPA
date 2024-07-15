import React, { useState } from 'react';
import { Container, Row, Col, Button, Form, Image } from 'react-bootstrap';

const ProductPage = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState('');

  const handleAddToCart = () => {
    // Lógica para añadir al carrito
    console.log(`Producto: ${product.title}, Talla: ${size}, Cantidad: ${quantity}`);
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col md={6}>
          <Image src={product.imageUrl} alt={product.title} fluid />
        </Col>
        <Col md={6}>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <h3>${product.price}</h3>
          <Form>
            <Form.Group controlId="formSize">
              <Form.Label>Talla</Form.Label>
              <Form.Control as="select" value={size} onChange={(e) => setSize(e.target.value)}>
                <option value="">Selecciona una talla</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formQuantity" className="mt-3">
              <Form.Label>Cantidad</Form.Label>
              <Form.Control 
                type="number" 
                value={quantity} 
                onChange={(e) => setQuantity(e.target.value)} 
                min="1" 
              />
            </Form.Group>
            <Button variant="primary" className="mt-3" onClick={handleAddToCart}>
              Añadir al carrito
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductPage;
