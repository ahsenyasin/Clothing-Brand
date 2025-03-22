import Slider from 'react-slick';
import { colors, spacing } from '../design-system';

const HeroBanner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true
  };

  return (
    <div style={styles.container}>
      <Slider {...settings}>
        <div style={styles.slide}>
          <img 
            src="/images/banner1.jpg" 
            alt="New Collection" 
            style={styles.image}
          />
          <div style={styles.content}>
            <h2 style={styles.title}>Spring 2024 Collection</h2>
            <button style={styles.cta}>Shop Now</button>
          </div>
        </div>
      </Slider>
    </div>
  );
};

const styles = {
  container: {
    marginTop: spacing.large
  },
  slide: {
    position: 'relative',
    height: '500px'
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  content: {
    position: 'absolute',
    top: '50%',
    left: '10%',
    transform: 'translateY(-50%)'
  },
  title: {
    color: colors.light,
    fontSize: '2.5rem',
    marginBottom: spacing.medium
  },
  cta: {
    backgroundColor: colors.secondary,
    color: 'white',
    padding: `${spacing.small} ${spacing.large}`,
    border: 'none',
    borderRadius: '25px',
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
    ':hover': {
      transform: 'scale(1.05)'
    }
  }
};

export default HeroBanner;