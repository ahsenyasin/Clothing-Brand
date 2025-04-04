<<<<<<< HEAD
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
=======
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart, FiHeart } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/CartSlice';
import { addToWishlist, removeFromWishlist } from '../redux/WishlistSlice';
import { colors } from '../design-system';
>>>>>>> ec17d2a (Initial commit)

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useDispatch();
<<<<<<< HEAD

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
=======
  const wishlistItems = useSelector(state => state.wishlist);
  const isInWishlist = wishlistItems.some(item => item.id === product.id);

  const handleAddToCart = (e) => {
    e.preventDefault();
    dispatch(addToCart({ ...product, quantity: 1 }));
  };

  const toggleWishlist = (e) => {
    e.preventDefault();
    if (isInWishlist) {
      dispatch(removeFromWishlist(product.id));
    } else {
      dispatch(addToWishlist(product));
    }
>>>>>>> ec17d2a (Initial commit)
  };

  return (
    <div
<<<<<<< HEAD
      className="product-card"
=======
>>>>>>> ec17d2a (Initial commit)
      style={styles.card}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
<<<<<<< HEAD
      <Link to={`/product/${product.id}`} style={styles.link}>
=======
      <Link to={`/product/${product.id}`} style={styles.cardLink}>
>>>>>>> ec17d2a (Initial commit)
        <div style={styles.imageContainer}>
          <img
            src={product.image}
            alt={product.name}
            style={styles.image}
          />
<<<<<<< HEAD
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
=======
          {isHovered && (
            <div style={styles.overlay}>
>>>>>>> ec17d2a (Initial commit)
              <button
                style={styles.actionButton}
                onClick={handleAddToCart}
                aria-label="Add to cart"
              >
<<<<<<< HEAD
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
=======
                <FiShoppingCart size={18} />
                <span style={styles.actionText}>Add to Cart</span>
              </button>
              <button
                style={{
                  ...styles.wishlistButton,
                  color: isInWishlist ? colors.secondary : colors.dark
                }}
                onClick={toggleWishlist}
                aria-label={isInWishlist ? "Remove from wishlist" : "Add to wishlist"}
              >
                <FiHeart size={18} fill={isInWishlist ? colors.secondary : 'none'} />
              </button>
            </div>
          )}
          {product.discount && (
            <div style={styles.discountTag}>
              -{product.discount}%
            </div>
          )}
        </div>
        <div style={styles.content}>
          <h3 style={styles.title}>{product.name}</h3>
          <div style={styles.priceContainer}>
            <span style={styles.price}>Rs. {product.price.toLocaleString()}</span>
            {product.oldPrice && (
              <span style={styles.oldPrice}>Rs. {product.oldPrice.toLocaleString()}</span>
>>>>>>> ec17d2a (Initial commit)
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};
<<<<<<< HEAD
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
=======

const styles = {
  card: {
    backgroundColor: 'white',
    borderRadius: '4px',
    overflow: 'hidden',
    transition: 'transform 0.3s, box-shadow 0.3s',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    ':hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
    }
  },
  cardLink: {
>>>>>>> ec17d2a (Initial commit)
    textDecoration: 'none',
    color: 'inherit',
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
  },
  imageContainer: {
    position: 'relative',
<<<<<<< HEAD
    paddingBottom: '125%', // 4:5 aspect ratio
=======
    paddingTop: '133%', // 3:4 aspect ratio
>>>>>>> ec17d2a (Initial commit)
    overflow: 'hidden'
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
<<<<<<< HEAD
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
=======
    transition: 'transform 0.5s'
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: '15px',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    transform: 'translateY(0)',
    transition: 'transform 0.3s'
>>>>>>> ec17d2a (Initial commit)
  },
  actionButton: {
    display: 'flex',
    alignItems: 'center',
<<<<<<< HEAD
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
=======
    gap: '8px',
    backgroundColor: colors.primary,
    color: 'white',
    border: 'none',
    padding: '8px 15px',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
    transition: 'background-color 0.3s',
    ':hover': {
      backgroundColor: colors.secondary
    }
  },
  actionText: {
    fontWeight: 'bold'
  },
  wishlistButton: {
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '8px',
    borderRadius: '50%',
    transition: 'background-color 0.3s',
    ':hover': {
      backgroundColor: 'rgba(0,0,0,0.05)'
    }
  },
  discountTag: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    backgroundColor: colors.secondary,
    color: 'white',
    padding: '5px 10px',
    borderRadius: '4px',
    fontSize: '12px',
    fontWeight: 'bold'
  },
  content: {
    padding: '15px',
    display: 'flex',
    flexDirection: 'column',
    flex: 1
  },
  title: {
    fontSize: '16px',
    fontWeight: 'bold',
    margin: '0 0 10px 0',
    lineHeight: '1.3'
>>>>>>> ec17d2a (Initial commit)
  },
  priceContainer: {
    display: 'flex',
    alignItems: 'center',
<<<<<<< HEAD
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
=======
    gap: '10px'
  },
  price: {
    fontSize: '16px',
    fontWeight: 'bold',
    color: colors.primary
  },
  oldPrice: {
    fontSize: '14px',
    color: '#999',
    textDecoration: 'line-through'
>>>>>>> ec17d2a (Initial commit)
  }
};

export default ProductCard;
<<<<<<< HEAD
>>>>>>> 179e0b9 (commit)
=======
>>>>>>> ec17d2a (Initial commit)
