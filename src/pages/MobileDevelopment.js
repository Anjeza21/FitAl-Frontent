import React from "react";
import "./About.css";

function MobileDevelopment() {
  return (
    <>
      {/* Seksioni i Titullit Hero */}
      <section className="pjesa1">
        <div className="container">
          <h1>Mobile App Development</h1>
        </div>
      </section>
      {/* SEKSIONI 1: Work with a Mobile App Specialist */}
<section className="py-5 bg-white">
  <div className="container">
    <div className="row align-items-center">
      {/* Imazhi Majtas */}
      <div className="col-lg-6 mb-4 mb-lg-0">
        <div className="position-relative text-center">
          <img 
            src="/img24.png" 
            alt="Mobile App Specialist" 
            className="img-fluid"
          />
        </div>
      </div>
      
      {/* Teksti Djathtas */}
      <div className="col-lg-6">
        <h6 className="text-primary fw-bold mb-2">// MOBILE APP</h6>
        <h2 className="fw-bold mb-4">Work with a Mobile App specialist</h2>
        <p className="text-secondary lh-lg">
          Incode has primarily focused on one thing for 15 years, and that is SaaS and mobile app development for ourselves and our clients. We have developed, marketed, sold, scaled, and done anything you can think of in SaaS and mobile apps. So, if you are developing a product or a mobile app, work with a company that has developed 7 successful SaaS products in a row.
        </p>
      </div>
    </div>
  </div>
</section>

{/* Seksioni që shton screenshot-in si imazh të thjeshtë */}
<section className="bg-white">
  <div className="container-fluid p-0"> {/* container-fluid p-0 bën që fotoja të zërë të gjithë gjerësinë nëse dëshiron */}
    <div className="row g-0">
      <div className="col-12">
        <img 
          src="/img25.png" 
          alt="FIT.AL Mobile Showcase" 
          className="img-fluid w-100" 
          style={{ 
            display: 'block',
            marginTop: '-1px' // Ky rregull heq çdo vijë të hollë që mund të krijohet midis seksioneve
          }} 
        />
      </div>
    </div>
  </div>
</section>
{/* Seksioni i ri me screenshot-in e FIT.AL */}
<section className="bg-white p-0 overflow-hidden">
  <div className="container-fluid p-0">
    <div className="row g-0">
      
    </div>
  </div>
</section>

{/* Vazhdimi: Seksioni i Mobile Apps Developed */}
<section className="py-5 bg-white">
  <div className="container text-center">
    <h6 className="text-primary fw-bold mb-2">// MOBILE DEVELOPMENT</h6>
    <h2 className="fw-bold mb-4">Mobile Apps Developed</h2>
    <p className="text-secondary mx-auto mb-5" style={{ maxWidth: '900px' }}>
      We have developed several Health and Fitness Apps, Payments/UPI Apps, News Apps...
    </p>
    
    <div className="row g-4 justify-content-center">
      {/* Shto imazhet e projekteve këtu si në dizajnin tënd */}
      <div className="col-md-4">
        <img src="/img12.png" className="img-fluid shadow-sm rounded" alt="Project 1" />
      </div>
      <div className="col-md-4">
        <img src="/img13.png" className="img-fluid shadow-sm rounded" alt="Project 2" />
      </div>
      <div className="col-md-4">
        <img src="/img14.png" className="img-fluid shadow-sm rounded" alt="Project 3" />
      </div>
    </div>
  </div>
</section>
<section className="py-5 bg-white">
  <div className="container text-center">
    <h6 className="text-primary fw-bold mb-2">// A Continuous Evolution</h6>
    <h2 className="fw-bold mb-4">Enterprise Mobile App Development</h2>
    
    <div className="row g-4 justify-content-center">
      {/* Shto imazhet e projekteve këtu si në dizajnin tënd */}
      <div className="col-md-4">
        <img src="/img26.png" className="img-fluid shadow-sm rounded" alt="Project 1" />
      </div>
      <div className="col-md-4">
        <img src="/img27.png" className="img-fluid shadow-sm rounded" alt="Project 2" />
      </div>
      <div className="col-md-4">
        <img src="/img28.png" className="img-fluid shadow-sm rounded" alt="Project 3" />
      </div>
    </div>
  </div>
</section>
<section className="why-choose-us py-5 text-white" style={{ backgroundColor: '#13a5de' }}>
  <div className="container text-center py-5">
    
    <h2 className="fw-bold mb-3">MANAGE YOUR BUSINESS FROM YOUR PHONE</h2>
    <h5 className=" mb-5">Get in touch with us today to discover how FIT can transform your idea into a fully functioning, crowd-pleasing app.</h5>
    <div className="row g-4 justify-content-center"></div>
    </div>
    <div className="mt-5 d-flex justify-content-center">
      <a 
        href="/Contact" 
        className="btn btn-info text-white px-5 py-3 fw-bold rounded-0 shadow-sm"
        style={{ backgroundColor: '#6f848b', borderColor: '#0c4863' }}
      >
        CONTACT US
      </a>
    </div>
  
</section>

    </>
  );
}

export default MobileDevelopment;

