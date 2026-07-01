import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ProductDetail = ({ products }) => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);

  if (!product) return <h2 className="text-center mt-5 text-danger">Product not found!</h2>;

  const getImageUrl = (imageName) => {
    return new URL(`../assets/${imageName}`, import.meta.url).href;
  };

  const parsePrice = (priceStr) => parseFloat(priceStr.replace(/\./g, ''));
  const originalPrice = parsePrice(product.price);
  const currentPrice = parsePrice(product.currentPrice);
  const discount = originalPrice > 0 ? Math.round(((originalPrice - currentPrice) / originalPrice) * 100) : 0;

  return (
    <div className="card text-white p-5 mx-auto" style={{ maxWidth: '900px', background: 'transparent' }}>
      <h3 className="text-center mb-4 fw-bold">{product.name}</h3>
      
      <div className="text-center mb-4">
        <img 
          src={getImageUrl(product.image)} 
          alt={product.name} 
          className="img-fluid bg-white p-3" 
          style={{ maxHeight: '350px', borderRadius: '4px' }} 
        />
      </div>
      
      <p className="text-center fs-5 mb-4">{product.description}</p>
      <h4 className="text-center mb-3 fw-normal">Price: <del>{product.price} ₫</del></h4>
      <h4 className="text-center mb-4 fw-normal">Current Price: {product.currentPrice} ₫</h4>
      <h4 className="text-center mb-5 fw-normal">Discount: {discount} %</h4>
      
      <div className="text-center d-flex justify-content-center gap-3">
        <Link to="/" className="btn text-white px-5 py-2 fs-5" style={{ backgroundColor: '#6f42c1', border: 'none' }}>Back Home</Link>
        <Link to={`/edit/${product.id}`} className="btn text-white px-5 py-2 fs-5" style={{ backgroundColor: '#e50914', border: 'none' }}>Edit</Link>
      </div>
    </div>
  );
};

export default ProductDetail;