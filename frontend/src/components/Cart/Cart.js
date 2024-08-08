import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateItemQuantity, removeItem, clearCart } from "../../slices/cartSlice";
import { useNavigate } from "react-router-dom";
import "./Cart.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const navigate = useNavigate();

  const handleQuantityChange = (idProduct, size, quantity) => {
    if (quantity >= 0) {
      dispatch(updateItemQuantity({ idProduct, size, quantity }));
    }
  };

  const handleCheckout = () => {
    navigate('/checkout'); // Redirige a la página de checkout
  };

  const handleRemoveItem = (idProduct, size) => {
    dispatch(removeItem({ idProduct, size }));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <Navbar />
      <section className="h-100 gradient-custom">
        <div className="container">
          <div className="row d-flex justify-content-center my-4">
            <div className="col-md-8">
              <div className="card mb-4">
                <div className="card-header py-3 d-flex justify-content-between align-items-center">
                  <h5 className="mb-0">Carrito - {cartItems.length} artículos</h5>
                  <button className="btn btn-danger btn-sm" onClick={handleClearCart}>
                    Vaciar carrito
                  </button>
                </div>
                <div className="card-body">
                  {cartItems.length === 0 ? (
                    <p>El carrito está vacío</p>
                  ) : (
                    cartItems.map((item, index) => (
                      <div key={index} className="row mb-4">
                        <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                          <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                            <img src={item.image} className="w-100" alt={item.productName} />
                            <a href="#!">
                              <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}></div>
                            </a>
                          </div>
                        </div>

                        <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                          <p><strong>{item.productName}</strong></p>
                          <p>Talla: {item.size}</p>
                          <button
                            type="button"
                            className="btn btn-danger btn-sm me-1 mb-2"
                            data-mdb-tooltip="tooltip"
                            title="Remove item"
                            onClick={() => handleRemoveItem(item.idProduct, item.size)}
                          >
                            <i className="fas fa-trash-alt"></i>
                          </button>
                          <button
                            type="button"
                            className="btn btn-secondary btn-sm mb-2"
                            data-mdb-tooltip="tooltip"
                            title="Move to the wish list"
                          >
                            <i className="fas fa-heart"></i>
                          </button>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                          <div className="d-flex mb-4" style={{ maxWidth: "300px" }}>
                            <div className="form-outline">
                              <input
                                id="form1"
                                min="0"
                                name="quantity"
                                value={item.quantity}
                                type="number"
                                className="form-control"
                                onChange={(e) =>
                                  handleQuantityChange(item.idProduct, item.size, Number(e.target.value))
                                }
                              />
                              <label className="form-label" htmlFor="form1">
                                Cantidad
                              </label>
                            </div>
                          </div>

                          <p className="text-start text-md-center">
                            <strong>${item.unitPrice}</strong>
                          </p>
                        </div>

                        <hr className="my-4" />
                      </div>
                    ))
                  )}
                </div>
              </div>
              <div className="card mb-4">
                <div className="card-body">
                  <p><strong>Entrega estimada</strong></p>
                  <p className="mb-0">20.08.2024 - 22.08.2024</p>
                </div>
              </div>
              <div className="card mb-4 mb-lg-0">
                <div className="card-body">
                  <p><strong>Aceptamos</strong></p>
                  <img className="me-2" width="45px" src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg" alt="Visa" />
                  <img className="me-2" width="45px" src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg" alt="Mastercard" />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">Resumén</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Productos
                      <span>${cartItems.reduce((total, item) => total + item.unitPrice * item.quantity, 0).toFixed(2)}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                      Envío
                      <span>Gratis</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>Total</strong>
                      </div>
                      <span>
                        <strong>${cartItems.reduce((total, item) => total + item.unitPrice * item.quantity, 0).toFixed(2)}</strong>
                      </span>
                    </li>
                  </ul>

                  <button
                    type="button"
                    onClick={handleCheckout}
                    className="btn btn-primary btn-lg btn-block"
                    style={{ backgroundColor: "#d74a2b", borderColor: "#d74a2b" }} // Reemplaza #yourColorCode con el código del color deseado

                  >
                    Ir al checkout
                  </button>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}