import React from 'react';
import ProductPage from '../ProductPage/ProductPage'; // Ajusta la ruta según tu estructura
import 'bootstrap/dist/css/bootstrap.min.css';

const exampleProduct = {
  title: 'Titulo del producto',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  price: '20.00',
};

function App() {
  return (
    <div className="App">
      <ProductPage product={exampleProduct} />
    </div>
  );
}

export default App;


