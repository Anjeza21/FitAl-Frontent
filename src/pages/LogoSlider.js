import React from "react";
import Slider from "react-slick";
import "./LogoSlider.css";

const LogoSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,          // Shpejtësia e lëvizjes
    slidesToShow: 5,      // Sa logo të shihen njëherësh
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,     // 0 e bën lëvizjen e vazhdueshme (infinite flow)
    cssEase: "linear",    // Lëvizje e lëmuar pa ndalesa
    arrows: false,
    responsive: [         // Për ta bërë të duket mirë në celular
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 2 }
      }
    ]
  };

  const logos = [
    "/logo1.png",
    "/logo2.png",
    "/logo3.png",
    "/logo4.png",
    "/logo5.png",
    "/logo6.png",
  ];

  return (
    <div className="container-fluid py-5 bg-light">
      <div className="container">
        <Slider {...settings}>
          {logos.map((logo, index) => (
            <div key={index} className="px-4">
              <img 
                src={logo} 
                alt={`Partner ${index}`} 
                className="img-fluid grayscale-filter" 
                style={{ maxHeight: "60px", opacity: "0.6" }}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default LogoSlider;