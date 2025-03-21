import React from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiUser, FiShoppingCart } from 'react-icons/fi';
import './../App.css';

const Header = () => {
  return (
    <header className="header">
      <div className="top-bar">
        <p>Free Shipping on Orders Over Rs. 2500</p>
      </div>
      
      <nav className="nav-container">
        <div className="main-nav">
          <Link to="/" className="logo">GULAHMED</Link>
          
          <div className="search-container">
            <input 
              type="text" 
              placeholder="Search for outfits, fabrics, and more..." 
              className="search-input"
            />
            <FiSearch className="search-icon" />
          </div>

          <div className="nav-actions">
            <Link to="/account" className="nav-link">
              <FiUser /> Account
            </Link>
            <Link to="/cart" className="nav-link">
              <FiShoppingCart /> Cart (0)
            </Link>
          </div>
        </div>

        <div className="category-nav">
          <Link to="/women">Women</Link>
          <Link to="/men">Men</Link>
          <Link to="/kids">Kids</Link>
          <Link to="/new-arrivals">New Arrivals</Link>
          <Link to="/sale">Sale</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;