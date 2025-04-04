import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FiTrash2, FiShoppingCart } from 'react-icons/fi';
import { removeFromWishlist, clearWishlist } from '../redux/WishlistSlice';
import { addToCart } from '../redux/CartSlice';
import { colors } from '../design-system';

const Wishlist = () => {
  const wishlistItems = useSelector(state => state.wishlist);
  const dispatch = useDispatch();

  const handleRemoveFromWishlist = (id) => {
    dispatch(removeFromWishlist(id));
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart({...product, quantity: 1}));
    dispatch(removeFromWishlist(product.id));
  };

  const handleClearWishlist = () => {
    dispatch(clearWishlist());
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>My Wishlist</h1>
        {wishlistItems.length > 0 && (
          <button
            style={styles.clearButton}
            onClick={handleClearWishlist}
          >
            Clear Wishlist
          </button>
        )}
      </div>

      {wishlistItems.length === 0 ? (
        <div style={styles.emptyState}>
          <h2>Your wishlist is empty</h2>
          <p>Add items to your wishlist to save them for later.</p>
          <Link to="/" style={styles.shopButton}>
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <div style={styles.grid}>
            {wishlistItems.map(item => (
              <div key={item.id} style={styles.card}>
                <div style={styles.imageContainer}>
                  <img
                    src={item.image}
                    alt={item.name}
                    style={styles.image}
                  />
                </div>
                <div style={styles.content}>
                  <Link to={`/product/${item.id}`} style={styles.productLink}>
                    <h3 style={styles.productTitle}>{item.name}</h3>
                  </Link>
                  <div style={styles.priceContainer}>
                    <span style={styles.price}>Rs. {item.price.toLocaleString()}</span>
                    {item.oldPrice && (
                      <span style={styles.oldPrice}>Rs. {item.oldPrice.toLocaleString()}</span>
                    )}
                  </div>
                  <div style={styles.actionButtons}>
                    <button
                      style={styles.addToCartButton}
                      onClick={() => handleAddToCart(item)}
                    >
                      <FiShoppingCart size={16} />
                      <span>Add to Cart</span>
                    </button>
                    <button
                      style={styles.removeButton}
                      onClick={() => handleRemoveFromWishlist(item.id)}
                    >
                      <FiTrash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={styles.bottomActions}>
            <Link to="/" style={styles.continueShoppingLink}>
              Continue Shopping
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '30px 20px',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '30px',
    borderBottom: '1px solid #eee',
    paddingBottom: '15px',
  },
  title: {
    fontSize: '28px',
    fontWeight: 'bold',
    color: colors.primary,
    margin: 0,
  },
  clearButton: {
    backgroundColor: '#f5f5f5',
    border: 'none',
    padding: '8px 15px',
    borderRadius: '4px',
    cursor: 'pointer',
    color: colors.dark,
    fontWeight: 'medium',
    fontSize: '14px',
    transition: 'background-color 0.3s',
  },
  emptyState: {
    textAlign: 'center',
    padding: '60px 0',
  },
  shopButton: {
    display: 'inline-block',
    backgroundColor: colors.primary,
    color: 'white',
    padding: '12px 25px',
    borderRadius: '4px',
    textDecoration: 'none',
    fontWeight: 'bold',
    marginTop: '20px',
    transition: 'background-color 0.3s',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '30px',
    '@media (max-width: 768px)': {
      gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
      gap: '20px',
    }
  },
  card: {
    backgroundColor: 'white',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
    transition: 'transform 0.3s, box-shadow 0.3s',
    ':hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
    }
  },
  imageContainer: {
    width: '100%',
    height: '220px',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.5s',
  },
  content: {
    padding: '15px',
  },
  productLink: {
    textDecoration: 'none',
    color: 'inherit',
  },
  productTitle: {
    fontSize: '16px',
    fontWeight: '500',
    marginBottom: '10px',
    lineHeight: '1.3',
  },
  priceContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '15px',
  },
  price: {
    fontSize: '16px',
    fontWeight: 'bold',
    color: colors.primary,
  },
  oldPrice: {
    fontSize: '14px',
    color: '#999',
    textDecoration: 'line-through',
  },
  actionButtons: {
    display: 'flex',
    gap: '10px',
  },
  addToCartButton: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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
      backgroundColor: colors.secondary,
    }
  },
  removeButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    border: 'none',
    padding: '8px',
    borderRadius: '4px',
    cursor: 'pointer',
    color: '#666',
    transition: 'all 0.3s',
    ':hover': {
      backgroundColor: '#ff5a5a',
      color: 'white',
    }
  },
  bottomActions: {
    marginTop: '30px',
    textAlign: 'center',
    borderTop: '1px solid #eee',
    paddingTop: '20px',
  },
  continueShoppingLink: {
    display: 'inline-block',
    color: colors.primary,
    textDecoration: 'none',
    fontWeight: 'bold',
    transition: 'color 0.3s',
    ':hover': {
      color: colors.secondary,
    }
  }
};

export default Wishlist;
