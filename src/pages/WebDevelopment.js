import React from "react";
import "./About.css";

function WebDevelopment() {
  return (
    <>
      {/* Seksioni i Titullit Hero */}
      <section className="pjesa1">
        <div className="container">
          <h1>Web Development</h1>
        </div>
      </section>
      
      {/* Seksioni kryesor me tekstin djathtas dhe foton majtas */}
      <section className="py-5">
        <div className="container">
          {/* Klasa flex-lg-row-reverse bën ndërrimin e vendeve në desktop */}
          <div className="row align-items-center flex-lg-row-reverse">
            
            {/* Kolona e Tekstit (do të dalë DJATHTAS) */}
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h6 className="text-primary fw-bold mb-2">// WEB Development</h6>
              <h2 className="fw-bold mb-4">
                WordPress Development
              </h2>
              <div className="text-secondary lh-lg">
                
                <p>
                 Sometimes WordPress just isn’t a perfect fit for a web project. In these instances, our development team uses PHP code, which is the backbone of all open source systems to create highly complex development projects for digital platforms that would simply require too many plugins for WordPress in order to achieve the same results. By approaching the development of this nature with a more simplistic and truly hand-crafted approach we can deliver highly functionally web platforms build on universally understandable code that our clients can rely on to drive their business for years to come.
                </p>
              </div>
              </div>
            

            {/* Kolona e Imazhit (do të dalë MAJTAS) */}
            <div className="col-lg-6">
              <div className="position-relative">
                <img 
                  src="/img21.png" 
                  className="img-fluid rounded shadow-lg" 
                  alt="Fit.Al Office"
                />
              </div>
            </div>

          </div> {/* Mbyllja e rreshtit (row) */}
        </div> {/* Mbyllja e container-it */}
      </section>

      <section className="py-5">
  <div className="container">
    {/* 'row' është i domosdoshëm që kolonat të qëndrojnë krah për krah */}
    <div className="row align-items-center">
      
      {/* Kolona e parë (Teksti) - Majtas */}
      <div className="col-lg-6 mb-4 mb-lg-0">
        <h6 className="text-primary fw-bold mb-2">// Web Development</h6>
        <h2 className="fw-bold mb-4">E-commerce</h2>
        <p className="text-secondary lh-lg">
          Our company also offers e-commerce services on the WordPress platform. 
          If your business needs an online shop which you can develop your services, 
          we can enable this in the best possible way by completing all the 
          requirements and functionalities of your business.
        </p>
      </div> {/* DUHET mbyllur këtu kolona e parë */}

      {/* Kolona e dytë (Imazhi) - Djathtas */}
      <div className="col-lg-6">
        <div className="position-relative">
          <img
            src="/img22.png"
            className="img-fluid rounded shadow-lg"
            alt="E-commerce service"
          />
        </div>
      </div>

    </div> {/* Mbyllja e 'row' */}
  </div> {/* Mbyllja e 'container' */}
</section>
{/* SEKSIONI: WordPress Services */}
<section className="py-5 bg-white">
  <div className="container text-center">
    {/* Titujt informativë */}
    <h6 className="text-info fw-bold mb-2">// WEB DEVELOPMENT</h6>
    <h2 className="fw-bold mb-4">WordPress Services</h2>
    
    <p className="text-secondary mx-auto mb-5" style={{ maxWidth: '850px' }}>
      The reason that millions of people worldwide have decided to publish and create their website with WordPress is simple. 
      WordPress offers several key advantages over other competing CMS platforms that are aimed at benefiting the platform's millions of users. 
      The main advantages and benefits WordPress offers website owners include:
    </p>

    {/* Rreshti me 5 kartat e shërbimeve */}
    <div className="row g-4 justify-content-center">
      
      {/* Kartela 1 */}
      <div className="col-lg-2 col-md-4 col-sm-6">
        <div className="card h-100 border-light shadow-sm p-3 text-center">
          <div className="rounded-circle bg-light d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '70px', height: '70px' }}>
            <i className="bi bi-diagram-3 text-primary fs-3"></i>
          </div>
          <h6 className="fw-bold small">1. Custom Website Development</h6>
        </div>
      </div>

      {/* Kartela 2 */}
      <div className="col-lg-2 col-md-4 col-sm-6">
        <div className="card h-100 border-light shadow-sm p-3 text-center">
          <div className="rounded-circle bg-light d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '70px', height: '70px' }}>
            <i className="bi bi-layout-text-window-reverse text-primary fs-3"></i>
          </div>
          <h6 className="fw-bold small">Custom Website Theme</h6>
        </div>
      </div>

      {/* Kartela 3 */}
      <div className="col-lg-2 col-md-4 col-sm-6">
        <div className="card h-100 border-light shadow-sm p-3 text-center">
          <div className="rounded-circle bg-light d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '70px', height: '70px' }}>
            <i className="bi bi-wordpress text-primary fs-3"></i>
          </div>
          <h6 className="fw-bold small">Custom WordPress Plugin</h6>
        </div>
      </div>

      {/* Kartela 4 */}
      <div className="col-lg-2 col-md-4 col-sm-6">
        <div className="card h-100 border-light shadow-sm p-3 text-center">
          <div className="rounded-circle bg-light d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '70px', height: '70px' }}>
            <i className="bi bi-credit-card-2-front text-primary fs-3"></i>
          </div>
          <h6 className="fw-bold small">E-commerce or Payment Integrations</h6>
        </div>
      </div>

      {/* Kartela 5 */}
      <div className="col-lg-2 col-md-4 col-sm-6">
        <div className="card h-100 border-light shadow-sm p-3 text-center">
          <div className="rounded-circle bg-light d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '70px', height: '70px' }}>
            <i className="bi bi-shield-lock text-primary fs-3"></i>
          </div>
          <h6 className="fw-bold small">WordPress Website Security</h6>
        </div>
      </div>

    </div>
  </div>
</section>
<section className="py-5">
  <div className="container">
    {/* 'row' është i domosdoshëm që kolonat të qëndrojnë krah për krah */}
    <div className="row align-items-center">
      
      {/* Kolona e parë (Teksti) - Majtas */}
      <div className="col-lg-6 mb-4 mb-lg-0">
        <h6 className="text-primary fw-bold mb-2">// Web Development</h6>
        <h2 className="fw-bold mb-4">Drupal Development</h2>
        <p className="text-secondary lh-lg">
          Drupal is a top platform for building large websites and web applications. It is a flexible system based on state-of-the-art technologies, such as Symfony and Twig framework components.

We have been using Drupal for over ten years. In 2012 we launched the first system build on Drupal. We love building websites using Drupal, because thanks to that, we can provide our customers with a lot of value at an affordable price. Drupal makes this possible thanks to a huge number of turnkey components.

Our methodology ensures the efficient delivery of small and large systems. You can explore some of our most interesting projects below. (projects in drupal)
        </p>

         <h2 className="fw-bold mb-4">Drupal Suport</h2>
        <p className="text-secondary lh-lg">
         Except for software development, we can also plan long-term goals and the architecture of Drupal-based systems. We recommend good solutions and reject ideas that do not benefit your businesses.
        </p>
      </div> {/* DUHET mbyllur këtu kolona e parë */}

      {/* Kolona e dytë (Imazhi) - Djathtas */}
      <div className="col-lg-6">
        <div className="position-relative">
          <img
            src="/img23.png"
            className="img-fluid rounded shadow-lg"
            alt="E-commerce service"
          />
        </div>
      </div>

    </div> {/* Mbyllja e 'row' */}
  </div> {/* Mbyllja e 'container' */}
</section>
<section className="why-choose-us py-5 text-white" style={{ backgroundColor: '#13a5de' }}>
  <div className="container text-center py-5">
    
    <h2 className="fw-bold mb-3">Work with us</h2>
    <h5 className=" mb-5">Since 2012, we’ve been leading the Tirane and Durres region in custom web development projects.
Our full-service approach ensures that we tackle your project holistically and take ownership of the results.
To learn more and get a free consultation, please contact us today.</h5>
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

export default WebDevelopment;