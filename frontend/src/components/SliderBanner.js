import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderBanner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src="/images/banner1.jpg" alt="Banner 1" />
        </div>
        <div>
          <img src="/images/banner2.jpg" alt="Banner 2" />
        </div>
      </Slider>
    </div>
  );
};

export default SliderBanner; // ✅ Fixed default export