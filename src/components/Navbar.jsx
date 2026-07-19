import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  // Lấy giá trị tổng sản phẩm từ Redux Store
  const totalCount = useSelector((state) => state.product.totalCount);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark mb-4" style={{ backgroundColor: '#212529' }}>
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">💻 LaptopStore</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/feature">Products</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
          </ul>
          <span className="navbar-text text-white fw-bold">
            Total Products: <span className="badge bg-danger fs-6">{totalCount}</span>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;