import React from "react";
import { Link } from "react-router-dom";


function Portfolio() {
  // Shto fushën 'url' për çdo foto në array
  const photos = [
   
     { id: 1, src: "/img12.PNG", url: "/PhotoDetails" },
    { id: 2, src: "/img13.PNG", url: "/PhotoDetails2" },
     { id: 3, src: "/img14.PNG", url: "/PhotoDetails3" },
  ];

  return (
    <>
    <section className="pjesa1">
          <h1>Our Portfolio</h1>
      </section>

    <section className="py-5">
      <div className="container">
        <p className="text-primary text-center fw-bold mb-1">//We develop with the end user in mind</p>
        <h2 className="text-center fw-bold mb-5">Browse our projects!</h2>
        
        <div className="row g-4">
  {photos.map((photo) => (
    <div key={photo.id} className="col-12 col-md-6 col-lg-4">
      <div className="gallery-item shadow-sm">
        <Link to={photo.url}>
          <img 
            
            src={photo.src} 
            
            
            alt={`Project ${photo.id}`} 
            className="img-fluid rounded gallery-img-effect" 
            style={{ 
              width: '100%', 
              height: '250px', 
              objectFit: 'cover',
              cursor: 'pointer'
            }} 
          />
        </Link>
      </div>
    </div>
  ))}

        </div>
      </div>
    </section>

    </>
  );
}

export default Portfolio;