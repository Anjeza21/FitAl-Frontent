import React from "react";
import "./Services.css";

function Services() {
  return (
    <>
      
      <section className="pjesa1 text-center py-5 bg-light">
        <h1 className="fw-bold">Services</h1>
      </section>
      <section className="py-5 bg-white">
  <div className="container text-center">
    <h6 className="text-primary fw-bold mb-2">// OUR SERVICE</h6>
    <h2 className="fw-bold mb-2 display-6">We Offer a Wide
Variety of IT Services</h2>
    

    <div className="row g-5 mt-2">
      {/* Kolona 1: Web Design */}
      <div className="col-lg-4 col-md-6 text-start">
        <div className="d-flex align-items-start">
          <div className="me-3">
            <i className="bi bi-window-sidebar text-primary fs-1"></i>
          </div>
          <div>
            <h4 className="fw-bold mb-3">Web Design</h4>
            <p className="text-muted lh-base" style={{ fontSize: '0.95rem' }}>
              The first impression is always important in a business. Therefore we are creative to make sure that the design of your site attracts as many visitors as possible.
            </p>
          </div>
        </div>
      </div>

      {/* Kolona 2: Web Development */}
      <div className="col-lg-4 col-md-6 text-start">
        <div className="d-flex align-items-start">
          <div className="me-3">
            <i className="bi bi-phone text-primary fs-1"></i>
          </div>
          <div>
            <h4 className="fw-bold mb-3">Web Development</h4>
            <p className="text-muted lh-base" style={{ fontSize: '0.95rem' }}>
              Web development is one of the most important steps in implementing your ideas on a web page. In this step, your site will create a complete profile of the results you expect.
            </p>
          </div>
        </div>
      </div>

      {/* Kolona 3: Mobile Design */}
      <div className="col-lg-4 col-md-6 text-start">
        <div className="d-flex align-items-start">
          <div className="me-3">
            <i className="bi bi-display text-primary fs-1"></i>
          </div>
          <div>
            <h4 className="fw-bold mb-3">Mobile Design</h4>
            <p className="text-muted lh-base" style={{ fontSize: '0.95rem' }}>
              Nowadays 80% of internet users access sites through various smartphones. We can enable your business site to be accessed on any device.
            </p>
          </div>
        </div>
      </div>

      {/* Kolona 4: SEO */}
      <div className="col-lg-4 col-md-6 text-start">
        <div className="d-flex align-items-start">
          <div className="me-3">
            <i className="bi bi-search text-primary fs-1"></i>
          </div>
          <div>
            <h4 className="fw-bold mb-3">Search Engine Optimization</h4>
            <p className="text-muted lh-base" style={{ fontSize: '0.95rem' }}>
              Our professional SEO team will work with you to develop a comprehensive advanced plan integrating Social Media and targeting your audience.
            </p>
          </div>
        </div>
      </div>

      {/* Kolona 5: Digital Marketing */}
      <div className="col-lg-4 col-md-6 text-start">
        <div className="d-flex align-items-start">
          <div className="me-3">
            <i className="bi bi-graph-up-arrow text-primary fs-1"></i>
          </div>
          <div>
            <h4 className="fw-bold mb-3">Digital Marketing</h4>
            <p className="text-muted lh-base" style={{ fontSize: '0.95rem' }}>
              Anybody who is trying to learn to do digital marketing, is you have to niche yourself down into a specific industry.
            </p>
          </div>
        </div>
      </div>

      {/* Kolona 6: Social Media */}
      <div className="col-lg-4 col-md-6 text-start">
        <div className="d-flex align-items-start">
          <div className="me-3">
            <i className="bi bi-globe-americas text-primary fs-1"></i>
          </div>
          <div>
            <h4 className="fw-bold mb-3">Social Media</h4>
            <p className="text-muted lh-base" style={{ fontSize: '0.95rem' }}>
              Remember! Your audience itself is a valuable resource when it comes to finding awesome content. Promote your business on social media.
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
    </section>
    <section className="py-5 position-relative text-center text-white" style={{
    backgroundImage: "url('/img20.jpg')", 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '100px 0'
}}>
   
  <div className="container position-center" style={{ zIndex: 2 }}>
    <h6 className="text-info fw-bold mb-3">// // Drop us a line! We are here to answer your questions 24/7</h6>
    <h1 className="display-4 fw-bold mb-5">
     NEED A CONSULTATION?<br /> </h1>
    
    <div className="mt-4">
      <a 
        href="/Contact" 
        className="btn btn-info text-white px-5 py-3 fw-bold rounded-0 shadow-sm"
        style={{ backgroundColor: '#40bcf4', borderColor: '#40bcf4' }}
      >
        CONTACT US
      </a>
    </div>
  </div>
</section>
<section className="py-5 bg-light">
  <div className="container text-center">
    <h6 className="text-primary fw-bold mb-2">// OUR CLIENT</h6>
    <h2 className="fw-bold mb-5 text-dark">We are Trusted
15+ Countries Worldwide</h2>
</div>
    </section>
    <section className="testimonials-section py-5 bg-light">
  <div className="container">
    <div className="row g-4 justify-content-center">
      
      {/* Kartela 1: SoftTech */}
      <div className="col-lg-5 col-md-6">
        <div className="testimonial-card p-5 bg-white shadow-sm border-0 h-100">
          <div className="d-flex align-items-center mb-4">
            <div className="company-logo rounded-circle bg-light p-3 me-3 d-flex align-items-center justify-content-center" style={{ width: '70px', height: '70px' }}>
              <img src="/softtech-logo.png" alt="SoftTech" className="img-fluid" />
            </div>
            <div>
              <h5 className="fw-bold mb-0">SoftTech,</h5>
              <small className="text-muted">Manager of Company</small>
            </div>
          </div>
          <p className="text-muted small lh-lg">
            "Patience. Infinite patience. No shortcuts. Very well thought out and articulate communication. Clear milestones, deadlines and fast work. Even if the client is being careless. The best part...always solving problems with great original ideas!."
          </p>
        </div>
      </div>

      {/* Kartela 2: Moonkle LTD */}
      <div className="col-lg-5 col-md-6">
        <div className="testimonial-card p-5 bg-white shadow-sm border-0 h-100">
          <div className="d-flex align-items-center mb-4">
            <div className="company-logo rounded-circle bg-light p-3 me-3 d-flex align-items-center justify-content-center" style={{ width: '70px', height: '70px' }}>
              <img src="/moonkle-logo.png" alt="Moonkle" className="img-fluid" />
            </div>
            <div>
              <h5 className="fw-bold mb-0">Moonkle LTD,</h5>
              <small className="text-muted">Client of Company</small>
            </div>
          </div>
          <p className="text-muted small lh-lg">
            "Very well thought out and articulate communication. Clear milestones, deadlines and fast work. Patience. Infinite patience. No shortcuts. Even if the client is being careless. The best part...always solving problems with great original ideas!."
          </p>
        </div>
      </div>

    </div>
  </div>
</section>
      
    </>
  );
}

export default Services;