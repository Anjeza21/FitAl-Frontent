import React from 'react';


const Footer = () => {
  return (
    <footer className="text-white pt-5 pb-3" style={{ backgroundColor: '#1a163a' }}>
      <div className="container text-center">
        
        
        <div className="mb-5">
          <img src="/img7.jpg" alt="FIT.al" style={{ maxWidth: '150px' }} />
        </div>

        
        <div className="row justify-content-center g-4 mb-5">
          
      
          <div className="col-md-4 col-lg-3">
            <div className="border border-secondary rounded p-4 h-100">
              <i className="bi bi-globe text-primary fs-2 mb-3 d-block"></i>
              <h6 className="text-primary fw-bold">Artan Lenja, Tirane, Albania</h6>
              <small className="text-secondary">Our Address</small>
            </div>
          </div>

          
          <div className="col-md-4 col-lg-3">
            <div className="border border-secondary rounded p-4 h-100">
              <i className="bi bi-envelope text-primary fs-2 mb-3 d-block"></i>
              <h6 className="text-primary fw-bold">info@fit.al</h6>
              <small className="text-secondary">Our Email</small>
            </div>
          </div>

         
          <div className="col-md-4 col-lg-3">
            <div className="border border-secondary rounded p-4 h-100">
              <i className="bi bi-telephone text-primary fs-2 mb-3 d-block"></i>
              <h6 className="text-primary fw-bold">+355 67 45 29 292</h6>
              <small className="text-secondary">Our Phone</small>
            </div>
          </div>

        </div>

        
        <div className="d-flex justify-content-center flex-wrap gap-4 mb-4">
          <a href="/" className="text-white text-decoration-none fw-bold hover-primary">Home</a>
          <a href="/services" className="text-white text-decoration-none fw-bold">Services</a>
          <a href="/portfolio" className="text-white text-decoration-none fw-bold">Portfolio</a>
          <a href="/blog" className="text-white text-decoration-none fw-bold">Blog</a>
          <a href="/contact" className="text-white text-decoration-none fw-bold">Contacts</a>
        </div>

        <div className="border-top border-secondary pt-3 mt-4">
          <p className="small text-secondary mb-0">
            Copyright Projekt Anjeza mars2026.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;