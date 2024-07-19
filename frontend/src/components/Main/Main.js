import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Checkout from '../Checkout/Checkout';
import Home from '../Home/Home';
import ProductPage from '../ProductPage/ProductPage';
import Cart from '../Cart/Cart';
import Login from '../Login/Login';
// import Home from '../Home/Home';  Se importa el componente

const Main = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home/>}></Route> */} /* Aqui se usa la ruta
        <Route path="/" element={<Home/>}></Route>
        <Route path="/checkout" element={<Checkout/>}></Route>
        <Route path="/productPage" element={<ProductPage/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/login" element={<Login/>}></Route>

      </Routes>
    </BrowserRouter>
  );
};

export default Main;