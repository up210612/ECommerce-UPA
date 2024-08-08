import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../../slices/cartSlice";

export default function CheckoutInfoCliente() {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);

    const [postalCode, setPostalCode] = useState("");
    const [isPostalCodeValid, setIsPostalCodeValid] = useState(true);

    const [cardNumber, setCardNumber] = useState("");
    const [cardType, setCardType] = useState("");
    const [cardName, setCardName] = useState("");
    const [cardCVV, setCardCVV] = useState("");
    const [cardExpiry, setCardExpiry] = useState("");
    const [isCardNumberValid, setIsCardNumberValid] = useState(true);
    const [isCardCVVValid, setIsCardCVVValid] = useState(true);
    const [isCardExpiryValid, setIsCardExpiryValid] = useState(true);

    const [address, setAddress] = useState({
        street: "",
        streetNumber: "",
        country: "",
        countryState: "",
        zipcode: ""
    });

    const [errorMessage, setErrorMessage] = useState(""); // Estado para el mensaje de error

    const handlePostalCodeChange = (e) => {
        onChange(e);
        const { value } = e.target;
        const regex = /^[0-9]{0,5}$/;
        if (regex.test(value)) {
            setPostalCode(value);
            setIsPostalCodeValid(value.length === 5);
        }
    };

    const handleCardNumberChange = (e) => {
        const { value } = e.target;
        const regex = /^[0-9]{0,16}$/;
        if (regex.test(value)) {
            setCardNumber(value);
            setIsCardNumberValid(value.length === 16);
        }
    };

    const handleCardCVVChange = (e) => {
        const { value } = e.target;
        const regex = /^[0-9]{0,3}$/;
        if (regex.test(value)) {
            setCardCVV(value);
            setIsCardCVVValid(value.length === 3);
        }
    };

    const handleCardExpiryChange = (e) => {
        const { value } = e.target;
        const regex = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;
        if (value.length === 2 && !value.includes('/')) {
            setCardExpiry(value + '/');
        } else if (regex.test(value)) {
            setCardExpiry(value);
            setIsCardExpiryValid(true);
        } else {
            setCardExpiry(value);
            setIsCardExpiryValid(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isPostalCodeValid && isCardNumberValid && cardType && isCardCVVValid && isCardExpiryValid) {
            // Lógica para completar el pedido
            const orderData = {
                idClient: 1,
                address: address,
                items: cartItems.map(item => ({
                    idProduct: item.idProduct,
                    unitPrice: item.unitPrice,
                    quantity: item.quantity
                })),
                totalAmount: cartItems.reduce((total, item) => total + item.unitPrice * item.quantity, 0)
            };

            try {
                const response = await fetch('http://localhost:8080/orders/addFullOrder', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(orderData)
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const result = await response.json();
                console.log('Order successfully sent:', result);
                handleClearCart();
                setErrorMessage(""); // Limpiar el mensaje de error si la petición es exitosa
            } catch (error) {
                console.error('Error sending order:', error);
                setErrorMessage("Error sending order: " + error.message); // Actualizar el mensaje de error
                setTimeout(() => {
                    setErrorMessage(""); // Limpiar el mensaje de error después de 5 segundos
                }, 5000);
            }
            console.log("Formulario enviado");
            console.log(address);
        } else {
            console.log("Formulario no válido");
        }
    };

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    const onChange = (e) => {
        setAddress({
            ...address,
            [e.target.name]: e.target.value
        });
    };

    if (cartItems.length === 0) {
        return (
            <div className="container">
                <h3>Tu carrito está vacío</h3>
                <Link className="btn btn-primary" to="/">Ir a la tienda</Link>
            </div>
        );
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h3>Información Cliente</h3>
                <div className="mb-3">
                    <label className="form-label">Correo</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                </div>
                <hr className="border-2"></hr>
                <h3>Dirección de envío</h3>
                <div className="row mb-3">
                    <div className="col">
                        <label className="form-label">Primer nombre</label>
                        <input type="text" className="form-control" aria-label="First name" required />
                    </div>
                    <div className="col">
                        <label className="form-label">Apellidos</label>
                        <input type="text" className="form-control" aria-label="Last name" required />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-6">
                        <label className="form-label">Calle</label>
                        <input name="street" onChange={onChange} type="text" className="form-control" aria-label="Street" required />
                    </div>
                    <div className="col-3">
                        <label className="form-label">Número</label>
                        <input name="streetNumber" onChange={onChange} type="text" className="form-control" aria-label="Street number" required />
                    </div>
                    <div className="col-3">
                        <label className="form-label">Apartamento</label>
                        <input type="text" className="form-control" placeholder="(Opcional)" aria-label="Last name" />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-5">
                        <label className="form-label">País</label>
                        <select name="country" onChange={onChange} className="form-select" required>
                            <option value="">Escoger...</option>
                            <option value="1">...</option>
                        </select>
                    </div>
                    <div className="col-4">
                        <label className="form-label">Estado</label>
                        <select name="countryState" onChange={onChange} className="form-select" required>
                            <option value="">Escoger...</option>
                            <option value="1">...</option>
                        </select>
                    </div>
                    <div className="col-3">
                        <label className="form-label">Código postal</label>
                        <input
                            name="zipcode"
                            type="text"
                            className={`form-control ${!isPostalCodeValid ? 'is-invalid' : ''}`}
                            aria-label="código postal"
                            pattern="[0-9]{5}"
                            title="El código postal debe tener 5 dígitos"
                            value={postalCode}
                            onChange={handlePostalCodeChange}
                            required
                        />
                        {!isPostalCodeValid && (
                            <div className="invalid-feedback">
                                El código postal debe tener 5 dígitos.
                            </div>
                        )}
                    </div>
                </div>
                <hr className="border-2"></hr>
                <h3>Información de Pago</h3>
                <div className="mb-3">
                    <label className="form-label">Número de tarjeta</label>
                    <input
                        type="text"
                        className={`form-control ${!isCardNumberValid ? 'is-invalid' : ''}`}
                        aria-label="Número de tarjeta"
                        pattern="[0-9]{16}"
                        title="El número de tarjeta debe tener 16 dígitos"
                        value={cardNumber}
                        onChange={handleCardNumberChange}
                        required
                    />
                    {!isCardNumberValid && (
                        <div className="invalid-feedback">
                            El número de tarjeta debe tener 16 dígitos.
                        </div>
                    )}
                </div>
                <div className="mb-3">
                    <label className="form-label">Nombre en la tarjeta</label>
                    <input
                        type="text"
                        className="form-control"
                        aria-label="Nombre en la tarjeta"
                        value={cardName}
                        onChange={(e) => setCardName(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">CVV</label>
                    <input
                        type="text"
                        className={`form-control ${!isCardCVVValid ? 'is-invalid' : ''}`}
                        aria-label="CVV"
                        pattern="[0-9]{3}"
                        title="El CVV debe tener 3 dígitos"
                        value={cardCVV}
                        onChange={handleCardCVVChange}
                        required
                    />
                    {!isCardCVVValid && (
                        <div className="invalid-feedback">
                            El CVV debe tener 3 dígitos.
                        </div>
                    )}
                </div>
                <div className="mb-3">
                    <label className="form-label">Fecha de expiración (MM/YY)</label>
                    <input
                        type="text"
                        className={`form-control ${!isCardExpiryValid ? 'is-invalid' : ''}`}
                        aria-label="Fecha de expiración"
                        placeholder="MM/YY"
                        pattern="(0[1-9]|1[0-2])\/?([0-9]{2})"
                        title="La fecha de expiración debe estar en formato MM/YY"
                        value={cardExpiry}
                        onChange={handleCardExpiryChange}
                        maxLength="5"
                        required
                    />
                    {!isCardExpiryValid && (
                        <div className="invalid-feedback">
                            La fecha de expiración debe estar en formato MM/YY.
                        </div>
                    )}
                </div>
                <div className="mb-3">
                    <label className="form-label">Tipo de tarjeta</label>
                    <select className="form-select" value={cardType} onChange={(e) => setCardType(e.target.value)} required>
                        <option value="">Escoger...</option>
                        <option value="VISA">VISA</option>
                        <option value="MasterCard">MasterCard</option>
                    </select>
                </div>
                {errorMessage && (
                    <div className="alert alert-danger" role="alert">
                        {errorMessage}
                    </div>
                )}
                <hr className="border-2"></hr>
                <div className="d-flex justify-content-between mb-5">
                    <Link className="text-decoration-none text-secondary" to="/cart">{"<"} Regresar al carrito</Link>
                    <button type="submit" className="btn btn-primary">Completar el pedido</button>
                </div>
            </form>
        </div>
    );
}
