import React, { useState } from 'react';
import './navbar.css';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Smooth scroll handler
  const handleScroll = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false); // Close menu on mobile
    }
  };

  return (
    <nav className={darkMode ? 'navbar dark' : 'navbar'}>
      <div className="logo">
        <h1>Harshit Garg</h1>
      </div>

      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <span onClick={() => handleScroll('#home')} className="navlink">Home</span>
        <span onClick={() => handleScroll('#about')} className="navlink">About</span>
        <span onClick={() => handleScroll('#qualifications')} className="navlink">Qualifications</span>
        <span onClick={() => handleScroll('#skills')} className="navlink">Skills</span>
        <span onClick={() => handleScroll('#project')} className="navlink">Projects</span>
        <span onClick={() => handleScroll('#contact')} className="navlink">Contact</span>
      </div>

      <div className="nav-buttons">
        <button 
          className="theme-btn"
          onClick={() => setDarkMode(!darkMode)}
        >
          <i className={darkMode ? 'fas fa-sun' : 'fas fa-moon'}></i>
        </button>

        <div 
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;