import React from "react";
import { useLocation } from "react-router-dom";
import "./Login.css"; // Asegúrate de que este archivo esté correctamente importado
import Navbar from "../Navbar/Navbar";

export default function Login() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  return (
    <div>
      <Navbar />
      <div className={`login-container ${isLoginPage ? "login-page" : ""}`}>
        <div className="login">
          {!isLoginPage && (
            <div className="search">
              <input type="text" placeholder="Search for products" />
              <button type="submit">
                <img src="/search.png" alt="Search" />
              </button>
            </div>
          )}
          <div className="login-form">
            <h2 className="display-4">Login</h2>
            <form>
              <div className="form-group mb-3">
                <input
                  id="inputEmail"
                  type="email"
                  placeholder="Email address"
                  required
                  className="form-control rounded-pill border-0 shadow-sm px-4"
                />
              </div>
              <div className="form-group mb-3">
                <input
                  id="inputPassword"
                  type="password"
                  placeholder="Password"
                  required
                  className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                />
              </div>
              <div className="custom-control custom-checkbox mb-3 text-center">
                <input
                  id="customCheck1"
                  type="checkbox"
                  className="custom-control-input"
                />
                <label htmlFor="customCheck1" className="custom-control-label text-center">
                  Remember password
                </label>
              </div>
              <button
                type="submit"
                className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm form-control"
              >
                Sign in
              </button>
            </form>
            <div className="text-center mt-3 text-center">
              <small className="text-muted">Snippet by Bootstapious</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
