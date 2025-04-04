import React, { useState } from 'react';
import { FiUser, FiPackage, FiHeart, FiMapPin, FiCreditCard, FiLogOut } from 'react-icons/fi';
import { colors } from '../design-system';
import { Link } from 'react-router-dom';

const Account = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [registerForm, setRegisterForm] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [showLogin, setShowLogin] = useState(true);

  // Dummy user data
  const user = {
    name: 'Ahsen Yasin',
    email: 'ahsen@example.com',
    phone: '+92 300 1234567',
    orders: [
      { id: '1001', date: '2025-03-20', status: 'Delivered', total: 12500 },
      { id: '1002', date: '2025-03-25', status: 'Processing', total: 8700 },
    ],
    addresses: [
      {
        id: 1,
        type: 'Home',
        address: '123 Main Street, Lahore',
        default: true
      },
      {
        id: 2,
        type: 'Office',
        address: '456 Business Road, Karachi',
        default: false
      }
    ]
  };

  const handleLoginChange = (e) => {
    setLoginForm({
      ...loginForm,
      [e.target.name]: e.target.value
    });
  };

  const handleRegisterChange = (e) => {
    setRegisterForm({
      ...registerForm,
      [e.target.name]: e.target.value
    });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Simulate login success
    setIsLoggedIn(true);
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    // Simulate registration success
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const renderLoginForm = () => (
    <form onSubmit={handleLoginSubmit} style={styles.form}>
      <div style={styles.formGroup}>
        <label htmlFor="email" style={styles.label}>Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={loginForm.email}
          onChange={handleLoginChange}
          required
          style={styles.input}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="password" style={styles.label}>Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={loginForm.password}
          onChange={handleLoginChange}
          required
          style={styles.input}
        />
      </div>
      <div style={styles.formActions}>
        <button type="submit" style={styles.submitButton}>Login</button>
        <a href="#forgot" style={styles.forgotPassword}>Forgot Password?</a>
      </div>
      <div style={styles.formSwitch}>
        <p>Don't have an account?</p>
        <button
          type="button"
          style={styles.switchButton}
          onClick={() => setShowLogin(false)}
        >
          Register
        </button>
      </div>
    </form>
  );

  const renderRegisterForm = () => (
    <form onSubmit={handleRegisterSubmit} style={styles.form}>
      <div style={styles.formGroup}>
        <label htmlFor="name" style={styles.label}>Full Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={registerForm.name}
          onChange={handleRegisterChange}
          required
          style={styles.input}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="reg-email" style={styles.label}>Email</label>
        <input
          type="email"
          id="reg-email"
          name="email"
          value={registerForm.email}
          onChange={handleRegisterChange}
          required
          style={styles.input}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="reg-password" style={styles.label}>Password</label>
        <input
          type="password"
          id="reg-password"
          name="password"
          value={registerForm.password}
          onChange={handleRegisterChange}
          required
          style={styles.input}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="confirm-password" style={styles.label}>Confirm Password</label>
        <input
          type="password"
          id="confirm-password"
          name="confirmPassword"
          value={registerForm.confirmPassword}
          onChange={handleRegisterChange}
          required
          style={styles.input}
        />
      </div>
      <div style={styles.formActions}>
        <button type="submit" style={styles.submitButton}>Register</button>
      </div>
      <div style={styles.formSwitch}>
        <p>Already have an account?</p>
        <button
          type="button"
          style={styles.switchButton}
          onClick={() => setShowLogin(true)}
        >
          Login
        </button>
      </div>
    </form>
  );

  const renderDashboard = () => (
    <div style={styles.dashboard}>
      <div style={styles.welcomeSection}>
        <h2>Welcome back, {user.name}!</h2>
        <p>From your account dashboard you can view your recent orders, manage your shipping addresses, and edit your account details.</p>
      </div>

      <div style={styles.statsGrid}>
        <div style={styles.statsBox}>
          <h3>Orders</h3>
          <p className="stat">{user.orders.length}</p>
        </div>
        <div style={styles.statsBox}>
          <h3>Wishlist</h3>
          <p className="stat">5</p>
        </div>
        <div style={styles.statsBox}>
          <h3>Reviews</h3>
          <p className="stat">2</p>
        </div>
      </div>

      <div style={styles.recentOrders}>
        <h3>Recent Orders</h3>
        <div style={styles.ordersList}>
          {user.orders.map(order => (
            <div key={order.id} style={styles.orderItem}>
              <div style={styles.orderInfo}>
                <p style={styles.orderId}>Order #{order.id}</p>
                <p style={styles.orderDate}>{order.date}</p>
              </div>
              <div style={styles.orderStatus}>
                <span
                  style={{
                    ...styles.statusBadge,
                    backgroundColor: order.status === 'Delivered' ? '#e6f7e9' : '#fff4e5',
                    color: order.status === 'Delivered' ? '#43a047' : '#ff9800'
                  }}
                >
                  {order.status}
                </span>
                <p style={styles.orderTotal}>Rs. {order.total.toLocaleString()}</p>
              </div>
              <Link to={`/orders/${order.id}`} style={styles.viewOrderLink}>
                View Order
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderOrders = () => (
    <div style={styles.ordersTab}>
      <h2>My Orders</h2>
      <div style={styles.ordersList}>
        {user.orders.map(order => (
          <div key={order.id} style={styles.orderItem}>
            <div style={styles.orderInfo}>
              <p style={styles.orderId}>Order #{order.id}</p>
              <p style={styles.orderDate}>{order.date}</p>
            </div>
            <div style={styles.orderStatus}>
              <span
                style={{
                  ...styles.statusBadge,
                  backgroundColor: order.status === 'Delivered' ? '#e6f7e9' : '#fff4e5',
                  color: order.status === 'Delivered' ? '#43a047' : '#ff9800'
                }}
              >
                {order.status}
              </span>
              <p style={styles.orderTotal}>Rs. {order.total.toLocaleString()}</p>
            </div>
            <Link to={`/orders/${order.id}`} style={styles.viewOrderLink}>
              View Order
            </Link>
          </div>
        ))}
      </div>
    </div>
  );

  const renderAddresses = () => (
    <div style={styles.addressesTab}>
      <div style={styles.addressHeader}>
        <h2>My Addresses</h2>
        <button style={styles.addAddressButton}>Add New Address</button>
      </div>
      <div style={styles.addressGrid}>
        {user.addresses.map(address => (
          <div key={address.id} style={styles.addressCard}>
            <div style={styles.addressCardHeader}>
              <h3>{address.type}</h3>
              {address.default && <span style={styles.defaultBadge}>Default</span>}
            </div>
            <p style={styles.addressText}>{address.address}</p>
            <div style={styles.addressActions}>
              <button style={styles.editButton}>Edit</button>
              {!address.default && (
                <button style={styles.removeButton}>Remove</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderProfileSettings = () => (
    <div style={styles.settingsTab}>
      <h2>Account Details</h2>
      <form style={styles.profileForm}>
        <div style={styles.formRow}>
          <div style={styles.formGroup}>
            <label htmlFor="profile-name" style={styles.label}>Full Name</label>
            <input
              type="text"
              id="profile-name"
              defaultValue={user.name}
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="profile-email" style={styles.label}>Email</label>
            <input
              type="email"
              id="profile-email"
              defaultValue={user.email}
              style={styles.input}
            />
          </div>
        </div>
        <div style={styles.formRow}>
          <div style={styles.formGroup}>
            <label htmlFor="profile-phone" style={styles.label}>Phone</label>
            <input
              type="tel"
              id="profile-phone"
              defaultValue={user.phone}
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="current-password" style={styles.label}>Current Password</label>
            <input
              type="password"
              id="current-password"
              placeholder="Enter to change password"
              style={styles.input}
            />
          </div>
        </div>
        <div style={styles.formRow}>
          <div style={styles.formGroup}>
            <label htmlFor="new-password" style={styles.label}>New Password</label>
            <input
              type="password"
              id="new-password"
              placeholder="Leave blank to keep current"
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="confirm-new-password" style={styles.label}>Confirm New Password</label>
            <input
              type="password"
              id="confirm-new-password"
              placeholder="Leave blank to keep current"
              style={styles.input}
            />
          </div>
        </div>
        <div style={{...styles.formActions, justifyContent: 'flex-start'}}>
          <button type="submit" style={styles.submitButton}>Save Changes</button>
        </div>
      </form>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard': return renderDashboard();
      case 'orders': return renderOrders();
      case 'wishlist': return <div><h2>My Wishlist</h2><p>Wishlist items will appear here</p></div>;
      case 'addresses': return renderAddresses();
      case 'profile': return renderProfileSettings();
      default: return renderDashboard();
    }
  };

  return (
    <div style={styles.container}>
      {!isLoggedIn ? (
        <div style={styles.authContainer}>
          <h1 style={styles.authTitle}>My Account</h1>
          <div style={styles.authContent}>
            {showLogin ? renderLoginForm() : renderRegisterForm()}
          </div>
        </div>
      ) : (
        <div style={styles.accountContainer}>
          <div style={styles.sidebar}>
            <div style={styles.userInfo}>
              <div style={styles.userAvatar}>
                <FiUser size={24} />
              </div>
              <div>
                <h3 style={styles.userName}>{user.name}</h3>
                <p style={styles.userEmail}>{user.email}</p>
              </div>
            </div>
            <nav style={styles.navMenu}>
              <button
                style={{...styles.navItem, ...(activeTab === 'dashboard' && styles.activeNavItem)}}
                onClick={() => setActiveTab('dashboard')}
              >
                <FiUser size={18} />
                <span>Dashboard</span>
              </button>
              <button
                style={{...styles.navItem, ...(activeTab === 'orders' && styles.activeNavItem)}}
                onClick={() => setActiveTab('orders')}
              >
                <FiPackage size={18} />
                <span>My Orders</span>
              </button>
              <button
                style={{...styles.navItem, ...(activeTab === 'wishlist' && styles.activeNavItem)}}
                onClick={() => setActiveTab('wishlist')}
              >
                <FiHeart size={18} />
                <span>My Wishlist</span>
              </button>
              <button
                style={{...styles.navItem, ...(activeTab === 'addresses' && styles.activeNavItem)}}
                onClick={() => setActiveTab('addresses')}
              >
                <FiMapPin size={18} />
                <span>My Addresses</span>
              </button>
              <button
                style={{...styles.navItem, ...(activeTab === 'profile' && styles.activeNavItem)}}
                onClick={() => setActiveTab('profile')}
              >
                <FiCreditCard size={18} />
                <span>Account Details</span>
              </button>
              <button
                style={styles.logoutButton}
                onClick={handleLogout}
              >
                <FiLogOut size={18} />
                <span>Logout</span>
              </button>
            </nav>
          </div>
          <div style={styles.content}>
            {renderContent()}
          </div>
        </div>
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
  authContainer: {
    maxWidth: '500px',
    margin: '0 auto',
    padding: '20px',
  },
  authTitle: {
    fontSize: '28px',
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: '30px',
    textAlign: 'center',
  },
  authContent: {
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '30px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  label: {
    fontSize: '14px',
    fontWeight: '500',
    color: '#333',
  },
  input: {
    padding: '12px 15px',
    borderRadius: '4px',
    border: '1px solid #ddd',
    fontSize: '16px',
    transition: 'border-color 0.3s',
    ':focus': {
      borderColor: colors.primary,
      outline: 'none',
    }
  },
  formActions: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '10px',
  },
  submitButton: {
    backgroundColor: colors.primary,
    color: 'white',
    border: 'none',
    padding: '12px 25px',
    borderRadius: '4px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    ':hover': {
      backgroundColor: colors.secondary,
    }
  },
  forgotPassword: {
    fontSize: '14px',
    color: colors.primary,
    textDecoration: 'none',
  },
  formSwitch: {
    marginTop: '20px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  switchButton: {
    backgroundColor: 'transparent',
    border: 'none',
    color: colors.primary,
    fontWeight: 'bold',
    cursor: 'pointer',
    padding: '5px',
    fontSize: '16px',
  },
  accountContainer: {
    display: 'flex',
    gap: '30px',
    '@media (max-width: 768px)': {
      flexDirection: 'column',
    }
  },
  sidebar: {
    width: '250px',
    flexShrink: 0,
    '@media (max-width: 768px)': {
      width: '100%',
    }
  },
  userInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    marginBottom: '20px',
    padding: '15px',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
  },
  userAvatar: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    backgroundColor: '#f2f2f2',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: colors.primary,
  },
  userName: {
    margin: 0,
    fontWeight: 'bold',
    fontSize: '16px',
  },
  userEmail: {
    margin: '5px 0 0',
    fontSize: '14px',
    color: '#777',
  },
  navMenu: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
  },
  navItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '15px',
    border: 'none',
    backgroundColor: 'transparent',
    textAlign: 'left',
    cursor: 'pointer',
    borderBottom: '1px solid #f2f2f2',
    transition: 'all 0.3s',
    fontSize: '15px',
    color: '#333',
    ':hover': {
      backgroundColor: '#f9f9f9',
    }
  },
  activeNavItem: {
    backgroundColor: '#f2f7fe',
    color: colors.primary,
    fontWeight: 'bold',
  },
  logoutButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '15px',
    border: 'none',
    backgroundColor: 'transparent',
    textAlign: 'left',
    cursor: 'pointer',
    color: '#e53935',
    transition: 'all 0.3s',
    fontSize: '15px',
    marginTop: 'auto',
    ':hover': {
      backgroundColor: '#ffebee',
    }
  },
  content: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '25px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
  },
  dashboard: {
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
  },
  welcomeSection: {
    marginBottom: '20px',
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px',
    '@media (max-width: 576px)': {
      gridTemplateColumns: '1fr',
    }
  },
  statsBox: {
    backgroundColor: '#f9f9f9',
    padding: '20px',
    borderRadius: '8px',
    textAlign: 'center',
  },
  recentOrders: {
    marginTop: '20px',
  },
  ordersList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    marginTop: '15px',
  },
  orderItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    '@media (max-width: 576px)': {
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: '10px',
    }
  },
  orderInfo: {
    display: 'flex',
    flexDirection: 'column',
  },
  orderId: {
    fontWeight: 'bold',
    margin: 0,
  },
  orderDate: {
    margin: '5px 0 0',
    color: '#777',
    fontSize: '14px',
  },
  orderStatus: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '@media (max-width: 576px)': {
      alignItems: 'flex-start',
    }
  },
  statusBadge: {
    padding: '5px 10px',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: 'bold',
  },
  orderTotal: {
    marginTop: '5px',
    fontWeight: 'bold',
  },
  viewOrderLink: {
    color: colors.primary,
    textDecoration: 'none',
    fontWeight: 'bold',
    transition: 'color 0.3s',
    ':hover': {
      color: colors.secondary,
    }
  },
  addressHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
    '@media (max-width: 576px)': {
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: '10px',
    }
  },
  addAddressButton: {
    backgroundColor: colors.primary,
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'background-color 0.3s',
    ':hover': {
      backgroundColor: colors.secondary,
    }
  },
  addressGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '20px',
    '@media (max-width: 768px)': {
      gridTemplateColumns: '1fr',
    }
  },
  addressCard: {
    padding: '20px',
    borderRadius: '8px',
    border: '1px solid #eee',
    backgroundColor: '#fafafa',
  },
  addressCardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px',
  },
  defaultBadge: {
    backgroundColor: '#e3f2fd',
    color: '#2196f3',
    padding: '3px 8px',
    borderRadius: '4px',
    fontSize: '12px',
    fontWeight: 'bold',
  },
  addressText: {
    margin: '0 0 15px',
    lineHeight: 1.5,
  },
  addressActions: {
    display: 'flex',
    gap: '10px',
  },
  editButton: {
    backgroundColor: '#f2f2f2',
    border: 'none',
    padding: '8px 15px',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    ':hover': {
      backgroundColor: '#e0e0e0',
    }
  },
  removeButton: {
    backgroundColor: '#fff1f0',
    color: '#f44336',
    border: 'none',
    padding: '8px 15px',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    ':hover': {
      backgroundColor: '#fde2e0',
    }
  },
  profileForm: {
    display: 'flex',
    flexDirection: 'column',
    gap: '25px',
    marginTop: '20px',
  },
  formRow: {
    display: 'flex',
    gap: '20px',
    '@media (max-width: 768px)': {
      flexDirection: 'column',
    }
  },
  ordersTab: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  addressesTab: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  settingsTab: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
};

export default Account;
