import { Link } from "react-router-dom"

export default function CheckoutInfoCliente() {
    return (

        <div className="container">
            <form>

                <h3>Información Cliente</h3>
                <div className="mb-3">
                    <label className="form-label">Correo</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <hr className="border-2"></hr>
                <h3>Dirección de envío</h3>
                <div className="row mb-3">
                    <div className="col">
                        <label className="form-label">Primer nombre</label>
                        <input type="text" className="form-control"  aria-label="First name" />
                    </div>
                    <div className="col">
                        <label className="form-label">Apellidos</label>
                        <input type="text" className="form-control" aria-label="Last name" />
                    </div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Empresa</label>
                    <input placeholder="Opcional" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="row mb-3">
                    <div className="col-6">
                        <label className="form-label">Calle</label>
                        <input type="text" className="form-control" aria-label="First name" />
                    </div>
                    <div className="col-3">
                        <label className="form-label">Número</label>
                        <input type="text" className="form-control" aria-label="First name" />
                    </div>
                    <div className="col-3">
                        <label className="form-label">Apartamento</label>
                        <input type="text" className="form-control" placeholder="(Opcional)" aria-label="Last name" />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-5">
                        <label className="form-label">País</label>
                        <select  className="form-select">
                            <option selected>Escoger...</option>
                            <option>...</option>
                        </select>
                    </div>
                    <div className="col-4">
                        <label className="form-label">Estado</label>
                        <select  className="form-select">
                            <option selected>Escoger...</option>
                            <option>...</option>
                        </select>
                    </div>
                    <div className="col-3">
                        <label className="form-label">Código postal</label>
                        <input type="text" className="form-control" aria-label="código postal" required/>
                    </div>
                </div>
                <hr className="border-2"></hr>
                <div className="d-flex justify-content-between mb-5">
                    <Link className="text-decoration-none text-secondary" to="#">{"<"} Regresar al carrito</Link>
                    <button type="submit" className="btn btn-primary">Completar el pedido</button>
                </div>
            </form>
        </div>
    )
}