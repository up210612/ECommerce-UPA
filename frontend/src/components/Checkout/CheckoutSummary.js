import { useSelector } from "react-redux";

export default function CheckoutSummary() {

    const cartItems = useSelector((state) => state.cart.items);
    return (
        <div className="container mh-50 p-3 overflow-auto" style={{ height: "420px" }}>

            <div className="col-md-4 w-100">
                <div className="card mb-4">
                    <div className="card-header py-3">
                        <h5 className="mb-0">Resumén</h5>
                    </div>
                    <div className="card-body">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                Subtotal
                                <span>${cartItems.reduce((total, item) => total + item.unitPrice * item.quantity, 0).toFixed(2)}</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center px-0 mt-2">
                                Envío
                                <span>Gratis</span>
                            </li>

                            <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mt-2 mb-3">
                                <div>
                                    <strong>Total</strong>
                                </div>
                                <span>
                                    <strong>${cartItems.reduce((total, item) => total + item.unitPrice * item.quantity, 0).toFixed(2)}</strong>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}