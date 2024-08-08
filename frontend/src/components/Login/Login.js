import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setClientInfo, clearClientInfo } from '../../slices/clientSlice';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './Login.css';

export default function Login() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';
  const [email, setemail] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.client.isAuthentificated);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email === '' || contraseña === '') {
      setError(true);
      return;
    }

    setError(false);

    // Simulación de autenticación
    const clientData = {
      email: email,
      password: contraseña,
    };

    try {
      const response = await fetch('http://localhost:8080/clients/saveClient', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(clientData),
      });

      if (response.ok) {
        const result = await response.json();
        dispatch(
          setClientInfo({
            name: result.name,
            email: result.email,
            address: result.address,
          })
        );
        navigate('/');
      } else {
        console.error('Error al guardar el cliente');
      }
    } catch (error) {
      console.error('Error al conectar con el servidor', error);
    }
  };

  const handleLogout = () => {
    dispatch(clearClientInfo());
  };

  if (isAuthenticated) {
    return (
      <div>
        <Navbar />
        <div className="login-container">
          <div className="login">
            <div className="login-form">
              <h2 className="display-4">Ya has iniciado sesión</h2>
              <button
                onClick={handleLogout}
                className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm form-control"
              >
                Cerrar sesión
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className={`login-container ${isLoginPage ? 'login-page' : ''}`}>
        <div className="login">
          <div className="login-form">
            <h2 className="display-4">Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <input
                  id="inputEmail"
                  type="email"
                  placeholder="email de usuario"
                  required
                  className="form-control rounded-pill border-0 shadow-sm px-4"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
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
                <p>¿No tienes una cuenta?</p>
                <p><Link to={"/signin"}>Crea una</Link></p>
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
      <Footer />
    </div>
  );
}
