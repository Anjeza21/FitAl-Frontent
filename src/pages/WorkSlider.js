import React from "react";
import Slider from "react-slick";


const WorkSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 8000,          // Pak më ngadalë se logot sepse imazhet janë më të mëdha
    slidesToShow: 4,      // Shfaqim 4 projekte (si në foto)
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  const projects = [
    "/work1.png", // Sigurohu që emrat përputhen me fotot në folderin public
    "/work2.png",
    "/work3.png",
    "/work4.png",
    "/work5.png"
  ];

  return (
    <div className="container-fluid py-0 overflow-hidden"> 
      {/* py-0 sepse zakonisht këto slidera nuk duan hapësirë lart/poshtë */}
      <Slider {...settings}>
        {projects.map((img, index) => (
          <div key={index} className="px-1"> 
            {/* px-1 jep atë vijën e hollë ndarëse mes fotove */}
            <img 
              src={img} 
              alt={`Project ${index}`} 
              className="img-fluid" 
              style={{ 
                width: "100%", 
                height: "300px", // Lartësia e fiksuar që të duken uniforme
                objectFit: "cover", // Kjo parandalon shtrembërimin e fotos
                opacity: "1" // Pa transparencë, ngjyra të plota
              }} 
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default WorkSlider;