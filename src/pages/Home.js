import React from "react";
import HeroCarusel from "./HeroCarusel";
import "./Home.css";
import LogoSlider from "./LogoSlider";
import WorkSlider from "./WorkSlider";


function Home() {
  return (
    <>
      <HeroCarusel />
      <LogoSlider />
      <section className="py-5">
  <div className="container">
    <div className="row align-items-center"> {/* align-items-center i mban në një vijë horizontale në mes */}
      
      {/* Kolona e Tekstit (Majtas) */}
      <div className="col-lg-6 mb-4 mb-lg-0">
        <h6 className="text-primary fw-bold mb-2">// WEB DESIGN & DEVELOPMENT IN ALBANIA</h6>
        <h2 className="fw-bold mb-4">
          We are a Web Development and Social Media Marketing studio.
        </h2>
        <p className="text-secondary lh-lg">
          <span className="display-4 float-start me-2 text-primary">F</span>
          ocused on developing a quality service in the virtual world FIT aims to create a positive impact on your business. The FIT office is located in Tirana, Albania, and consists of a staff of ambitious young people who seek to develop their skills in the fields of digital services/marketing. The main goal of this staff is to serve its customers by fulfilling all the requirements they have.
        </p>
        
        {/* Ikonat poshtë tekstit */}
        <div className="row mt-5">
  {/* Kolona Experience */}
  <div className="col-md-6 mb-4">
    <div className="d-flex align-items-center mb-2">
      <i className="bi bi-award text-primary fs-1 me-3"></i>
      <h4 className="fw-bold mb-0">Experience</h4>
    </div>
    <hr className="my-3" style={{ width: '100%', borderTop: '2px solid #eee', opacity: 1 }} />
    <p className="text-secondary">
      Since 2010 we have won the trust of our customers some of whom have stayed with us for 12 years.
    </p>
  </div>

  
  <div className="col-md-6 mb-4">
    <div className="d-flex align-items-center mb-2">
      <i className="bi bi-gear text-primary fs-1 me-3"></i>
      <h4 className="fw-bold mb-0">Focus</h4>
    </div>
    <hr className="my-3" style={{ width: '100%', borderTop: '2px solid #eee', opacity: 1 }} />
    <p className="text-secondary">
      The main mechanism of our work focuses first on the wishes of the client and their implementation accurately.
    </p>
  </div>
</div>
</div>

     <div className="col-lg-6">
        <div className="position-relative">
          <img 
            src="/img17.png" 
            className="img-fluid rounded shadow-lg" 
          />
        </div>
      </div>

    </div>
  </div>
</section>
<section className="why-choose-us py-5 text-white" style={{ backgroundColor: '#1a1a3a' }}>
  <div className="container text-center py-5">
    <h6 className="text-primary fw-bold mb-2">// WHY CHOOSE US</h6>
    <h2 className="fw-bold mb-3">We are experts in Drupal and Wordpress CMS.</h2>
    <h2 className=" fw-bold mb-5">We are goal oriented and offer competetive pricing!</h2>

    <div className="row g-4 justify-content-center">
      {/* Kartat e Shërbimeve */}
      {[
        { title: "Web Design", icon: "bi-layout-text-sidebar-reverse", num: "01" },
        { title: "Development", icon: "bi-code-slash", num: "02" },
        { title: "Content Writing", icon: "bi-pen", num: "03" },
        { title: "Launch", icon: "bi-rocket-takeoff", num: "04" }
      ].map((item, index) => (
        <div key={index} className="col-lg-3 col-md-6">
          <div className="service-card p-4 h-100 position-relative">
            <span className="big-number">{item.num}</span>
            <h4 className="fw-bold mb-3 mt-4 text-start">{item.title}</h4>
            <p className="text-start small opacity-75">
              We work very closely with you before the design to make sure we're on the same page.
            </p>
            <div className="text-end mt-4">
              <i className={`bi ${item.icon} fs-2 text-white`}></i>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Seksioni i Statistikave poshtë (Imazhet me tekst sipër) */}
    <div className="row mt-5 g-0 rounded overflow-hidden">
      <div className="col-md-6 position-relative stat-box">
         <img src="/img17.png" className="img-fluid width-100 " />
         <div className="stat-overlay p-4 text-start">
          <h1 className="display-4 fw-bold">85+</h1>
          <h4 className="fw-bold">Project</h4>
          <p className="small">For years we have developed ambitious projects which continue to be active today.</p>
        </div>
        
      </div>
      <div className="col-md-6 position-relative stat-box">
        <img src="/img 19.jpg" className="img-fluid width-100 " />
        <div className="stat-overlay p-4 text-start">
          <h1 className="display-4 fw-bold">120+</h1>
          <h4 className="fw-bold">Customers</h4>
          <p className="small">Our wish is for all our customers to stay with us as long as possible.</p>
        </div>
      </div>
    </div>
  </div>
</section>
{/* --- FILLIMI I SEKSIONIT TË SHËRBIMEVE --- */}
<section className="py-5 bg-white">
  <div className="container text-center">
    <h6 className="text-primary fw-bold mb-2">// OUR SERVICE</h6>
    <h2 className="fw-bold mb-2 display-6">Your website is just the beginning,</h2>
    <h2 className="fw-bold mb-5 display-6">we will work to make your online presence top notch!</h2>

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

    
    <div className="mt-5">
  <a 
    href="/Services" 
    className="btn btn-info text-white px-5 py-3 fw-bold rounded-0 shadow-sm"
    style={{ backgroundColor: '#40bcf4', borderColor: '#40bcf4' }}
  >
    ALL SERVICES
  </a>
</div>
  </div>
</section>
{/* --- SEKSIONI CALL TO ACTION --- */}
<section className="py-5 position-relative text-center text-white" style={{
    backgroundImage: "url('/img20.jpg')", 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '100px 0'
}}>
  {/* Shtresa e zezë sipër fotos (Overlay) */}
  <div className="position-absolute top-0 start-0 w-100 h-100" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', zIndex: 1 }}></div>

  <div className="container position-relative" style={{ zIndex: 2 }}>
    <h6 className="text-info fw-bold mb-3">// GIVE IT A TRY, DON'T HESITATE</h6>
    <h1 className="display-4 fw-bold mb-5">
      Let us help you build your website and<br /> digital image!
    </h1>
    
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
<section className="py-5 bg-white text-dark">
        <div className="container">
          <div className="row">
            
            <div className="col-lg-8">
              
              <p className="text-primary fw-bold mb-1">//PORTFOLIO</p>
              
              <h2 className="display-5 fw-bold text-black d-inline-block p-2 mb-4">
               SIMPLE OF OUR WORK<br />
              </h2>

              <p className="text-muted lead mb-4">
               All of our websites are created by our talented team. Take a look at our web design portfolio below. You’ll find examples of work completed for many industries. </p>
            </div>
          </div>
        </div>
      </section>
      <WorkSlider />

      <section className="py-5 position-relative text-center text-white" style={{
    backgroundImage: "url('img1.jpg')", // Imazhi i zyrës në sfond
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '80px 0'
}}>
  {/* Overlay për ta bërë sfondin pak më të errët */}
  <div className="position-absolute top-0 start-0 w-100 h-100" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', zIndex: 1 }}></div>

  <div className="container position-relative" style={{ zIndex: 2 }}>
    <h6 className="text-info fw-bold mb-3">// TECHNOLOGIES</h6>
    <h2 className="fw-bold mb-5">We Deliver Solutions with<br /> the last technologies of the web</h2>

    <div className="row g-0 justify-content-center border border-light border-opacity-25">
      {/* Çdo kuti teknologjie */}
      {[
        { name: "PHP", icon: "bi-filetype-php" },
        { name: "HTML 5", icon: "bi-filetype-html" },
        { name: "JAVASCRIPT", icon: "bi-filetype-js" },
        { name: "CSS", icon: "bi-filetype-css" },
        { name: "BOOTSTRAP", icon: "bi-bootstrap" },
        { name: "CPANEL", icon: "bi-hdd-network" }
      ].map((tech, index) => (
        <div key={index} className="col-6 col-md-4 col-lg-2 border border-light border-opacity-25 p-4 d-flex flex-column align-items-center justify-content-center tech-box">
          <i className={`bi ${tech.icon} fs-1 mb-3 text-white`}></i>
          <span className="fw-bold small">{tech.name}</span>
        </div>
      ))}
    </div>
  </div>
</section>
<section className="py-5 bg-light">
  <div className="container text-center">
    <h6 className="text-primary fw-bold mb-2">// OUR BLOG</h6>
    <h2 className="fw-bold mb-5 text-dark">Stay in touch!</h2>

    <div className="row g-4 justify-content-center">
      {/* Karta 1: Drupal 9 */}
      <div className="col-lg-5 col-md-6">
        <div className="card border-0 shadow-sm h-100 text-start overflow-hidden">
          <div className="position-relative">
            <img src="/img9.jpg" className="card-img-top" alt="Drupal 9" />
            <span className="badge bg-info position-absolute start-0 bottom-0 ms-4 mb-0 rounded-0 px-3 py-2 text-uppercase fw-bold" style={{ transform: 'translateY(50%)' }}>
              Development
            </span>
          </div>
          <div className="card-body p-4 pt-5">
            <p className="text-muted small mb-2">_ February 12, 2021 _ Fit.Al</p>
            <h4 className="card-title fw-bold mb-4">What's New With Drupal 9?</h4>
            <a href="/BlogPost" className="text-info text-decoration-none fw-bold small">
              → LEARN MORE
            </a>
          </div>
        </div>
      </div>

      {/* Karta 2: WordPress */}
      <div className="col-lg-5 col-md-6">
        <div className="card border-0 shadow-sm h-100 text-start overflow-hidden">
          <div className="position-relative">
            <img src="/img8.png" className="card-img-top" alt="WordPress" />
            <span className="badge bg-info position-absolute start-0 bottom-0 ms-4 mb-0 rounded-0 px-3 py-2 text-uppercase fw-bold" style={{ transform: 'translateY(50%)' }}>
              Development
            </span>
          </div>
          <div className="card-body p-4 pt-5">
            <p className="text-muted small mb-2">_ November 21, 2019 _ Fit.Al</p>
            <h4 className="card-title fw-bold mb-4">Three Advantages of WordPress</h4>
            <a href="/BlogPost2" className="text-info text-decoration-none fw-bold small">
              → LEARN MORE
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


    </>
  );
}

export default Home;