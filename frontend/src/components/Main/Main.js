import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
// import Home from '../Home/Home';  Se importa el componente

const Main = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home/>}></Route> */} /* Aqui se usa la ruta
      </Routes>
    </BrowserRouter>
  );
};

export default Main;