
export default function CheckoutSummary(){

    return (
        <div className="container mh-50 bg-secondary text-white p-3 overflow-auto" style={{height: "420px"}}>
            <div className="row mb-2">
                <h3>Resumén</h3>
            </div>
            <div className="d-flex justify-content-between mb-2">
                <p>Subtotal</p>
                <p>$20</p>
            </div>
            <div className="d-flex justify-content-between mb-2">
                <p>Envío</p>
                <p>-</p>
            </div>
            <div className="d-flex justify-content-between mb-2">
                <p>Impuestos</p>
                <p>-</p>
            </div>
            <hr className="border-3 mb-3"></hr>

            <div className="d-flex justify-content-between mb-2">
                <p>Código de descuento</p>
            </div>
            <div className="row mb-2">
                <div className="col-sm-8 mb-2" type="text" aria-label="promo">
                    <input type="text" className="form-control" aria-label="promo"></input>
                </div>
                <div className="col-sm-4 mb-2" type="text" aria-label="promo">
                    <button type="button" className="btn btn-primary">Aplicar</button>
                </div>
            </div>

            <hr className="border-3 mb-3"></hr>
            <div className="d-flex justify-content-between">
                <p>Total</p>
                <p>$20</p>
            </div>
        </div>
    )
}