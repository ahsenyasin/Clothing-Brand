import React, { useState } from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FiTrash2, FiMinus, FiPlus, FiChevronLeft } from 'react-icons/fi';
import { removeFromCart } from '../redux/CartSlice';
import { colors, spacing } from '../design-system';
=======
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FiTrash2, FiMinus, FiPlus } from 'react-icons/fi';
import { colors } from '../design-system';
>>>>>>> 179e0b9 (commit)
=======
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FiTrash2, FiMinus, FiPlus, FiChevronLeft } from 'react-icons/fi';
import { removeFromCart, updateQuantity } from '../redux/CartSlice';
import { colors } from '../design-system';
>>>>>>> ec17d2a (Initial commit)

const Cart = () => {
  const cartItems = useSelector(state => state.cart);
  const dispatch = useDispatch();
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> ec17d2a (Initial commit)
  const [couponCode, setCouponCode] = useState('');
  const [couponApplied, setCouponApplied] = useState(false);

  // Calculate subtotal, shipping, and total
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = subtotal > 0 ? (subtotal > 5000 ? 0 : 200) : 0;
  const discount = couponApplied ? Math.round(subtotal * 0.1) : 0; // 10% discount
  const total = subtotal + shipping - discount;

<<<<<<< HEAD
  const handleQuantityChange = (product, newQuantity) => {
    if (newQuantity < 1) return;

    dispatch({
      type: 'UPDATE_QUANTITY',
      payload: {
        id: product.id,
        quantity: newQuantity
      }
    });
  };

  const handleRemoveItem = (productId) => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: productId
    });
=======
  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) return;

    dispatch(updateQuantity({
      id: id,
      quantity: newQuantity
    }));
  };

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
>>>>>>> ec17d2a (Initial commit)
  };

  const handleApplyCoupon = () => {
    if (couponCode.toUpperCase() === 'DISCOUNT10') {
      setCouponApplied(true);
    } else {
      alert('Invalid coupon code');
<<<<<<< HEAD
>>>>>>> 179e0b9 (commit)
=======
>>>>>>> ec17d2a (Initial commit)
    }
  };

  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <div style={styles.cartContainer}>
      <h1 style={styles.pageTitle}>Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div style={styles.emptyCart}>
          <h2>Your cart is empty</h2>
          <p>Looks like you haven't added anything to your cart yet.</p>
          <Link to="/" style={styles.continueShoppingLink}>
            <FiChevronLeft /> Continue Shopping
          </Link>
=======
=======
>>>>>>> ec17d2a (Initial commit)
    <div className="cart-page" style={styles.container}>
      <h1 style={styles.title}>Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div style={styles.emptyCart}>
<<<<<<< HEAD
          <p>Your cart is currently empty.</p>
          <Link to="/" style={styles.continueShopping}>Continue Shopping</Link>
>>>>>>> 179e0b9 (commit)
=======
          <h2>Your cart is empty</h2>
          <p>Looks like you haven't added anything to your cart yet.</p>
          <Link to="/" style={styles.continueShopping}>
            <FiChevronLeft /> Continue Shopping
          </Link>
