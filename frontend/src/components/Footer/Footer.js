import React from 'react';
import './Footer.css'; // Asegúrate de importar el archivo CSS

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Contacto</h4>
          <p>Teléfono: +1 234 567 890</p>
          <p>Email: altiroconelgato@gmail.com</p>
          <p>Dirección: Aguascalientes, Aguascalientes #123</p>
        </div>
        <div className="footer-section">
          <h4>Redes Sociales</h4>
          <ul>
            <li><a href="https://www.facebook.com">Facebook</a></li>
            <li><a href="https://www.twitter.com">Twitter</a></li>
            <li><a href="https://www.instagram.com">Instagram</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Enlaces Rápidos</h4>
          <ul>
            <li><a href="/about">Sobre Nosotros</a></li>
            <li><a href="/services">Servicios</a></li>
            <li><a href="/contact">Contacto</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
