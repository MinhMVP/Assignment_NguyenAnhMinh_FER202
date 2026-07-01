import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ProductList = ({ products, setProducts }) => {
  const [formData, setFormData] = useState({ name: '', description: '', price: '', currentPrice: '' });
  const [error, setError] = useState(null);

  useEffect(() => {
    if (products.length === 0) {
      axios.get('/src/assets/data.json')
        .then(response => {
          setProducts(response.data.products);
        })
        .catch(err => {
          setError("Failed to fetch data from API!");
        });
    }
  }, [products.length, setProducts]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    const newProduct = {
      id: Date.now().toString(),
      name: formData.name,
      description: formData.description,
      price: formData.price,
      currentPrice: formData.currentPrice,
      image: 'laptop1.png'
    };
    
    setProducts([...products, newProduct]);
    setFormData({ name: '', description: '', price: '', currentPrice: '' });
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      setProducts(products.filter(p => p.id !== id));
    }
  };

  if (error) return <h3 className="text-danger text-center mt-5">{error}</h3>;

  return (
    <div>
      {/* Form Add Product */}
      <div className="card text-white mb-4 p-4" style={{ background: 'transparent' }}>
        <h2 className="text-center mb-4 fw-bold">Add Product</h2>
        <form onSubmit={handleAddProduct}>
          <div className="row mb-3 align-items-center">
            <div className="col-md-2 text-md-end"><label className="fs-5">Name:</label></div>
            <div className="col-md-10"><input type="text" className="form-control" name="name" value={formData.name} onChange={handleInputChange} required /></div>
          </div>
          <div className="row mb-3 align-items-center">
            <div className="col-md-2 text-md-end"><label className="fs-5">Description:</label></div>
            <div className="col-md-10"><input type="text" className="form-control" name="description" value={formData.description} onChange={handleInputChange} required /></div>
          </div>
          <div className="row mb-3 align-items-center">
            <div className="col-md-2 text-md-end"><label className="fs-5">Price:</label></div>
            <div className="col-md-10"><input type="text" className="form-control" name="price" value={formData.price} onChange={handleInputChange} required /></div>
          </div>
          <div className="row mb-3 align-items-center">
            <div className="col-md-2 text-md-end"><label className="fs-5">Current Price:</label></div>
            <div className="col-md-10"><input type="text" className="form-control" name="currentPrice" value={formData.currentPrice} onChange={handleInputChange} required /></div>
          </div>
          <div className="text-center mt-4">
            <button type="submit" className="btn text-white px-5 py-2 fs-5" style={{ backgroundColor: '#6f42c1', border: 'none' }}>Add Product</button>
          </div>
        </form>
      </div>

      <hr className="text-white border-2 opacity-50 my-4" />

      {/* Product List Table */}
      <h2 className="text-center text-white py-3 mb-0 fw-bold" style={{ background: 'transparent' }}>Product List</h2>
      
      {products.length === 0 ? (
        <div className="text-center p-5 text-white fs-4" style={{ background: 'transparent' }}>No products found.</div>
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered align-middle text-center mb-5" style={{ backgroundColor: '#ffffff', color: '#000000' }}>
            <thead className="table-dark">
              <tr>
                <th style={{ width: '5%' }}>#</th>
                <th style={{ width: '20%' }}>Name</th>
                <th style={{ width: '40%' }}>Description</th>
                <th style={{ width: '10%' }}>Price</th>
                <th style={{ width: '15%' }}>Current Price</th>
                <th style={{ width: '10%' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p, index) => (
                <tr key={p.id}>
                  <td className="fw-bold">{index + 1}</td>
                  <td className="text-start">
                    <Link to={`/product/${p.id}`} className="text-decoration-none text-dark fs-6 text-uppercase">
                      {p.name}
                    </Link>
                  </td>
                  <td className="text-start text-secondary">{p.description}</td>
                  <td><del>{p.price} ₫</del></td>
                  <td>{p.currentPrice} ₫</td>
                  <td>
                    <div className="d-flex flex-column gap-2 align-items-center px-2">
                      <button className="btn btn-sm w-100 text-white fw-bold" style={{ backgroundColor: '#e50914' }} onClick={() => handleDelete(p.id)}>Delete</button>
                      <Link to={`/edit/${p.id}`} className="btn btn-sm w-100 text-white fw-bold" style={{ backgroundColor: '#e50914' }}>Edit</Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ProductList;