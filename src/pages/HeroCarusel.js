import React from "react";
import "./HeroCarusel.css";

function HeroCarusel() {
  return (
    <div
      id="heroCarousel"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
      data-bs-interval="4000"
    >
      <div className="carousel-inner">

        
        <div className="carousel-item active position-relative">
          <img src="/img1.jpg" className="d-block w-100 hero-img" alt="slide1" />
          <div className="hero-overlay"></div>

          <div className="hero-text container">
            <h5>// Variety of platforms</h5>
            <h1>DRUPAL & WORDPRESS DEVELOPMENT</h1>
            <p>We create modern and scalable websites for your business.</p>
          </div>
        </div>

        <div className="carousel-item active position-relative">
          <img src="/img2.jpg" className="d-block w-100 hero-img" alt="slide2" />
          <div className="hero-overlay"></div>

          <div className="hero-text container">
            <h5>// Digital solutions</h5>
            <h1>WEB DESIGN & UI/UX</h1>
            <p>Beautiful and responsive designs for every device.</p>
          </div>
        </div>

        
        <div className="carousel-item active position-relative">
          <img src="/img3.jpg" className="d-block w-100 hero-img" alt="slide3" />
          <div className="hero-overlay"></div>

          <div className="hero-text container">
            <h5>// Grow your business</h5>
            <h1>DIGITAL MARKETING</h1>
            <p>Boost your sales with powerful marketing strategies.</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default HeroCarusel;