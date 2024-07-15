import CheckoutInfoCliente from "./CheckoutInfoClient";
import CheckoutSummary from "./CheckoutSummary";
import ButtonAppBar from "../Navbar";
// import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
// import { useEffect } from "react";
// import { getProducts } from "../../slices/productSlice";

export default function Checkout() {
    // const products = useSelector((state) => state.product.list);
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     fetch('http://localhost:8080/all')
    //     .then(response => response.json())
    //     .then(data => dispatch(getProducts(data)))
    // },[dispatch])

    return (
        <div>
            <ButtonAppBar/>
            <div className="container mt-5">
                <div className="row align-items-start">
                    <div className="col-md-8 ">
                        <CheckoutInfoCliente/>
                    </div>
                    <div className="col-md-4 ">
                        <CheckoutSummary/>
                    </div>
                </div>
            </div>
        </div>
    )
}