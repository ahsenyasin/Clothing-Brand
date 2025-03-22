import { Link } from 'react-router-dom';
import { FiSearch, FiUser, FiShoppingCart } from 'react-icons/fi';
import { colors, typography, spacing } from '../design-system';

const Header = () => (
  <header style={styles.header}>
    <div style={styles.promoBanner}>
      Free Shipping on Orders Over Rs. 5000
    </div>
    
    <nav style={styles.mainNav}>
      <Link to="/" style={styles.logo}>Clothing Brand</Link>
      
      <div style={styles.navActions}>
        <div style={styles.searchBar}>
          <FiSearch style={styles.searchIcon} />
          <input 
            type="text" 
            placeholder="Search collections..." 
            style={styles.searchInput}
          />
        </div>
        <div style={styles.iconGroup}>
          <Link to="/account" style={styles.navLink}>
            <FiUser /> Account
          </Link>
          <Link to="/cart" style={styles.navLink}>
            <FiShoppingCart /> Cart
          </Link>
        </div>
      </div>
    </nav>
  </header>
);

const styles = {
  header: {
    backgroundColor: colors.light,
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
  },
  promoBanner: {
    backgroundColor: colors.secondary,
    color: 'white',
    textAlign: 'center',
    padding: spacing.small,
    fontSize: '0.9rem'
  },
  mainNav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: spacing.medium,
    maxWidth: '1200px',
    margin: '0 auto'
  },
  logo: {
    fontFamily: typography.heading,
    fontSize: '1.8rem',
    color: colors.primary,
    textDecoration: 'none'
  },
  searchBar: {
    position: 'relative',
    width: '400px'
  },
  searchInput: {
    width: '100%',
    padding: `${spacing.small} 35px`,
    border: `1px solid ${colors.light}`,
    borderRadius: '20px'
  },
  navLink: {
    display: 'flex',
    alignItems: 'center',
    gap: spacing.small,
    color: colors.dark,
    textDecoration: 'none'
  }
};

export default Header;