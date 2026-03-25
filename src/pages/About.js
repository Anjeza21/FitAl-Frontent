import React from "react";
import "./About.css";
import LogoSlider from "./LogoSlider";

function About() {
  return (
    <>
 <section className="pjesa1">
          <h1>ABOUT US</h1>
      </section>

      <section className="py-5 bg-white text-dark">
        <div className="container">
          <div className="row">
            
            <div className="col-lg-8">
              
              <p className="text-primary fw-bold mb-1">//ABOUT US</p>
              
              <h2 className="display-5 fw-bold text-black d-inline-block p-2 mb-4">
                Fit.al started its activity <br /> 12 years ago
              </h2>

              <p className="text-muted lead mb-4">
                We are a company which bases its activity on the development of web pages. After many successful and rapidly developing years, FIT started to develop services,  graphic design, server maintenance, digital marketing. One of the greatest values of our company is respect and appreciation towards the clients.
              </p>

              <p className="fst-italic fw-bold fs-5">
               Our goal is to help entities increase sales, reduce costs and improve customer service by creating a website that is in line with the principles and objectives of the work that delivers measurable results.
              </p>

            </div>
          </div>
        </div>
      </section>
      <LogoSlider />
      
<section className="services-section container-fluid px-0 py-5">
  <div className="container py-5">
    <div className="row align-items-center">
      
   
      <div className="col-lg-6 position-relative mb-5 mb-lg-0">
        <div className="blue-bg-accent"></div>
        <img 
          src="/img2.jpg" 
          alt="Work" 
          className="img-fluid rounded shadow position-relative z-1" 
          style={{ maxWidth: '90%' }}
        />
      </div>

      <div className="col-lg-6 text-white ps-lg-5">
        <p className="text-primary fw-bold small mb-2">// EXPERIENCE. EXECUTION. EXCELLENCE.</p>
        <h2 className="display-5 fw-bold mb-4">What We Actually Do</h2>
        
       
        <div className="d-flex gap-3 mb-4">
          <div className="service-icon"><i className="bi bi-file-earmark-code"></i></div>
          <div className="service-icon"><i className="bi bi-cpu"></i></div>
          <div className="service-icon"><i className="bi bi-braces"></i></div>
          <div className="service-icon"><i className="bi bi-layout-text-window"></i></div>
        </div>

        <h5 className="fw-bold text-white">PHP Website Development Services</h5>
        <p className="text-secondary small mb-4">
          Website is just the beginning, we will work to make your business the best. 
          Not only quality services for your business, but also the correctness of our work.
        </p>
        <a href="#" className="text-primary text-decoration-none fw-bold small">
          <i className="bi bi-arrow-right me-2"></i> LEARN MORE
        </a>
      </div>
    </div>
  </div>


  <div className="stats-bar mt-5">
    <div className="container py-5">
      <div className="row text-white text-center g-4">
        <div className="col-6 col-md-3">
          <h2 className="fw-bold">120+</h2>
          <p className="small mb-0"><span className="white-dot"></span> ACTIVE CLIENTS</p>
        </div>
        <div className="col-6 col-md-3 border-start-custom">
          <h2 className="fw-bold">85+</h2>
          <p className="small mb-0"><span className="white-dot"></span> PROJECTS DONE</p>
        </div>
        <div className="col-6 col-md-3 border-start-custom">
          <h2 className="fw-bold">55+</h2>
          <p className="small mb-0"><span className="white-dot"></span> PARTNERS</p>
        </div>
        <div className="col-6 col-md-3 border-start-custom">
          <h2 className="fw-bold">10</h2>
          <p className="small mb-0"><span className="white-dot"></span> TYPE OF SERVICES</p>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="py-5 bg-white text-dark">
        <div className="container">
          <div className="row">
            
            <div className="col-lg-8">
              
              <p className="text-primary fw-bold mb-1">//TECHNOLOGY INDEX</p>
              
              <h2 className="display-5 fw-bold text-black d-inline-block p-2 mb-4">
               Full-service <br /> web solutions
              </h2>

              <p className="text-muted lead mb-4">
               Don’t worry if you haven’t fully formed your ideas before sitting down to talk. That’s why we’re here!
              </p>
            </div>
          </div>
        </div>
      </section>

              <div className="col-lg-6 position-relative mb-5 mb-lg-0">
        <img 
          src="/img5.jpg" 
          className="img-fluid rounded shadow position-relative z-1" 
          style={{ maxWidth: '90%' }}
        />
      </div>
      
      
      </>
       );
}

export default About;