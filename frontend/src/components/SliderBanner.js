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
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true
  };

  const bannerStyle = {
    width: '100%',
    height: 'auto',
    maxHeight: '600px',
    objectFit: 'cover'
  };

  return (
    <div className="slider-container" style={{ marginBottom: '30px', overflow: 'hidden' }}>
      <Slider {...settings}>
        <div>
          <img
            src={`${process.env.PUBLIC_URL}/images/banners/banner1.png`}
            alt="Summer Collection"
            style={bannerStyle}
          />
        </div>
        <div>
          <img
            src={`${process.env.PUBLIC_URL}/images/banners/banner2.png`}
            alt="New Arrivals"
            style={bannerStyle}
          />
        </div>
        <div>
          <img
            src={`${process.env.PUBLIC_URL}/images/banners/banner3.png`}
            alt="Special Offers"
            style={bannerStyle}
          />
        </div>
      </Slider>
    </div>
  );
};

export default SliderBanner;
