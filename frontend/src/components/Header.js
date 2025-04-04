<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiUser, FiShoppingCart, FiHeart, FiMenu, FiChevronDown } from 'react-icons/fi';
=======
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiSearch, FiUser, FiShoppingCart, FiHeart, FiMenu, FiChevronDown, FiX } from 'react-icons/fi';
>>>>>>> 179e0b9 (commit)
=======
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiSearch, FiUser, FiShoppingCart, FiHeart, FiMenu, FiChevronDown, FiX } from 'react-icons/fi';
>>>>>>> ec17d2a (Initial commit)
import { colors, typography, spacing } from '../design-system';
import { useSelector } from 'react-redux';

const Header = () => {
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState(null);
<<<<<<< HEAD
<<<<<<< HEAD
  const cartItems = useSelector(state => state.cart);
=======
=======
>>>>>>> ec17d2a (Initial commit)
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [searchQuery, setSearchQuery] = useState('');
  const cartItems = useSelector(state => state.cart);
  const navigate = useNavigate();

  // Track window width for responsive design
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 768) {
        setShowMobileMenu(false);
        setShowMobileSearch(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth <= 768;
<<<<<<< HEAD
>>>>>>> 179e0b9 (commit)
=======
>>>>>>> ec17d2a (Initial commit)

  const toggleMegaMenu = (category) => {
    if (activeMegaMenu === category) {
      setShowMegaMenu(!showMegaMenu);
    } else {
      setActiveMegaMenu(category);
      setShowMegaMenu(true);
    }
  };

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> ec17d2a (Initial commit)
  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
    if (showMobileSearch) setShowMobileSearch(false);
  };

  const toggleMobileSearch = () => {
    setShowMobileSearch(!showMobileSearch);
    if (showMobileMenu) setShowMobileMenu(false);
  };

  // Calculate total items in cart
  const cartItemCount = cartItems.reduce((total, item) => total + (item.quantity || 0), 0);

  // Handle search form submission
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
      setShowMobileSearch(false);
    }
  };

