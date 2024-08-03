import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Checkout from '../Checkout/Checkout';
import Home from '../Home/Home';
import ProductPage from '../ProductPage/ProductPage';
import Cart from '../Cart/Cart';
import Login from '../Login/Login';

const Main = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home setSelectedProduct={setSelectedProduct} />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/productPage" element={<ProductPage product={selectedProduct} />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Main;
