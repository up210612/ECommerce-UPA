import React from 'react';
import ProductDetails from './ProductDetails';
import ProductItem from './ProductItem';
import ButtonAppBar from '../Navbar/Navbar';
import ProductList from '../Home/HomeComponents/ProductList';

const ProductPage = ({ product }) => {
  return (
    <div>
            <ButtonAppBar/>
            <div className="container mt-99">
                <div className="row align-items-start">
                    <div className="col-md-8 ">
                        <ProductItem/>
                        <p></p>
                    </div>
                    <div className="col-md-4 ">
                        <ProductDetails/>
                    </div>
                    <div className='col-md-8'>
                        <ProductList/>
                    </div>
                </div>
            </div>
        </div>
  );
};

export default ProductPage;
