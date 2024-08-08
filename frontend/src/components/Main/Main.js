import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Checkout from '../Checkout/Checkout';
import Home from '../Home/Home';
import ProductPage from '../ProductPage/ProductPage';
import Cart from '../Cart/Cart';
import Login from '../Login/Login';
import CheckoutSuccessfull from '../Checkout/CheckoutSuccessfull';

const Main = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/productPage/:id" element={<ProductPage/>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/confirmedOrder" element={<CheckoutSuccessfull />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Main;
