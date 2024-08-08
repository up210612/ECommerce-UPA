import React from "react";
import { useLocation } from "react-router-dom";
import "./Login.css";
import Navbar from "../Navbar/Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "./UserContext";
import Footer from "../Footer/Footer";

export default function Login() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  const [nombre, setNombre] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [error, setError] = useState(false);
  const { setUser } = useUser();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nombre === "" || contraseña === "") {
      setError(true);
      return;
    }

    setError(false);
    setUser({ nombre });
    navigate("/");
  };

  return (
    <div>
      <Navbar />
      <div className={`login-container ${isLoginPage ? "login-page" : ""}`}>
        <div className="login">
          <div className="login-form">
            <h2 className="display-4">Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <input
                  id="inputEmail"
                  type="text"
                  placeholder="Nombre de usuario"
                  required
                  className="form-control rounded-pill border-0 shadow-sm px-4"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                />
              </div>
              <div className="form-group mb-3">
                <input
                  id="inputPassword"
                  type="password"
                  placeholder="Contraseña"
                  required
                  className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                  value={contraseña}
                  onChange={(e) => setContraseña(e.target.value)}
                />
              </div>
              <div className="custom-control custom-checkbox mb-3 text-center">
                <input
                  id="customCheck1"
                  type="checkbox"
                  className="custom-control-input"
                />
                <label htmlFor="customCheck1" className="custom-control-label text-center">
                  Recordar contraseña
                </label>
              </div>
              <button
                type="submit"
                className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm form-control"
              >
                Iniciar sesión
              </button>
            </form>
            {error && <p className="text-danger text-center">Todos los campos son obligatorios</p>}
            <div className="text-center mt-3">
              <small className="text-muted">al tiro con el gato</small>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
