import React from "react";
import { useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Navbar.css"; // Archivo CSS para los estilos personalizados
import { useSelector } from "react-redux";

export default function Navbar() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <nav className="navbar">
      <div className="logo" >
      <a href="/">
          <img src="/gato.png" alt="Cart Icon" className="large-icon" />
        </a>
        <div className="brand-text">
          <a className="navbar-brand" href="/">
            AL TIRO <br/> CON EL GATO
          </a>
        </div>
      </div>
      {!isLoginPage && (
        <div className="search">
          <input type="text" placeholder="Búsqueda de productos" />
          <button type="submit">
            <img src="/search.png" alt="Search" />
          </button>
        </div>
      )}
      <div className="nav-icons">
        <a href="/cart" className="cart-icon">
          <img src="/shopping-cart.png" alt="Cart" />
          {cartItems.length === 0 ? (<></>) : (<span className="badge">{cartItems.length}</span>)}
          
        </a>
        <a href="/login" className="text-special">
          <img src="/user.png" alt="Account" /> Login
        </a>
      </div>
    </nav>
  );
}