>>>>>>> ec17d2a (Initial commit)
        </div>
      ) : (
        <div style={styles.cartContent}>
          <div style={styles.cartItems}>
            <div style={styles.cartHeader}>
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> ec17d2a (Initial commit)
              <div style={styles.productCol}>Product</div>
              <div style={styles.priceCol}>Price</div>
              <div style={styles.quantityCol}>Quantity</div>
              <div style={styles.totalCol}>Total</div>
              <div style={styles.actionCol}></div>
            </div>

            {cartItems.map(item => (
              <div key={item.id} style={styles.cartItem}>
                <div style={styles.productCol}>
<<<<<<< HEAD
>>>>>>> 179e0b9 (commit)
=======
>>>>>>> ec17d2a (Initial commit)
                  <div style={styles.productInfo}>
                    <img
                      src={item.image}
                      alt={item.name}
                      style={styles.productImage}
                    />
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
                    <div>
                      <h3 style={styles.productName}>{item.name}</h3>
                      <p style={styles.productCategory}>{item.category}</p>
=======
                    <div>
                      <h3 style={styles.productName}>{item.name}</h3>
                      {item.category && <p style={styles.productCategory}>{item.category}</p>}
                      {item.size && <p style={styles.productCategory}>Size: {item.size}</p>}
                      {item.color && <p style={styles.productCategory}>Color: {item.color}</p>}
>>>>>>> ec17d2a (Initial commit)
                    </div>
                  </div>
                </div>

                <div style={styles.priceCol}>
                  <p style={styles.price}>Rs. {item.price.toLocaleString()}</p>
                </div>

                <div style={styles.quantityCol}>
                  <div style={styles.quantityControl}>
                    <button
                      style={styles.quantityButton}
<<<<<<< HEAD
                      onClick={() => handleQuantityChange(item, item.quantity - 1)}
=======
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
>>>>>>> ec17d2a (Initial commit)
                    >
                      <FiMinus />
                    </button>
                    <span style={styles.quantityValue}>{item.quantity}</span>
                    <button
                      style={styles.quantityButton}
<<<<<<< HEAD
                      onClick={() => handleQuantityChange(item, item.quantity + 1)}
=======
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
>>>>>>> ec17d2a (Initial commit)
                    >
                      <FiPlus />
                    </button>
                  </div>
                </div>

                <div style={styles.totalCol}>
                  <p style={styles.itemTotal}>
                    Rs. {(item.price * item.quantity).toLocaleString()}
                  </p>
                </div>

                <div style={styles.actionCol}>
                  <button
                    style={styles.removeButton}
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    <FiTrash2 />
                  </button>
                </div>
              </div>
            ))}
<<<<<<< HEAD
>>>>>>> 179e0b9 (commit)
=======
>>>>>>> ec17d2a (Initial commit)
          </div>

          <div style={styles.orderSummary}>
            <h2 style={styles.summaryTitle}>Order Summary</h2>

            <div style={styles.summaryItem}>
              <span>Subtotal</span>
              <span>Rs. {subtotal.toLocaleString()}</span>
            </div>

            <div style={styles.summaryItem}>
              <span>Shipping</span>
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> ec17d2a (Initial commit)
              <span>{shipping === 0 ? 'Free' : `Rs. ${shipping.toLocaleString()}`}</span>
            </div>

            {couponApplied && (
              <div style={styles.summaryItem}>
                <span>Discount (10%)</span>
                <span>-Rs. {discount.toLocaleString()}</span>
              </div>
            )}

            <div style={styles.couponSection}>
              <input
                type="text"
                placeholder="Enter coupon code"
                style={styles.couponInput}
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
              />
              <button
                style={styles.couponButton}
                onClick={handleApplyCoupon}
                disabled={couponApplied}
              >
                {couponApplied ? 'Applied' : 'Apply'}
              </button>
            </div>

<<<<<<< HEAD
            <div style={styles.totalSection}>
              <span style={styles.totalLabel}>Total</span>
              <span style={styles.totalAmount}>Rs. {total.toLocaleString()}</span>
>>>>>>> 179e0b9 (commit)
=======
            {subtotal > 0 && subtotal < 5000 && (
              <div style={styles.freeShippingNote}>
                Add Rs. {(5000 - subtotal).toLocaleString()} more to enjoy FREE shipping!
              </div>
            )}

            <div style={styles.totalSection}>
              <span style={styles.totalLabel}>Total</span>
              <span style={styles.totalAmount}>Rs. {total.toLocaleString()}</span>
>>>>>>> ec17d2a (Initial commit)
            </div>

            <button style={styles.checkoutButton}>
              Proceed to Checkout
            </button>

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ec17d2a (Initial commit)
            <div style={styles.paymentMethods}>
              <p style={styles.paymentTitle}>We Accept:</p>
              <img
                src={`${process.env.PUBLIC_URL}/images/payment-methods.png`}
                alt="Payment methods"
                style={styles.paymentMethodsImage}
              />
            </div>
<<<<<<< HEAD
=======
            <Link to="/" style={styles.continueShopping}>
              Continue Shopping
            </Link>
>>>>>>> 179e0b9 (commit)
=======
>>>>>>> ec17d2a (Initial commit)
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
<<<<<<< HEAD
<<<<<<< HEAD
  cartContainer: {
=======
  container: {
>>>>>>> ec17d2a (Initial commit)
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '30px 20px'
  },
<<<<<<< HEAD
  pageTitle: {
=======
  container: {
    padding: '30px 5%',
    maxWidth: '1200px',
    margin: '0 auto'
  },
  title: {
>>>>>>> 179e0b9 (commit)
=======
  title: {
>>>>>>> ec17d2a (Initial commit)
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '30px',
    color: colors.primary
  },
  emptyCart: {
    textAlign: 'center',
    padding: '50px 0',
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> ec17d2a (Initial commit)
    backgroundColor: '#f9f9f9',
    borderRadius: '8px'
  },
  cartContent: {
    display: 'flex',
    gap: '30px',
    flexWrap: 'wrap'
  },
  cartItems: {
    flex: '1 1 600px'
  },
  cartHeader: {
    display: 'grid',
    gridTemplateColumns: '3fr 1fr 1fr 1fr 0.5fr',
    padding: '15px 0',
    borderBottom: '1px solid #eee',
    fontWeight: 'bold',
    color: '#555'
  },
  cartItem: {
    display: 'grid',
    gridTemplateColumns: '3fr 1fr 1fr 1fr 0.5fr',
    padding: '20px 0',
    borderBottom: '1px solid #eee',
    alignItems: 'center'
  },
  productCol: {},
  priceCol: {},
  quantityCol: {},
  totalCol: {},
  actionCol: {},
  productInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px'
<<<<<<< HEAD
>>>>>>> 179e0b9 (commit)
=======
>>>>>>> ec17d2a (Initial commit)
  },
  productImage: {
    width: '80px',
    height: '80px',
    objectFit: 'cover',
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> ec17d2a (Initial commit)
    borderRadius: '4px'
  },
  productName: {
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: '5px'
  },
  productCategory: {
    color: '#777',
    fontSize: '14px'
  },
  price: {
    fontWeight: 'bold'
  },
  quantityControl: {
    display: 'flex',
    alignItems: 'center',
    border: '1px solid #ddd',
    borderRadius: '4px',
    width: 'fit-content'
<<<<<<< HEAD
>>>>>>> 179e0b9 (commit)
=======
>>>>>>> ec17d2a (Initial commit)
  },
  quantityButton: {
    border: 'none',
    background: 'none',
    padding: '5px 10px',
    cursor: 'pointer',
<<<<<<< HEAD
<<<<<<< HEAD
    fontSize: '14px',
    color: colors.dark,
    ':disabled': {
      color: '#ccc',
      cursor: 'not-allowed'
    }
  },
  quantityDisplay: {
=======
=======
>>>>>>> ec17d2a (Initial commit)
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  quantityValue: {
<<<<<<< HEAD
>>>>>>> 179e0b9 (commit)
=======
>>>>>>> ec17d2a (Initial commit)
    padding: '0 10px',
    minWidth: '30px',
    textAlign: 'center'
  },
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> ec17d2a (Initial commit)
  itemTotal: {
    fontWeight: 'bold'
  },
  removeButton: {
    border: 'none',
    background: 'none',
    color: '#999',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '8px',
    borderRadius: '50%',
    transition: 'background-color 0.2s',
    ':hover': {
      backgroundColor: '#f1f1f1',
<<<<<<< HEAD
>>>>>>> 179e0b9 (commit)
=======
>>>>>>> ec17d2a (Initial commit)
      color: colors.secondary
    }
  },
  orderSummary: {
<<<<<<< HEAD
<<<<<<< HEAD
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
    padding: '20px',
=======
=======
>>>>>>> ec17d2a (Initial commit)
    flex: '1 1 300px',
    backgroundColor: '#f9f9f9',
    padding: '25px',
    borderRadius: '8px',
<<<<<<< HEAD
>>>>>>> 179e0b9 (commit)
=======
>>>>>>> ec17d2a (Initial commit)
    height: 'fit-content'
  },
  summaryTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '20px',
<<<<<<< HEAD
<<<<<<< HEAD
    paddingBottom: '15px',
    borderBottom: '1px solid #eee'
=======
    color: colors.primary
>>>>>>> 179e0b9 (commit)
=======
    color: colors.primary
>>>>>>> ec17d2a (Initial commit)
  },
  summaryItem: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '15px',
    fontSize: '15px'
  },
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
  freeShippingNote: {
    backgroundColor: '#f2f7ff',
    padding: '10px',
    fontSize: '14px',
    borderRadius: '4px',
    color: colors.primary,
    marginBottom: '15px',
    textAlign: 'center'
  },
>>>>>>> ec17d2a (Initial commit)
  couponSection: {
    display: 'flex',
    marginBottom: '20px',
    marginTop: '15px'
  },
  couponInput: {
    flex: 1,
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px 0 0 4px',
    fontSize: '14px'
  },
  couponButton: {
<<<<<<< HEAD
    backgroundColor: couponApplied => couponApplied ? '#999' : colors.secondary,
=======
    backgroundColor: colors.secondary,
>>>>>>> ec17d2a (Initial commit)
    color: 'white',
    border: 'none',
    padding: '0 15px',
    borderRadius: '0 4px 4px 0',
    cursor: 'pointer',
<<<<<<< HEAD
    fontWeight: 'bold'
=======
    fontWeight: 'bold',
    opacity: props => props.disabled ? 0.7 : 1
>>>>>>> ec17d2a (Initial commit)
  },
  totalSection: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
    marginBottom: '25px',
    paddingTop: '15px',
    borderTop: '1px solid #ddd',
  },
  totalLabel: {
    fontSize: '18px',
    fontWeight: 'bold'
  },
  totalAmount: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: colors.secondary
  },
  checkoutButton: {
    backgroundColor: colors.secondary,
    color: 'white',
    border: 'none',
    padding: '12px',
    borderRadius: '4px',
    width: '100%',
    fontWeight: 'bold',
    fontSize: '16px',
    cursor: 'pointer',
    marginBottom: '15px'
  },
  continueShopping: {
<<<<<<< HEAD
    display: 'block',
    textAlign: 'center',
    color: colors.primary,
    textDecoration: 'none',
    fontWeight: 'bold',
    marginTop: '10px'
=======
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '5px',
    marginTop: '20px',
    color: colors.primary,
    textDecoration: 'none',
    fontWeight: 'bold'
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
>>>>>>> ec17d2a (Initial commit)
  },
  // Responsive styles
  '@media (max-width: 768px)': {
    cartHeader: {
      display: 'none'
    },
    cartItem: {
      gridTemplateColumns: '1fr',
      gap: '10px'
    },
    productInfo: {
      flexDirection: 'column',
      alignItems: 'flex-start'
    },
    productImage: {
      width: '100%',
      height: 'auto',
      maxWidth: '150px'
    }
<<<<<<< HEAD
>>>>>>> 179e0b9 (commit)
=======
>>>>>>> ec17d2a (Initial commit)
  }
};

export default Cart;
