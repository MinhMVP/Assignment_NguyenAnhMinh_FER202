import React, { useState, useEffect, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setTotalCount } from './redux/productSlice';

import Navbar from './components/Navbar';
import About from './components/About';
import ProductDetail from './components/ProductDetail';
import EditProduct from './components/EditProduct';

const ProductList = React.lazy(() => import('./components/ProductList'));

function App() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  // Bắn dữ liệu (dispatch) lên Redux Store mỗi khi mảng products thay đổi
  useEffect(() => {
    dispatch(setTotalCount(products.length));
  }, [products, dispatch]);

  return (
    <Router>
      <Navbar />
      <div className="container mt-4 mb-5" style={{ maxWidth: '1200px' }}>
        <Suspense fallback={<div className="text-center text-white mt-5 fs-4">Loading App...</div>}>
          <Routes>
            <Route path="/" element={<h2 className="text-center text-white mt-5">Welcome to Laptop Store Management!</h2>} />
            <Route path="/feature" element={<ProductList products={products} setProducts={setProducts} />} />
            <Route path="/about" element={<About />} />
            <Route path="/product/:id" element={<ProductDetail products={products} />} />
            <Route path="/edit/:id" element={<EditProduct products={products} setProducts={setProducts} />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;