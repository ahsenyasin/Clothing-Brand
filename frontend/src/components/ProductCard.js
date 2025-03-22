import { Link } from 'react-router-dom';
import { colors, spacing } from '../design-system';

const ProductCard = ({ product }) => (
  <div style={styles.card}>
    <Link to={`/product/${product.id}`} style={styles.link}>
      <div style={styles.imageContainer}>
        <img 
          src={product.image} 
          alt={product.name} 
          style={styles.image}
        />
        <div style={styles.hoverOverlay}>
          <button style={styles.quickView}>Quick View</button>
        </div>
      </div>
      
      <div style={styles.info}>
        <h3 style={styles.title}>{product.name}</h3>
        <p style={styles.price}>Rs. {product.price.toLocaleString()}</p>
      </div>
    </Link>
  </div>
);

const styles = {
  card: {
    borderRadius: '8px',
    overflow: 'hidden',
    transition: 'transform 0.3s ease',
    ':hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
    }
  },
  imageContainer: {
    position: 'relative',
    height: '300px'
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  hoverOverlay: {
    position: 'absolute',
    bottom: '0',
    left: '0',
    right: '0',
    padding: spacing.medium,
    backgroundColor: 'rgba(0,0,0,0.6)',
    opacity: '0',
    transition: 'opacity 0.3s ease',
    ':hover': {
      opacity: '1'
    }
  },
  quickView: {
    width: '100%',
    padding: spacing.small,
    backgroundColor: colors.secondary,
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  },
  info: {
    padding: spacing.medium,
    backgroundColor: 'white'
  },
  title: {
    fontSize: '1rem',
    marginBottom: spacing.small
  },
  price: {
    color: colors.secondary,
    fontWeight: 'bold'
  }
};

export default ProductCard;