import React from "react";
import "./TopBar.css";

function TopBar() {
  return (
    <div className="bg-dark text-white py-2">
      <div className="container d-flex justify-content-between align-items-center">

        {/* Social icons */}
        <div>
          <i className="bi bi-facebook me-3"></i>
          <i className="bi bi-instagram me-3"></i>
          <i className="bi bi-linkedin"></i>
        </div>

        {/* Contact */}
        <div>
          <span className="me-3">
            <i className="bi bi-telephone"></i> +355 67 45 29 292
          </span>
          <span>
            <i className="bi bi-envelope"></i> info@fit.al
          </span>
        </div>

      </div>
    </div>
  );
}



export default TopBar;
