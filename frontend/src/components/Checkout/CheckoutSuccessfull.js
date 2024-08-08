import ButtonAppBar from "../Navbar";
import { useLocation } from 'react-router-dom';
import Footer from "../Footer/Footer";

export default function CheckoutSuccessfull() {
    const location = useLocation();
    const { paymentInfo, result } = location.state || {};
    const shippingAddress = `${result.address.country}, ${result.address.countryState}, ${result.address.street}, ${result.address.streetNumber}, ${result.address.apartment == null ? "": "result.address.apartment, "} ${result.address.zipcode}`;
    const customerName = result.client.firstName + " " + result.client.lastName;
    return (
        <>
            <ButtonAppBar />
            <div className="container mt-5">
                <div className="card">
                    <div className="card-body text-center">
                        <div className="display-4 text-success">✔️</div>
                        <h2 className="card-title">Pedido {result.order.idOrder}</h2>
                        <h3 className="card-subtitle mb-2 text-muted">Gracias, {customerName}!</h3>
                        <p className="card-text">Tu pedido ha sido confirmado</p>
                        <p className="card-text">Hemos aceptado tu pedido.</p>
                    </div>
                </div>
                <hr className="my-4" />
                <div>
                    <h4>Información del cliente</h4>
                    <div className="row">
                        <div className="col-md-6">
                            <h5>Dirección de envío</h5>
                            <p>{customerName}</p>
                            <p>{shippingAddress}</p>
                        </div>
                    </div>
                    <div className="mt-4">
                        <h5>Método de pago</h5>
                        <p>
                            Termina en {paymentInfo.cardNumber.slice(-4)} — ${result.order.totalAmount}
                        </p>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}