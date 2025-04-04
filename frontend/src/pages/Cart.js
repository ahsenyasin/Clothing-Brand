import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FiTrash2, FiMinus, FiPlus, FiChevronLeft } from 'react-icons/fi';
import { removeFromCart } from '../redux/CartSlice';
import { colors, spacing } from '../design-system';

const Cart = () => {
  const cartItems = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const [quantities, setQuantities] = useState({});

  // Calculate subtotal
  const subtotal = cartItems.reduce((total, item) => {
    const quantity = quantities[item.id] || item.quantity || 1;
    return total + (item.price * quantity);
  }, 0);

  const shippingCost = subtotal > 0 ? (subtotal > 5000 ? 0 : 300) : 0;
  const total = subtotal + shippingCost;

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity > 0) {
      setQuantities({
        ...quantities,
        [id]: newQuantity
      });
    }
  };

  return (
    <div style={styles.cartContainer}>
      <h1 style={styles.pageTitle}>Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div style={styles.emptyCart}>
          <h2>Your cart is empty</h2>
          <p>Looks like you haven't added anything to your cart yet.</p>
          <Link to="/" style={styles.continueShoppingLink}>
            <FiChevronLeft /> Continue Shopping
          </Link>
        </div>
      ) : (
        <div style={styles.cartContent}>
          <div style={styles.cartItems}>
            <div style={styles.cartHeader}>
              <span style={styles.productHeader}>Product</span>
              <span style={styles.priceHeader}>Price</span>
              <span style={styles.quantityHeader}>Quantity</span>
              <span style={styles.totalHeader}>Total</span>
              <span style={styles.actionHeader}></span>
            </div>

            {cartItems.map(item => {
              const quantity = quantities[item.id] || item.quantity || 1;
              const itemTotal = item.price * quantity;

              return (
                <div key={item.id} style={styles.cartItem}>
                  <div style={styles.productInfo}>
                    <img
                      src={item.image}
                      alt={item.name}
                      style={styles.productImage}
                    />
                    <div style={styles.productDetails}>
                      <h3 style={styles.productName}>{item.name}</h3>
                      {item.size && <p style={styles.productMeta}>Size: {item.size}</p>}
                      {item.color && <p style={styles.productMeta}>Color: {item.color}</p>}
                    </div>
                  </div>

                  <div style={styles.priceCell}>
                    Rs. {item.price.toLocaleString()}
                  </div>

                  <div style={styles.quantityCell}>
                    <div style={styles.quantityControls}>
                      <button
                        style={styles.quantityButton}
                        onClick={() => handleQuantityChange(item.id, quantity - 1)}
                        disabled={quantity <= 1}
                      >
                        <FiMinus />
                      </button>
                      <span style={styles.quantityDisplay}>{quantity}</span>
                      <button
                        style={styles.quantityButton}
                        onClick={() => handleQuantityChange(item.id, quantity + 1)}
                      >
                        <FiPlus />
                      </button>
                    </div>
                  </div>

                  <div style={styles.totalCell}>
                    Rs. {itemTotal.toLocaleString()}
                  </div>

                  <div style={styles.actionCell}>
                    <button
                      style={styles.removeButton}
                      onClick={() => handleRemoveItem(item.id)}
                    >
                      <FiTrash2 />
                    </button>
                  </div>
                </div>
              );
            })}

            <div style={styles.cartFooter}>
              <Link to="/" style={styles.continueShoppingLink}>
                <FiChevronLeft /> Continue Shopping
              </Link>
            </div>
          </div>

          <div style={styles.orderSummary}>
            <h2 style={styles.summaryTitle}>Order Summary</h2>

            <div style={styles.summaryItem}>
              <span>Subtotal</span>
              <span>Rs. {subtotal.toLocaleString()}</span>
            </div>

            <div style={styles.summaryItem}>
              <span>Shipping</span>
              <span>
                {shippingCost === 0 ? 'Free' : `Rs. ${shippingCost.toLocaleString()}`}
              </span>
            </div>

            {subtotal > 0 && subtotal < 5000 && (
              <div style={styles.freeShippingNote}>
                Add Rs. {(5000 - subtotal).toLocaleString()} more to enjoy FREE shipping!
              </div>
            )}

            <div style={styles.summaryTotal}>
              <span>Total</span>
              <span>Rs. {total.toLocaleString()}</span>
            </div>

            <button style={styles.checkoutButton}>
              Proceed to Checkout
            </button>

            <div style={styles.paymentMethods}>
              <p style={styles.paymentTitle}>We Accept:</p>
              <img
                src={`${process.env.PUBLIC_URL}/images/payment-methods.png`}
                alt="Payment methods"
                style={styles.paymentMethodsImage}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  cartContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '30px 20px'
  },
  pageTitle: {
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '30px',
    color: colors.primary
  },
  emptyCart: {
    textAlign: 'center',
    padding: '50px 0',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
  },
  cartContent: {
    display: 'grid',
    gridTemplateColumns: '1fr 350px',
    gap: '30px'
  },
  cartItems: {
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
    overflow: 'hidden'
  },
  cartHeader: {
    display: 'grid',
    gridTemplateColumns: '3fr 1fr 1fr 1fr 50px',
    padding: '15px 20px',
    backgroundColor: '#f8f8f8',
    fontWeight: 'bold',
    borderBottom: '1px solid #eee'
  },
  productHeader: {},
  priceHeader: { textAlign: 'center' },
  quantityHeader: { textAlign: 'center' },
  totalHeader: { textAlign: 'center' },
  actionHeader: {},
  cartItem: {
    display: 'grid',
    gridTemplateColumns: '3fr 1fr 1fr 1fr 50px',
    padding: '20px',
    borderBottom: '1px solid #eee',
    alignItems: 'center'
  },
  productInfo: {
    display: 'flex',
    alignItems: 'center'
  },
  productImage: {
    width: '80px',
    height: '80px',
    objectFit: 'cover',
    marginRight: '15px',
    borderRadius: '4px'
  },
  productDetails: {},
  productName: {
    fontSize: '16px',
    margin: '0 0 5px 0'
  },
  productMeta: {
    fontSize: '14px',
    color: '#888',
    margin: '3px 0'
  },
  priceCell: {
    textAlign: 'center'
  },
  quantityCell: {
    textAlign: 'center'
  },
  quantityControls: {
    display: 'inline-flex',
    alignItems: 'center',
    border: '1px solid #ddd',
    borderRadius: '4px'
  },
  quantityButton: {
    border: 'none',
    background: 'none',
    padding: '5px 10px',
    cursor: 'pointer',
    fontSize: '14px',
    color: colors.dark,
    ':disabled': {
      color: '#ccc',
      cursor: 'not-allowed'
    }
  },
  quantityDisplay: {
    padding: '0 10px',
    minWidth: '30px',
    textAlign: 'center'
  },
  totalCell: {
    textAlign: 'center',
    fontWeight: 'bold'
  },
  actionCell: {
    textAlign: 'center'
  },
  removeButton: {
    background: 'none',
    border: 'none',
    color: '#999',
    cursor: 'pointer',
    transition: 'color 0.2s',
    ':hover': {
      color: colors.secondary
    }
  },
  cartFooter: {
    padding: '20px',
    borderTop: '1px solid #eee'
  },
  continueShoppingLink: {
    display: 'inline-flex',
    alignItems: 'center',
    color: colors.dark,
    textDecoration: 'none',
    transition: 'color 0.2s',
    ':hover': {
      color: colors.secondary
    }
  },
  orderSummary: {
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
    padding: '20px',
    height: 'fit-content'
  },
  summaryTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '20px',
    paddingBottom: '15px',
    borderBottom: '1px solid #eee'
  },
  summaryItem: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '15px',
    fontSize: '15px'
  },
  freeShippingNote: {
    backgroundColor: '#f8f8f8',
    padding: '10px',
    fontSize: '14px',
    borderRadius: '4px',
    color: colors.secondary,
    marginBottom: '15px',
    textAlign: 'center'
  },
  summaryTotal: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
    paddingTop: '15px',
    borderTop: '1px solid #eee',
    fontSize: '18px',
    fontWeight: 'bold'
  },
  checkoutButton: {
    width: '100%',
    padding: '12px',
    backgroundColor: colors.secondary,
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    fontWeight: 'bold',
    marginTop: '20px',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
    ':hover': {
      backgroundColor: '#d44436'
    }
  },
  paymentMethods: {
    marginTop: '20px',
    textAlign: 'center'
  },
  paymentTitle: {
    fontSize: '14px',
    color: '#888',
    marginBottom: '10px'
  },
  paymentMethodsImage: {
    maxWidth: '100%',
    height: '30px'
  }
};

export default Cart;
