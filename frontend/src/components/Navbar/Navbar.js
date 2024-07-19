import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Navbar.css"; // Archivo CSS para los estilos personalizados

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/online-shop.png" alt="Cart Icon" />
        <span>
        <a className="navbar-brand" href="/">
          E-Commerce     
        </a>
        </span>
      </div>
      <div className="search">
        <input type="text" placeholder="Search for products" />
        <button type="submit">
          <img src="/search.png" alt="Search" />
        </button>
      </div>
      <div className="nav-icons">
        <a href="/carrito" className="cart-icon">
          <img src="/shopping-cart.png" alt="Cart" />
          <span className="badge">1</span>
        </a>
        <a href="/login" className="account-icon">
          <img src="/user.png" alt="Account" />
        </a>
      </div>
    </nav>
  );
}
