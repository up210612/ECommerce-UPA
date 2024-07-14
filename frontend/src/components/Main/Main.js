import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Checkout from '../Checkout/Checkout';
// import Home from '../Home/Home';  Se importa el componente

const Main = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home/>}></Route> */} /* Aqui se usa la ruta
        <Route path="/checkout" element={<Checkout/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Main;