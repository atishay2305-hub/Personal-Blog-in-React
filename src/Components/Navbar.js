import React, { useState } from 'react';
import './Navbar.css';

const Navbar = ({ onSectionChange, darkMode, toggleDarkMode }) => {
  return (
    <nav className={`navbar${darkMode ? ' dark' : ''}`}>
      <div className="navbar-left">
        <span className="navbar-title">Atishay Jain</span>
      </div>
      <div className="navbar-center">
        <button className="nav-btn" onClick={() => onSectionChange('home')}>Home</button>
        <button className="nav-btn" onClick={() => onSectionChange('education')}>Education</button>
        <button className="nav-btn" onClick={() => onSectionChange('experience')}>Experience</button>
        <button className="nav-btn" onClick={() => onSectionChange('contact')}>Contact</button>
      </div>
      <div className="navbar-right">
        <button className="toggle-btn" onClick={toggleDarkMode} aria-label="Toggle theme">
          {darkMode ? '🌙' : '☀️'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
