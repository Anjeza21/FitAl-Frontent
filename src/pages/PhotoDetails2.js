import React from "react";
import "./PhotoDetails.css";

function PhotoDetails() {
  return (
    <section className="project-details py-5">
      <div className="container">
        <div className="row">
          
          
          <div className="col-lg-7 mb-4 mb-lg-0">
            <div className="project-main-img shadow-sm rounded bg-white p-3">
              <img 
                src="/img13.png" 
                className="img-fluid" 
                alt="Project Dashboard" 
              />
            </div>
          </div>

          {/* Kolona e Djathtë: Detajet e Projektit */}
          <div className="col-lg-5 ps-lg-5">
            <h1 className="fw-bold mb-4 display-5">Project details</h1>
            
            {/* Karta 1: Project Name */}
            <div className="detail-card mb-4 d-flex align-items-center justify-content-between p-4 shadow-sm bg-white">
              <div>
                <h4 className="fw-bold mb-1">Project Name</h4>
                <p className="text-muted mb-0">World English Institute</p>
              </div>
              <div className="icon-box">
                <i className="bi bi-database-fill text-white fs-3"></i>
              </div>
            </div>

            {/* Karta 2: Client */}
            <div className="detail-card mb-4 d-flex align-items-center justify-content-between p-4 shadow-sm bg-white">
              <div>
                <h4 className="fw-bold mb-1">Client</h4>
                <p className="text-muted mb-0">World English Institute</p>
              </div>
              <div className="icon-box">
                <i className="bi bi-person-fill text-white fs-3"></i>
              </div>
            </div>

            {/* Karta 3: Technology */}
            <div className="detail-card mb-4 d-flex align-items-center justify-content-between p-4 shadow-sm bg-white">
              <div>
                <h4 className="fw-bold mb-1">Technology:</h4>
                <p className="text-muted mb-0">Wordpress</p>
              </div>
              <div className="icon-box">
                <i className="bi bi-code-slash text-white fs-3"></i>
              </div>
            </div>

            {/* Karta 4: Website */}
            <div className="detail-card mb-4 d-flex align-items-center justify-content-between p-4 shadow-sm bg-white">
              <div>
                <h4 className="fw-bold mb-1">Webiste:</h4>
                <a href="https://worldenglishinstitute.net/" className="text-decoration-none text-muted">https://worldenglishinstitute.net</a>
              </div>
              <div className="icon-box">
                <i className="bi bi-laptop text-white fs-3"></i>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default PhotoDetails;