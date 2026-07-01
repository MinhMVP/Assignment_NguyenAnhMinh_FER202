import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import EditProduct from './components/EditProduct';

function App() {
  const [products, setProducts] = useState([]);

  return (
    <Router>
      <div className="container mt-4 mb-5" style={{ maxWidth: '1200px' }}>
        <h1 className="text-center mb-5 text-uppercase fw-bold text-white">
          Product List
        </h1>
        <Routes>
          <Route 
            path="/" 
            element={<ProductList products={products} setProducts={setProducts} />} 
          />
          <Route 
            path="/product/:id" 
            element={<ProductDetail products={products} />} 
          />
          <Route 
            path="/edit/:id" 
            element={<EditProduct products={products} setProducts={setProducts} />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;