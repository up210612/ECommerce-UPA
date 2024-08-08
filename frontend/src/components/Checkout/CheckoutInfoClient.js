import { Link } from "react-router-dom";
import { useState } from "react";

export default function CheckoutInfoCliente() {
    const [postalCode, setPostalCode] = useState("");
    const [isPostalCodeValid, setIsPostalCodeValid] = useState(true);

    const handlePostalCodeChange = (e) => {
        const { value } = e.target;
        const regex = /^[0-9]{0,5}$/;
        if (regex.test(value)) {
            setPostalCode(value);
            setIsPostalCodeValid(value.length === 5);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isPostalCodeValid) {
            // Lógica para completar el pedido
            console.log("Formulario enviado");
        } else {
            console.log("Código postal no válido");
        }
    };

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
                        <input type="text" className="form-control" aria-label="First name" required />
                    </div>
                    <div className="col-3">
                        <label className="form-label">Número</label>
                        <input type="text" className="form-control" aria-label="First name" required />
                    </div>
                    <div className="col-3">
                        <label className="form-label">Apartamento</label>
                        <input type="text" className="form-control" placeholder="(Opcional)" aria-label="Last name" />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-5">
                        <label className="form-label">País</label>
                        <select className="form-select" required>
                            <option value="">Escoger...</option>
                            <option value="1">...</option>
                        </select>
                    </div>
                    <div className="col-4">
                        <label className="form-label">Estado</label>
                        <select className="form-select" required>
                            <option value="">Escoger...</option>
                            <option value="1">...</option>
                        </select>
                    </div>
                    <div className="col-3">
                        <label className="form-label">Código postal</label>
                        <input 
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
                <div className="d-flex justify-content-between mb-5">
                    <Link className="text-decoration-none text-secondary" to="/cart">{"<"} Regresar al carrito</Link>
                    <button type="submit" className="btn btn-primary">Completar el pedido</button>
                </div>
            </form>
        </div>
    );
}
