

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

function Navbar({isDarkMode,setIsDarkMode}) {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  
    const toggleDarkMode = () => {
      setIsDarkMode(!isDarkMode);
    };
  
    const toggleMobileMenu = () => {
      setMobileMenuOpen(!isMobileMenuOpen);
    };
  
    return (
      <nav className={`py-4 border-b border-gold`}>
        <div className="container mx-auto flex justify-between items-center">
          <a href="/" className={`text-${isDarkMode ? 'white' : 'rose-900'} text-2xl font-semibold`}>
            My Website
          </a>
  
          {/* Mobile Menu Button (Hidden on Desktop) */}
          <button className="md:hidden text-rose-900" onClick={toggleMobileMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
  
          {/* Desktop Menu (Hidden on Mobile) */}
          <ul className={`md:flex ${isMobileMenuOpen ? 'block' : 'hidden'} space-x-4`}>
            <li>
              <a href="/" className={`text-${isDarkMode ? 'white' : 'rose-900'}`}>Home</a>
            </li>
            <li>
              <a href="/about" className={`text-${isDarkMode ? 'white' : 'rose-900'}`}>About</a>
            </li>
            <li>
              <a href="/services" className={`text-${isDarkMode ? 'white' : 'rose-900'}`}>Services</a>
            </li>
            <li>
              <a href="/portfolio" className={`text-${isDarkMode ? 'white' : 'rose-900'}`}>Portfolio</a>
            </li>
            <li>
              <a href="/contact" className={`text-${isDarkMode ? 'white' : 'rose-900'}`}>Contact</a>
            </li>
          </ul>
  
          {/* Social Media Icons */}
          <div className="hidden md:flex space-x-4">
            <a
              href="#"
              className={`text-${isDarkMode ? 'white' : 'rose-900'} transform hover:scale-110 transition-transform`}
            >
              <FontAwesomeIcon icon={faGoogle} size="lg" />
            </a>
            <a
              href="#"
              className={`text-${isDarkMode ? 'white' : 'rose-900'} transform hover:scale-110 transition-transform`}
            >
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
            <a
              href="#"
              className={`text-${isDarkMode ? 'white' : 'rose-900'} transform hover:scale-110 transition-transform`}
            >
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
          </div>
  
          {/* Dark/Light Mode Toggle */}
          <button className={`text-${isDarkMode ? 'white' : 'rose-900'} focus:outline-none`} onClick={toggleDarkMode}>
            <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} size="lg" />
          </button>
        </div>
      </nav>
    );
  }
  
  export default Navbar;
  