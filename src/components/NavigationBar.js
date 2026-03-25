import React from "react";
import { Link } from "react-router-dom";
import "./NavigationBar.css"; // Sigurohu që stili të jetë në këtë file

function NavigationBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          FIT.AL
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About">About Us</Link>
            </li>
            
            {/* VETËM KY ELEMENT KA DROPDOWN-IN ME HOVER */}
            <li className="nav-item dropdown services-hover-item">
              <Link className="nav-link" to="/Services">
                Services
              </Link>
              <ul className="dropdown-menu shadow-sm">
                <li className="dropend-subitem">
                  <Link className="dropdown-item d-flex justify-content-between align-items-center" to="/WebDevelopment">
                    WEB DEVELOPMENT <i className="bi bi-caret-right-fill"></i>
                  </Link>
                  {/* Nën-menuja që hapet djathtas */}
                  <ul className="dropdown-submenu shadow-sm">
                    <li><Link className="dropdown-item" to="/MobileDevelopment">MOBILE APP DEVELOPMENT</Link></li>
                    <li><Link className="dropdown-item" to="/drupal">DRUPAL DEVELOPMENT</Link></li>
                    <li><Link className="dropdown-item" to="/wordpress">WORDPRESS DEVELOPMENT</Link></li>
                    <li><Link className="dropdown-item" to="/ecommerce">E-COMMERCE</Link></li>
                  </ul>
                </li>
                <li><Link className="dropdown-item" to="/web-design">WEB DESIGN</Link></li>
                <li><Link className="dropdown-item" to="/social-media">SOCIAL MEDIA</Link></li>
                <li><Link className="dropdown-item" to="/marketing">DIGITAL MARKETING</Link></li>
                <li><Link className="dropdown-item" to="/hosting">DOMAIN & HOSTING</Link></li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/Portfolio">Our Portfolio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Blog">Blog</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contacts</Link>
            </li>
            
            {/* Ikonat anash si në dizajnin tuaj */}
            <li className="nav-item ms-lg-3">
              <i className="bi bi-search cursor-pointer"></i>
            </li>
            <li className="nav-item ms-3">
              <i className="bi bi-grid-3x3-gap-fill cursor-pointer"></i>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;