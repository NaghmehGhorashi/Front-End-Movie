import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import style from "./Slick.module.css"
import banner1 from "../../../assets/banner1.jpg"
import banner2 from "../../../assets/banner2.jpg"
import banner3 from "../../../assets/banner3.jpg"
import banner4 from "../../../assets/banner4.jpg"
import banner5 from "../../../assets/banner5.jpg"
import { useState } from "react";

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,         
    infinite: true,       
    speed: 5000,          
    slidesToShow: 1,       
    slidesToScroll: 1,    
    autoplay: true,        
    autoplaySpeed: 300,
    arrows: false,  // Disables next and previous buttons
    beforeChange: (current, next) => setCurrentSlide(next),
    appendDots: dots => (
        <div>
            <ul className="flex justify-center gap-2 mt-2">{dots}</ul>
        </div>
    ),
    customPaging: i => (
      <div
        className={`w-2 h-2 rounded-full opacity-70 transition duration-300 ${
          i === currentSlide ? "bg-amber-500 opacity-100" : "bg-gray-400"
        }`}
      ></div>
    )
  };

  return (
    <Slider {...settings} >
        <div className="md:px-5"><img className="border-2 rounded-3xl h-50 md:h-150 border-amber-600 w-full" src={banner1} alt="Slide 1" /></div>
        <div className="md:px-5"><img className="border-2 rounded-3xl h-50 md:h-150 border-amber-600 w-full" src={banner2} alt="Slide 2" /></div>
        <div className="md:px-5"><img className="border-2 rounded-3xl h-50 md:h-150 border-amber-600 w-full" src={banner3} alt="Slide 3" /></div>
        <div className="md:px-5"><img className="border-2 rounded-3xl h-50 md:h-150 border-amber-600 w-full" src={banner4} alt="Slide 4" /></div>
        <div className="md:px-5"><img className="border-2 rounded-3xl h-50 md:h-150 border-amber-600 w-full" src={banner5} alt="Slide 5" /></div>
    </Slider>
  );
};

export default ImageSlider;





