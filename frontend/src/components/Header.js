import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiUser, FiShoppingCart, FiHeart, FiMenu, FiChevronDown } from 'react-icons/fi';
import { colors, typography, spacing } from '../design-system';
import { useSelector } from 'react-redux';

const Header = () => {
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState(null);
  const cartItems = useSelector(state => state.cart);

  const toggleMegaMenu = (category) => {
    if (activeMegaMenu === category) {
      setShowMegaMenu(!showMegaMenu);
    } else {
      setActiveMegaMenu(category);
      setShowMegaMenu(true);
    }
  };

  return (
    <header style={styles.header}>
      <div style={styles.promoBanner}>
        Free Shipping on Orders Over Rs. 5000 | Use Code: FREESHIP
      </div>

      <nav style={styles.mainNav}>
        <div style={styles.logoContainer}>
          <Link to="/" style={styles.logo}>Mohsin Clothes House</Link>
        </div>

        <div style={styles.navActions}>
          <div style={styles.searchBar}>
            <FiSearch style={styles.searchIcon} />
            <input
              type="text"
              placeholder="Search products..."
              style={styles.searchInput}
            />
          </div>
          <div style={styles.iconGroup}>
            <Link to="/wishlist" style={styles.navLink}>
              <FiHeart size={20} />
              <span style={styles.linkText}>Wishlist</span>
            </Link>
            <Link to="/account" style={styles.navLink}>
              <FiUser size={20} />
              <span style={styles.linkText}>Account</span>
            </Link>
            <Link to="/cart" style={styles.navLink}>
              <div style={styles.cartIcon}>
                <FiShoppingCart size={20} />
                {cartItems.length > 0 && (
                  <span style={styles.cartCount}>{cartItems.length}</span>
                )}
              </div>
              <span style={styles.linkText}>Cart</span>
            </Link>
          </div>
        </div>
      </nav>

      <div style={styles.categoryNav}>
        <div style={styles.categoryContainer}>
          <div
            style={styles.categoryItem}
            onMouseEnter={() => toggleMegaMenu('women')}
            onMouseLeave={() => setShowMegaMenu(false)}
          >
            <span style={styles.categoryText}>WOMEN</span>
            <FiChevronDown style={styles.dropdownIcon} />

            {showMegaMenu && activeMegaMenu === 'women' && (
              <div style={styles.megaMenu}>
                <div style={styles.megaMenuColumn}>
                  <h4 style={styles.megaMenuHeading}>Ready to Wear</h4>
                  <Link to="/women/embroidered" style={styles.megaMenuItem}>Embroidered Collection</Link>
                  <Link to="/women/printed" style={styles.megaMenuItem}>Printed Collection</Link>
                  <Link to="/women/formal" style={styles.megaMenuItem}>Formal Collection</Link>
                  <Link to="/women/casual" style={styles.megaMenuItem}>Casual Collection</Link>
                </div>
                <div style={styles.megaMenuColumn}>
                  <h4 style={styles.megaMenuHeading}>Unstitched</h4>
                  <Link to="/women/lawn" style={styles.megaMenuItem}>Lawn Collection</Link>
                  <Link to="/women/chiffon" style={styles.megaMenuItem}>Chiffon Collection</Link>
                  <Link to="/women/silk" style={styles.megaMenuItem}>Silk Collection</Link>
                  <Link to="/women/cottons" style={styles.megaMenuItem}>Cotton Collection</Link>
                </div>
                <div style={styles.megaMenuColumn}>
                  <h4 style={styles.megaMenuHeading}>Accessories</h4>
                  <Link to="/women/scarves" style={styles.megaMenuItem}>Scarves</Link>
                  <Link to="/women/bags" style={styles.megaMenuItem}>Bags</Link>
                  <Link to="/women/shoes" style={styles.megaMenuItem}>Shoes</Link>
                  <Link to="/women/jewelry" style={styles.megaMenuItem}>Jewelry</Link>
                </div>
              </div>
            )}
          </div>

          <div
            style={styles.categoryItem}
            onMouseEnter={() => toggleMegaMenu('men')}
            onMouseLeave={() => setShowMegaMenu(false)}
          >
            <span style={styles.categoryText}>MEN</span>
            <FiChevronDown style={styles.dropdownIcon} />

            {showMegaMenu && activeMegaMenu === 'men' && (
              <div style={styles.megaMenu}>
                <div style={styles.megaMenuColumn}>
                  <h4 style={styles.megaMenuHeading}>Apparel</h4>
                  <Link to="/men/kurtas" style={styles.megaMenuItem}>Kurtas</Link>
                  <Link to="/men/shirts" style={styles.megaMenuItem}>Shirts</Link>
                  <Link to="/men/pants" style={styles.megaMenuItem}>Pants</Link>
                  <Link to="/men/suits" style={styles.megaMenuItem}>Suits</Link>
                </div>
                <div style={styles.megaMenuColumn}>
                  <h4 style={styles.megaMenuHeading}>Fabrics</h4>
                  <Link to="/men/cotton" style={styles.megaMenuItem}>Cotton</Link>
                  <Link to="/men/linen" style={styles.megaMenuItem}>Linen</Link>
                  <Link to="/men/denim" style={styles.megaMenuItem}>Denim</Link>
                </div>
                <div style={styles.megaMenuColumn}>
                  <h4 style={styles.megaMenuHeading}>Accessories</h4>
                  <Link to="/men/shoes" style={styles.megaMenuItem}>Shoes</Link>
                  <Link to="/men/belts" style={styles.megaMenuItem}>Belts</Link>
                  <Link to="/men/watches" style={styles.megaMenuItem}>Watches</Link>
                </div>
              </div>
            )}
          </div>

          <div
            style={styles.categoryItem}
            onMouseEnter={() => toggleMegaMenu('kids')}
            onMouseLeave={() => setShowMegaMenu(false)}
          >
            <span style={styles.categoryText}>KIDS</span>
            <FiChevronDown style={styles.dropdownIcon} />

            {showMegaMenu && activeMegaMenu === 'kids' && (
              <div style={styles.megaMenu}>
                <div style={styles.megaMenuColumn}>
                  <h4 style={styles.megaMenuHeading}>Girls</h4>
                  <Link to="/kids/girls-dresses" style={styles.megaMenuItem}>Dresses</Link>
                  <Link to="/kids/girls-tops" style={styles.megaMenuItem}>Tops</Link>
                  <Link to="/kids/girls-bottoms" style={styles.megaMenuItem}>Bottoms</Link>
                </div>
                <div style={styles.megaMenuColumn}>
                  <h4 style={styles.megaMenuHeading}>Boys</h4>
                  <Link to="/kids/boys-shirts" style={styles.megaMenuItem}>Shirts</Link>
                  <Link to="/kids/boys-pants" style={styles.megaMenuItem}>Pants</Link>
                  <Link to="/kids/boys-outfits" style={styles.megaMenuItem}>Outfits</Link>
                </div>
              </div>
            )}
          </div>

          <div style={styles.categoryItem}>
            <span style={styles.categoryText}>UNSTITCHED</span>
          </div>

          <div
            style={styles.categoryItem}
            onMouseEnter={() => toggleMegaMenu('home')}
            onMouseLeave={() => setShowMegaMenu(false)}
          >
            <span style={styles.categoryText}>HOME</span>
            <FiChevronDown style={styles.dropdownIcon} />

            {showMegaMenu && activeMegaMenu === 'home' && (
              <div style={styles.megaMenu}>
                <div style={styles.megaMenuColumn}>
                  <h4 style={styles.megaMenuHeading}>Bed</h4>
                  <Link to="/home/bedsheets" style={styles.megaMenuItem}>Bedsheets</Link>
                  <Link to="/home/duvet-covers" style={styles.megaMenuItem}>Duvet Covers</Link>
                  <Link to="/home/pillows" style={styles.megaMenuItem}>Pillows</Link>
                </div>
                <div style={styles.megaMenuColumn}>
                  <h4 style={styles.megaMenuHeading}>Bath</h4>
                  <Link to="/home/towels" style={styles.megaMenuItem}>Towels</Link>
                  <Link to="/home/bath-accessories" style={styles.megaMenuItem}>Bath Accessories</Link>
                </div>
                <div style={styles.megaMenuColumn}>
                  <h4 style={styles.megaMenuHeading}>Decor</h4>
                  <Link to="/home/cushions" style={styles.megaMenuItem}>Cushions</Link>
                  <Link to="/home/curtains" style={styles.megaMenuItem}>Curtains</Link>
                  <Link to="/home/rugs" style={styles.megaMenuItem}>Rugs</Link>
                </div>
              </div>
            )}
          </div>

          <div style={styles.categoryItem}>
            <span style={styles.categoryText}>SALE</span>
          </div>
        </div>
      </div>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: colors.light,
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    position: 'sticky',
    top: 0,
    zIndex: 100
  },
  promoBanner: {
    backgroundColor: colors.secondary,
    color: 'white',
    textAlign: 'center',
    padding: '8px',
    fontSize: '14px',
    letterSpacing: '1px'
  },
  mainNav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: `${spacing.medium} 5%`,
    margin: '0 auto'
  },
  logoContainer: {
    minWidth: '150px'
  },
  logo: {
    fontFamily: typography.heading,
    fontSize: '30px',
    color: colors.primary,
    textDecoration: 'none',
    fontWeight: 'bold'
  },
  navActions: {
    display: 'flex',
    alignItems: 'center',
    gap: '30px'
  },
  searchBar: {
    position: 'relative',
    width: '300px'
  },
  searchIcon: {
    position: 'absolute',
    left: '10px',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#999'
  },
  searchInput: {
    width: '100%',
    padding: '10px 10px 10px 35px',
    border: `1px solid #ddd`,
    borderRadius: '4px',
    fontSize: '14px'
  },
  iconGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px'
  },
  navLink: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: colors.dark,
    textDecoration: 'none',
    fontSize: '14px'
  },
  linkText: {
    marginTop: '5px',
    fontSize: '12px'
  },
  cartIcon: {
    position: 'relative'
  },
  cartCount: {
    position: 'absolute',
    top: '-8px',
    right: '-8px',
    backgroundColor: colors.secondary,
    color: 'white',
    borderRadius: '50%',
    width: '18px',
    height: '18px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '11px'
  },
  categoryNav: {
    borderTop: '1px solid #eee',
    borderBottom: '1px solid #eee',
    padding: '5px 0'
  },
  categoryContainer: {
    display: 'flex',
    justifyContent: 'center',
    maxWidth: '1200px',
    margin: '0 auto'
  },
  categoryItem: {
    padding: '15px 25px',
    position: 'relative',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center'
  },
  categoryText: {
    fontSize: '14px',
    fontWeight: 'bold',
    letterSpacing: '1px'
  },
  dropdownIcon: {
    marginLeft: '5px',
    fontSize: '12px'
  },
  megaMenu: {
    position: 'absolute',
    top: '100%',
    left: 0,
    width: '700px',
    backgroundColor: 'white',
    display: 'flex',
    padding: '20px',
    boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
    zIndex: 100,
    justifyContent: 'space-between'
  },
  megaMenuColumn: {
    flex: 1,
    padding: '0 15px'
  },
  megaMenuHeading: {
    fontSize: '16px',
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: '15px',
    paddingBottom: '5px',
    borderBottom: '1px solid #eee'
  },
  megaMenuItem: {
    display: 'block',
    color: colors.dark,
    textDecoration: 'none',
    padding: '8px 0',
    fontSize: '14px',
    transition: 'color 0.2s',
    ':hover': {
      color: colors.secondary
    }
  }
};

export default Header;
