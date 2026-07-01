import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

const EditProduct = ({ products, setProducts }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({ name: '', description: '', price: '', currentPrice: '' });

  useEffect(() => {
    const product = products.find(p => p.id === id);
    if (product) {
      setFormData({
        name: product.name,
        description: product.description,
        price: product.price,
        currentPrice: product.currentPrice
      });
    }
  }, [id, products]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedList = products.map(p => 
      p.id === id ? { ...p, ...formData } : p
    );
    setProducts(updatedList);
    alert("Product updated successfully!");
    navigate(`/product/${id}`); 
  };

  return (
    <div className="card text-white p-5 mx-auto" style={{ maxWidth: '900px', background: 'transparent' }}>
      <h2 className="text-center mb-5 fw-bold">Edit Product</h2>
      <form onSubmit={handleUpdate}>
        <div className="row mb-4 align-items-center">
          <div className="col-md-3 text-md-end"><label className="fs-5">Name:</label></div>
          <div className="col-md-9">
            <input type="text" className="form-control fs-6 py-2" name="name" value={formData.name} onChange={handleInputChange} required />
          </div>
        </div>
        <div className="row mb-4 align-items-start">
          <div className="col-md-3 text-md-end mt-2"><label className="fs-5">Description:</label></div>
          <div className="col-md-9">
            <textarea className="form-control fs-6" name="description" value={formData.description} onChange={handleInputChange} rows="3" required></textarea>
          </div>
        </div>
        <div className="row mb-4 align-items-center">
          <div className="col-md-3 text-md-end"><label className="fs-5">Price:</label></div>
          <div className="col-md-9">
            <input type="text" className="form-control fs-6 py-2" name="price" value={formData.price} onChange={handleInputChange} required />
          </div>
        </div>
        <div className="row mb-4 align-items-center">
          <div className="col-md-3 text-md-end"><label className="fs-5">Current Price:</label></div>
          <div className="col-md-9">
            <input type="text" className="form-control fs-6 py-2" name="currentPrice" value={formData.currentPrice} onChange={handleInputChange} required />
          </div>
        </div>
        
        <div className="text-center mt-5 d-flex justify-content-center gap-3">
          <Link to={`/product/${id}`} className="btn text-white px-5 py-2 fs-5" style={{ backgroundColor: '#0d6efd', border: 'none' }}>Back Home</Link>
          <button type="submit" className="btn text-white px-5 py-2 fs-5" style={{ backgroundColor: '#e50914', border: 'none' }}>Save Product</button>
        </div>
      </form>
    </div>
  );
};

export default EditProduct;