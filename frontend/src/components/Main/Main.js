import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Checkout from '../Checkout/Checkout';
import Home from '../Home/Home';
import ProductPage from '../ProductPage/ProductPage';
import Cart from '../Cart/Cart';
import Login from '../Login/Login';
import { useState } from 'react';
import { UserProvider } from '../Login/UserContext'; 
import CheckoutSuccessfull from '../Checkout/CheckoutSuccessfull';

const Main = () => {
  const [user, setUser] = useState(null); // null para indicar usuario no autenticado

  return (
    <UserProvider value={{ user, setUser }}> 
      <BrowserRouter>
        <Routes>
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/productPage/:id" element={<ProductPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/confirmedOrder" element={<CheckoutSuccessfull />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
    
  );
};

export default Main;
