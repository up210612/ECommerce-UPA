import React from 'react';
import ProductDetails from './ProductDetails';
import ProductItem from './ProductItem';
import ButtonAppBar from '../Navbar/Navbar';
import ProductList from '../Home/HomeComponents/ProductList';
import Footer from '../Footer/Footer';

const ProductPage = ({ product }) => {
  return (
    <div>
            <ButtonAppBar/>
            <div className="container mt-5">
                <div className="row align-items-start">
                    <div className="col-md-8 ">
                        <ProductItem/>
                    </div>
                    <div className="col-md-4 ">
                        <ProductDetails/>
                    </div>
                </div>
                <div className = "row align-items-start">
                    <div className='container mt-5'>
                        <ProductList/>
                    </div>
                    <div>
                        <Footer/>
                    </div>
                </div>
            </div>
        </div>
  );
};

export default ProductPage;
