// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container header-content">
        <Link to="/" className="logo">Shadow Blogs</Link>
        <nav className="nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/add" className="nav-link add-post-btn">Add Post</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;