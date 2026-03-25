import React, { useState } from "react";
import axios from "axios";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone) {
      alert("Please fill all required fields");
      return;
    }

    try {
      setLoading(true);
      await axios.post("http://localhost:5000/api/contact", formData);
      alert("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (err) {
      alert("Error sending message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <section className="pjesa1">
          <h1>Contact</h1>
      </section>
  <div className="contact-page">

    <div className="contact-hero d-flex align-items-center">
      
      
    </div>

    <div className="container py-5">
      <div className="row">
       <div className="container py-5">
  <div className="row">

    <div className="col-lg-5">
  <h6 className="text-primary fw-bold mb-2">// CONTACT DETAILS</h6>
  <h1 className="fw-bold mb-5">Contact us</h1>

  {/* Adresa */}
  <div className="d-flex align-items-center mb-4">
    <div className="icon-circle bg-light text-primary me-3 shadow-sm d-flex align-items-center justify-content-center" style={{width: '50px', height: '50px', borderRadius: '50%'}}>
      <i className="bi bi-globe2 fs-4"></i>
    </div>
    <div>
      <h6 className="fw-bold mb-0">Our Address:</h6>
      <p className="text-muted mb-0">Artan Lenja, Tirane, Albania</p>
    </div>
  </div>

  {/* Email */}
  <div className="d-flex align-items-center mb-4">
    <div className="icon-circle bg-light text-primary me-3 shadow-sm d-flex align-items-center justify-content-center" style={{width: '50px', height: '50px', borderRadius: '50%'}}>
      <i className="bi bi-envelope-fill fs-4"></i>
    </div>
    <div>
      <h6 className="fw-bold mb-0">Our Email:</h6>
      <p className="text-muted mb-0">info@fit.al</p>
    </div>
  </div>

  {/* Telefoni */}
  <div className="d-flex align-items-center mb-5">
    <div className="icon-circle bg-light text-primary me-3 shadow-sm d-flex align-items-center justify-content-center" style={{width: '50px', height: '50px', borderRadius: '50%'}}>
      <i className="bi bi-telephone-fill fs-4"></i>
    </div>
    <div>
      <h6 className="fw-bold mb-0">Our Phone:</h6>
      <p className="text-muted mb-0">+355 67 45 29 292</p>
    </div>
  </div>

  <h6 className="text-primary fw-bold mb-2">// SOCIAL MEDIA</h6>
  <h2 className="fw-bold mb-4">Follow us</h2>
  <div className="d-flex gap-2">
    <a href="#" className="btn btn-primary rounded-1"><i className="bi bi-facebook"></i></a>
    <a href="#" className="btn btn-primary rounded-1"><i className="bi bi-linkedin"></i></a>
    <a href="#" className="btn btn-dark rounded-1"><i className="bi bi-instagram"></i></a>
  </div>
</div>

    <div className="col-lg-7">
      <div className="contact-box p-4 bg-dark rounded">
        <h3 className="text-white mb-3">
          Ready To Get Started?
        </h3>

        <form onSubmit={handleSubmit}>
          <input
            className="form-control mb-3"
            placeholder="Your Name *"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            className="form-control mb-3"
            placeholder="Your Email *"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            className="form-control mb-3"
            placeholder="Phone *"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />

          <textarea
            className="form-control mb-3"
            placeholder="Message..."
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
          />

          <button className="btn btn-light fw-bold w-100">
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>

</div>
    </div>
      </div>
    </div>

   <div className="whatsapp-float" style={{position: 'fixed', bottom: '20px', right: '20px', zIndex: '1000', display: 'flex', alignItems: 'center'}}>
  <span className="bg-white px-3 py-1 shadow-sm rounded me-2 small d-none d-md-inline">Chat With Us!</span>
  <a href="https://wa.me/355674529292" target="_blank" rel="noreferrer">
    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" style={{width: '60px', height: '60px'}} />
  </a>
</div>

    <div className="map-section">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d11984.573788268306!2d19.7970504!3d41.327494!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x1350319c8084201b%3A0x9630ae469977e7f2!2sFit.al%20Albanian%20Web%20Design%20%26%20Drupal%20Development%2C%20Rruga%20Frosina%20Plaku%20Tirana%2C%201023%2C%20Albania!3m2!1d41.327494!2d19.7970504!5e0!3m2!1sen!2s!4v1771692759941!5m2!1sen!2s"
        height="450"
        width="100%"
        style={{ border: 0 }}
        loading="lazy"
        title="map"
      ></iframe>
    </div>

  </div>
  </>
);
}

export default Contact;