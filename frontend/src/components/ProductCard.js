<<<<<<< HEAD
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
=======
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FiHeart, FiShoppingCart, FiEye } from 'react-icons/fi';
import { colors, spacing } from '../design-system';
import { addToCart } from '../redux/CartSlice';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useDispatch();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();

    dispatch(addToCart({
      ...product,
      quantity: 1
    }));
  };

  const handleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // Wishlist functionality would be implemented here
    alert('Added to wishlist!');
  };

  return (
    <div
      className="product-card"
      style={styles.card}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`} style={styles.link}>
        <div style={styles.imageContainer}>
          <img
            src={product.image}
            alt={product.name}
            style={styles.image}
          />
          {product.discount && (
            <span style={styles.discountTag}>-{product.discount}%</span>
          )}

          <div style={{
            ...styles.hoverOverlay,
            opacity: isHovered ? 1 : 0
          }}>
            <div style={styles.actionButtons}>
              <button
                style={styles.actionButton}
                onClick={handleWishlist}
                aria-label="Add to wishlist"
              >
                <FiHeart />
              </button>
              <button
                style={styles.actionButton}
                onClick={handleAddToCart}
                aria-label="Add to cart"
              >
                <FiShoppingCart />
              </button>
              <Link
                to={`/product/${product.id}`}
                style={styles.actionButton}
                aria-label="Quick view"
              >
                <FiEye />
              </Link>
            </div>
            <button
              style={styles.quickShop}
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>

        <div style={styles.info}>
          <p style={styles.category}>{product.category}</p>
          <h3 style={styles.title}>{product.name}</h3>
          <div style={styles.priceContainer}>
            <p style={styles.price}>Rs. {product.price.toLocaleString()}</p>
            {product.originalPrice && (
              <p style={styles.originalPrice}>
                Rs. {product.originalPrice.toLocaleString()}
              </p>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};
>>>>>>> 179e0b9 (commit)

const styles = {
  card: {
    borderRadius: '8px',
    overflow: 'hidden',
<<<<<<< HEAD
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
=======
    backgroundColor: 'white',
    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
  },
  imageContainer: {
    position: 'relative',
    paddingBottom: '125%', // 4:5 aspect ratio
    overflow: 'hidden'
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.5s ease'
  },
  discountTag: {
    position: 'absolute',
    top: '10px',
    left: '10px',
    backgroundColor: colors.secondary,
    color: 'white',
    padding: '5px 10px',
    fontSize: '12px',
    fontWeight: 'bold',
    borderRadius: '4px',
    zIndex: 1
>>>>>>> 179e0b9 (commit)
  },
  hoverOverlay: {
    position: 'absolute',
    bottom: '0',
    left: '0',
    right: '0',
    padding: spacing.medium,
<<<<<<< HEAD
    backgroundColor: 'rgba(0,0,0,0.6)',
    opacity: '0',
    transition: 'opacity 0.3s ease',
    ':hover': {
      opacity: '1'
    }
  },
  quickView: {
=======
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    backgroundColor: 'rgba(255,255,255,0.9)',
    transform: 'translateY(0)',
    transition: 'opacity 0.3s ease',
    zIndex: 2
  },
  actionButtons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px'
  },
  actionButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    border: 'none',
    backgroundColor: 'white',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    cursor: 'pointer',
    color: colors.dark,
    transition: 'all 0.2s ease',
    ':hover': {
      backgroundColor: colors.secondary,
      color: 'white'
    }
  },
  quickShop: {
>>>>>>> 179e0b9 (commit)
    width: '100%',
    padding: spacing.small,
    backgroundColor: colors.secondary,
    color: 'white',
    border: 'none',
    borderRadius: '4px',
<<<<<<< HEAD
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
=======
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'background-color 0.2s',
    ':hover': {
      backgroundColor: '#d44436'
    }
  },
  info: {
    padding: spacing.medium,
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column'
  },
  category: {
    color: '#666',
    fontSize: '12px',
    textTransform: 'uppercase',
    marginBottom: '5px'
  },
  title: {
    fontSize: '16px',
    fontWeight: '500',
    marginBottom: spacing.small,
    lineHeight: 1.3
  },
  priceContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginTop: 'auto'
  },
  price: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: '16px'
  },
  originalPrice: {
    color: '#888',
    textDecoration: 'line-through',
    fontSize: '14px'
  },
  // Responsive styles
  '@media (max-width: 768px)': {
    imageContainer: {
      paddingBottom: '100%' // 1:1 aspect ratio on mobile
    },
    title: {
      fontSize: '14px'
    },
    price: {
      fontSize: '14px'
    }
  }
};

export default ProductCard;
>>>>>>> 179e0b9 (commit)
