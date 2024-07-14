import { Link } from "react-router-dom"

export default function CheckoutInfoCliente() {
    return (

        <div className="container">
            <form>

                <h3>Información Cliente</h3>
                <div class="mb-3">
                    <label class="form-label">Correo</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <hr className="border-2"></hr>
                <h3>Dirección de envío</h3>
                <div class="row mb-3">
                    <div class="col">
                        <label class="form-label">Primer nombre</label>
                        <input type="text" class="form-control"  aria-label="First name" />
                    </div>
                    <div class="col">
                        <label class="form-label">Apellidos</label>
                        <input type="text" class="form-control" aria-label="Last name" />
                    </div>
                </div>
                <div class="mb-3">
                    <label class="form-label">Empresa</label>
                    <input placeholder="Opcional" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="row mb-3">
                    <div class="col-6">
                        <label class="form-label">Calle</label>
                        <input type="text" class="form-control" aria-label="First name" />
                    </div>
                    <div class="col-3">
                        <label class="form-label">Número</label>
                        <input type="text" class="form-control" aria-label="First name" />
                    </div>
                    <div class="col-3">
                        <label class="form-label">Apartamento</label>
                        <input type="text" class="form-control" placeholder="(Opcional)" aria-label="Last name" />
                    </div>
                </div>
                <div class="row mb-3">
                    <div class="col-5">
                        <label class="form-label">País</label>
                        <select  class="form-select">
                            <option selected>Escoger...</option>
                            <option>...</option>
                        </select>
                    </div>
                    <div class="col-4">
                        <label class="form-label">Estado</label>
                        <select  class="form-select">
                            <option selected>Escoger...</option>
                            <option>...</option>
                        </select>
                    </div>
                    <div class="col-3">
                        <label class="form-label">Código postal</label>
                        <input type="text" class="form-control" aria-label="código postal" required/>
                    </div>
                </div>
                <hr className="border-2"></hr>
                <div className="d-flex justify-content-between mb-5">
                    <Link className="text-decoration-none text-secondary" to="#">{"<"} Regresar al carrito</Link>
                    <button type="submit" class="btn btn-primary">Completar el pedido</button>
                </div>
            </form>
        </div>
    )
}