<<<<<<< HEAD
>>>>>>> 179e0b9 (commit)
=======
>>>>>>> ec17d2a (Initial commit)
  return (
    <header style={styles.header}>
      <div style={styles.promoBanner}>
        Free Shipping on Orders Over Rs. 5000 | Use Code: FREESHIP
      </div>

      <nav style={styles.mainNav}>
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> ec17d2a (Initial commit)
        {isMobile && (
          <button
            style={styles.mobileMenuButton}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {showMobileMenu ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        )}

<<<<<<< HEAD
>>>>>>> 179e0b9 (commit)
        <div style={styles.logoContainer}>
          <Link to="/" style={styles.logo}>Mohsin Clothes House</Link>
        </div>

<<<<<<< HEAD
        <div style={styles.navActions}>
          <div style={styles.searchBar}>
=======
=======
        <div style={styles.logoContainer}>
          <Link to="/" style={styles.logo}>Mohsin Clothes</Link>
        </div>

>>>>>>> ec17d2a (Initial commit)
        {!isMobile && (
          <div style={styles.navActions}>
            <form onSubmit={handleSearchSubmit} style={styles.searchBar}>
              <FiSearch style={styles.searchIcon} />
              <input
                type="text"
                placeholder="Search products..."
                style={styles.searchInput}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>
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
                  {cartItemCount > 0 && (
                    <span style={styles.cartCount}>{cartItemCount}</span>
                  )}
                </div>
                <span style={styles.linkText}>Cart</span>
              </Link>
            </div>
          </div>
        )}

        {isMobile && (
          <div style={styles.mobileIcons}>
            <button
              style={styles.mobileIcon}
              onClick={toggleMobileSearch}
              aria-label="Search"
            >
              <FiSearch size={20} />
            </button>
            <Link to="/cart" style={styles.mobileIcon}>
              <div style={styles.cartIcon}>
                <FiShoppingCart size={20} />
                {cartItemCount > 0 && (
                  <span style={styles.cartCount}>{cartItemCount}</span>
                )}
              </div>
            </Link>
          </div>
        )}
      </nav>

      {showMobileSearch && (
        <div style={styles.mobileSearchContainer}>
          <form onSubmit={handleSearchSubmit} style={styles.mobileSearchBar}>
<<<<<<< HEAD
>>>>>>> 179e0b9 (commit)
=======
>>>>>>> ec17d2a (Initial commit)
            <FiSearch style={styles.searchIcon} />
            <input
              type="text"
              placeholder="Search products..."
              style={styles.searchInput}
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> ec17d2a (Initial commit)
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
            />
            <button
              type="button"
              style={styles.closeSearchButton}
              onClick={toggleMobileSearch}
              aria-label="Close search"
            >
              <FiX size={20} />
            </button>
          </form>
        </div>
      )}

      {!isMobile && (
        <div style={styles.categoryNav}>
          <div style={styles.categoryContainer}>
            <Link
              to="/category/women"
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
            </Link>

            <Link
              to="/category/men"
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
            </Link>

            <Link
              to="/category/kids"
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
            </Link>

            <Link
              to="/category/unstitched"
              style={styles.categoryItem}
            >
              <span style={styles.categoryText}>UNSTITCHED</span>
            </Link>

            <Link
              to="/category/home"
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
            </Link>

            <Link
              to="/category/sale"
              style={styles.categoryItem}
            >
              <span style={{...styles.categoryText, color: colors.secondary}}>SALE</span>
            </Link>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {showMobileMenu && (
        <div style={styles.mobileMenuContainer}>
          <div style={styles.mobileMenuLinks}>
            <Link to="/category/women" style={styles.mobileMenuLink}>WOMEN</Link>
            <Link to="/category/men" style={styles.mobileMenuLink}>MEN</Link>
            <Link to="/category/kids" style={styles.mobileMenuLink}>KIDS</Link>
            <Link to="/category/unstitched" style={styles.mobileMenuLink}>UNSTITCHED</Link>
            <Link to="/category/home" style={styles.mobileMenuLink}>HOME</Link>
            <Link to="/category/sale" style={{...styles.mobileMenuLink, color: colors.secondary}}>SALE</Link>
          </div>
          <div style={styles.mobileMenuDivider}></div>
          <div style={styles.mobileMenuLinks}>
            <Link to="/account" style={styles.mobileMenuLink}>My Account</Link>
            <Link to="/wishlist" style={styles.mobileMenuLink}>Wishlist</Link>
            <Link to="/orders" style={styles.mobileMenuLink}>Orders</Link>
            <Link to="/track" style={styles.mobileMenuLink}>Track Order</Link>
            <Link to="/contact" style={styles.mobileMenuLink}>Contact Us</Link>
          </div>
        </div>
      )}
<<<<<<< HEAD
>>>>>>> 179e0b9 (commit)
=======
>>>>>>> ec17d2a (Initial commit)
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: colors.light,
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    position: 'sticky',
    top: 0,
<<<<<<< HEAD
<<<<<<< HEAD
    zIndex: 100
=======
    zIndex: 100,
    width: '100%'
>>>>>>> 179e0b9 (commit)
=======
    zIndex: 100,
    width: '100%'
>>>>>>> ec17d2a (Initial commit)
  },
  promoBanner: {
    backgroundColor: colors.secondary,
    color: 'white',
    textAlign: 'center',
    padding: '8px',
    fontSize: '14px',
<<<<<<< HEAD
<<<<<<< HEAD
    letterSpacing: '1px'
=======
=======
>>>>>>> ec17d2a (Initial commit)
    letterSpacing: '1px',
    '@media (max-width: 768px)': {
      fontSize: '12px',
      padding: '6px'
    }
<<<<<<< HEAD
>>>>>>> 179e0b9 (commit)
=======
>>>>>>> ec17d2a (Initial commit)
  },
  mainNav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: `${spacing.medium} 5%`,
<<<<<<< HEAD
<<<<<<< HEAD
    margin: '0 auto'
  },
  logoContainer: {
    minWidth: '150px'
=======
=======
>>>>>>> ec17d2a (Initial commit)
    margin: '0 auto',
    '@media (max-width: 768px)': {
      padding: `${spacing.small} 5%`
    }
  },
  logoContainer: {
    minWidth: '150px',
    '@media (max-width: 768px)': {
      textAlign: 'center',
      flex: 1
    }
<<<<<<< HEAD
>>>>>>> 179e0b9 (commit)
=======
>>>>>>> ec17d2a (Initial commit)
  },
  logo: {
    fontFamily: typography.heading,
    fontSize: '30px',
    color: colors.primary,
    textDecoration: 'none',
<<<<<<< HEAD
<<<<<<< HEAD
    fontWeight: 'bold'
=======
=======
>>>>>>> ec17d2a (Initial commit)
    fontWeight: 'bold',
    '@media (max-width: 768px)': {
      fontSize: '22px'
    }
<<<<<<< HEAD
>>>>>>> 179e0b9 (commit)
=======
>>>>>>> ec17d2a (Initial commit)
  },
  navActions: {
    display: 'flex',
    alignItems: 'center',
    gap: '30px'
  },
  searchBar: {
    position: 'relative',
<<<<<<< HEAD
<<<<<<< HEAD
    width: '300px'
=======
=======
>>>>>>> ec17d2a (Initial commit)
    width: '300px',
    '@media (max-width: 992px)': {
      width: '200px'
    }
<<<<<<< HEAD
>>>>>>> 179e0b9 (commit)
=======
>>>>>>> ec17d2a (Initial commit)
  },
  searchIcon: {
    position: 'absolute',
    left: '10px',
    top: '50%',
    transform: 'translateY(-50%)',
<<<<<<< HEAD
<<<<<<< HEAD
    color: '#999'
=======
    color: '#999',
    zIndex: 1
>>>>>>> 179e0b9 (commit)
=======
    color: '#999',
    zIndex: 1
>>>>>>> ec17d2a (Initial commit)
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
<<<<<<< HEAD
<<<<<<< HEAD
    margin: '0 auto'
  },
  categoryItem: {
    padding: '15px 25px',
    position: 'relative',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center'
=======
=======
>>>>>>> ec17d2a (Initial commit)
    margin: '0 auto',
    flexWrap: 'wrap'
  },
  categoryItem: {
    padding: '15px 20px',
    position: 'relative',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    color: colors.dark,
    '@media (max-width: 992px)': {
      padding: '15px 10px',
      fontSize: '13px'
    }
<<<<<<< HEAD
>>>>>>> 179e0b9 (commit)
=======
>>>>>>> ec17d2a (Initial commit)
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
<<<<<<< HEAD
<<<<<<< HEAD
    justifyContent: 'space-between'
=======
=======
>>>>>>> ec17d2a (Initial commit)
    justifyContent: 'space-between',
    '@media (max-width: 992px)': {
      width: '600px'
    }
<<<<<<< HEAD
>>>>>>> 179e0b9 (commit)
=======
>>>>>>> ec17d2a (Initial commit)
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
<<<<<<< HEAD
<<<<<<< HEAD
    transition: 'color 0.2s',
    ':hover': {
      color: colors.secondary
    }
=======
=======
>>>>>>> ec17d2a (Initial commit)
    transition: 'color 0.2s'
  },
  // Mobile styles
  mobileMenuButton: {
    background: 'none',
    border: 'none',
    padding: '5px',
    cursor: 'pointer',
    color: colors.dark
  },
  mobileIcons: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px'
  },
  mobileIcon: {
    background: 'none',
    border: 'none',
    padding: '5px',
    cursor: 'pointer',
    color: colors.dark,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none'
  },
  mobileSearchContainer: {
    padding: '0 5% 15px',
    borderBottom: '1px solid #eee'
  },
  mobileSearchBar: {
    position: 'relative',
    width: '100%'
  },
  closeSearchButton: {
    position: 'absolute',
    right: '10px',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'none',
    border: 'none',
    padding: '5px',
    cursor: 'pointer',
    color: '#999'
  },
  mobileMenuContainer: {
    backgroundColor: 'white',
    position: 'absolute',
    top: '100%',
    left: 0,
    width: '100%',
    zIndex: 99,
    boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
    padding: '15px 0',
    maxHeight: '80vh',
    overflowY: 'auto'
  },
  mobileMenuLinks: {
    display: 'flex',
    flexDirection: 'column'
  },
  mobileMenuLink: {
    padding: '12px 5%',
    textDecoration: 'none',
    color: colors.dark,
    fontSize: '16px',
    fontWeight: 'bold',
    borderBottom: '1px solid #f5f5f5'
  },
  mobileMenuDivider: {
    height: '10px',
    backgroundColor: '#f5f5f5',
    margin: '10px 0'
<<<<<<< HEAD
>>>>>>> 179e0b9 (commit)
=======
>>>>>>> ec17d2a (Initial commit)
  }
};

export default Header;
