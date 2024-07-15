import CheckoutInfoCliente from "./CheckoutInfoClient"
import CheckoutSummary from "./CheckoutSummary"
export default function Checkout() {

    return (
        <div>
            <div class="container mt-5">
                <div class="row align-items-start">
                    <div class="col-md-8 ">
                        <CheckoutInfoCliente/>
                    </div>
                    <div class="col-md-4 ">
                        <CheckoutSummary/>
                    </div>
                </div>
            </div>
        </div>
    )
}