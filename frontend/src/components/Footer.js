<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';
import { FiMapPin, FiPhone, FiMail, FiFacebook, FiInstagram, FiTwitter, FiYoutube } from 'react-icons/fi';
import { colors, spacing, typography } from '../design-system';

const Footer = () => {
=======
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMapPin, FiPhone, FiMail, FiFacebook, FiInstagram, FiTwitter, FiYoutube, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { colors, spacing, typography } from '../design-system';

const Footer = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    if (expandedSection === section) {
      setExpandedSection(null);
    } else {
      setExpandedSection(section);
    }
  };

  // Check if we're on mobile
  const isMobile = window.innerWidth <= 768;

>>>>>>> 179e0b9 (commit)
  return (
    <footer style={styles.footer}>
      <div style={styles.footerTop}>
        <div style={styles.container}>
          <div style={styles.footerGrid}>
            {/* Shop Column */}
            <div style={styles.footerColumn}>
<<<<<<< HEAD
              <h3 style={styles.columnTitle}>Shop</h3>
              <ul style={styles.linkList}>
                <li style={styles.linkItem}>
                  <Link to="/women" style={styles.footerLink}>Women</Link>
                </li>
                <li style={styles.linkItem}>
                  <Link to="/men" style={styles.footerLink}>Men</Link>
                </li>
                <li style={styles.linkItem}>
                  <Link to="/kids" style={styles.footerLink}>Kids</Link>
                </li>
                <li style={styles.linkItem}>
                  <Link to="/unstitched" style={styles.footerLink}>Unstitched</Link>
                </li>
                <li style={styles.linkItem}>
                  <Link to="/home" style={styles.footerLink}>Home</Link>
                </li>
                <li style={styles.linkItem}>
                  <Link to="/sale" style={styles.footerLink}>Sale</Link>
=======
              <div
                style={styles.columnHeader}
                onClick={() => isMobile && toggleSection('shop')}
              >
                <h3 style={styles.columnTitle}>Shop</h3>
                {isMobile && (
                  expandedSection === 'shop' ? <FiChevronUp /> : <FiChevronDown />
                )}
              </div>
              <ul
                style={{
                  ...styles.linkList,
                  ...(isMobile && {
                    display: expandedSection === 'shop' ? 'block' : 'none'
                  })
                }}
              >
                <li style={styles.linkItem}>
                  <Link to="/category/women" style={styles.footerLink}>Women</Link>
                </li>
                <li style={styles.linkItem}>
                  <Link to="/category/men" style={styles.footerLink}>Men</Link>
                </li>
                <li style={styles.linkItem}>
                  <Link to="/category/kids" style={styles.footerLink}>Kids</Link>
                </li>
                <li style={styles.linkItem}>
                  <Link to="/category/unstitched" style={styles.footerLink}>Unstitched</Link>
                </li>
                <li style={styles.linkItem}>
                  <Link to="/category/home" style={styles.footerLink}>Home</Link>
                </li>
                <li style={styles.linkItem}>
                  <Link to="/category/sale" style={styles.footerLink}>Sale</Link>
>>>>>>> 179e0b9 (commit)
                </li>
              </ul>
            </div>

            {/* Information Column */}
            <div style={styles.footerColumn}>
<<<<<<< HEAD
              <h3 style={styles.columnTitle}>Information</h3>
              <ul style={styles.linkList}>
=======
              <div
                style={styles.columnHeader}
                onClick={() => isMobile && toggleSection('info')}
              >
                <h3 style={styles.columnTitle}>Information</h3>
                {isMobile && (
                  expandedSection === 'info' ? <FiChevronUp /> : <FiChevronDown />
                )}
              </div>
              <ul
                style={{
                  ...styles.linkList,
                  ...(isMobile && {
                    display: expandedSection === 'info' ? 'block' : 'none'
                  })
                }}
              >
>>>>>>> 179e0b9 (commit)
                <li style={styles.linkItem}>
                  <Link to="/about" style={styles.footerLink}>About Us</Link>
                </li>
                <li style={styles.linkItem}>
                  <Link to="/contact" style={styles.footerLink}>Contact Us</Link>
                </li>
                <li style={styles.linkItem}>
                  <Link to="/stores" style={styles.footerLink}>Store Locator</Link>
                </li>
                <li style={styles.linkItem}>
                  <Link to="/careers" style={styles.footerLink}>Careers</Link>
                </li>
                <li style={styles.linkItem}>
                  <Link to="/privacy" style={styles.footerLink}>Privacy Policy</Link>
                </li>
                <li style={styles.linkItem}>
                  <Link to="/terms" style={styles.footerLink}>Terms & Conditions</Link>
                </li>
              </ul>
            </div>

            {/* Customer Service Column */}
            <div style={styles.footerColumn}>
<<<<<<< HEAD
              <h3 style={styles.columnTitle}>Customer Service</h3>
              <ul style={styles.linkList}>
=======
              <div
                style={styles.columnHeader}
                onClick={() => isMobile && toggleSection('service')}
              >
                <h3 style={styles.columnTitle}>Customer Service</h3>
                {isMobile && (
                  expandedSection === 'service' ? <FiChevronUp /> : <FiChevronDown />
                )}
              </div>
              <ul
                style={{
                  ...styles.linkList,
                  ...(isMobile && {
                    display: expandedSection === 'service' ? 'block' : 'none'
                  })
                }}
              >
>>>>>>> 179e0b9 (commit)
                <li style={styles.linkItem}>
                  <Link to="/orders-tracking" style={styles.footerLink}>Track Order</Link>
                </li>
                <li style={styles.linkItem}>
                  <Link to="/returns" style={styles.footerLink}>Returns & Exchange</Link>
                </li>
                <li style={styles.linkItem}>
                  <Link to="/shipping-policy" style={styles.footerLink}>Shipping Policy</Link>
                </li>
                <li style={styles.linkItem}>
                  <Link to="/faq" style={styles.footerLink}>FAQs</Link>
                </li>
              </ul>
            </div>

            {/* Contact Column */}
            <div style={styles.footerColumn}>
<<<<<<< HEAD
              <h3 style={styles.columnTitle}>Contact Us</h3>
              <ul style={styles.contactList}>
                <li style={styles.contactItem}>
                  <FiMapPin style={styles.contactIcon} />
                  <span>Plot # ST-2/6, Sector 23, Korangi Industrial Area, Karachi, Pakistan</span>
                </li>
                <li style={styles.contactItem}>
                  <FiPhone style={styles.contactIcon} />
                  <span>+92 21 111-485-485</span>
                </li>
                <li style={styles.contactItem}>
                  <FiMail style={styles.contactIcon} />
                  <span>info@gulahmedshop.com</span>
=======
              <div
                style={styles.columnHeader}
                onClick={() => isMobile && toggleSection('contact')}
              >
                <h3 style={styles.columnTitle}>Contact Us</h3>
                {isMobile && (
                  expandedSection === 'contact' ? <FiChevronUp /> : <FiChevronDown />
                )}
              </div>
              <ul
                style={{
                  ...styles.contactList,
                  ...(isMobile && {
                    display: expandedSection === 'contact' ? 'block' : 'none'
                  })
                }}
              >
                <li style={styles.contactItem}>
                  <FiMapPin style={styles.contactIcon} />
                  <span>123 Fashion Street, Textile City, Karachi, Pakistan</span>
                </li>
                <li style={styles.contactItem}>
                  <FiPhone style={styles.contactIcon} />
                  <span>+92 21 111-222-333</span>
                </li>
                <li style={styles.contactItem}>
                  <FiMail style={styles.contactIcon} />
                  <span>info@mohsinclothes.com</span>
>>>>>>> 179e0b9 (commit)
                </li>
              </ul>
            </div>

            {/* Newsletter Signup */}
            <div style={styles.footerColumn}>
<<<<<<< HEAD
              <h3 style={styles.columnTitle}>Newsletter</h3>
              <p style={styles.newsletterText}>
                Subscribe to our newsletter and get exclusive offers, new arrivals, and promotions.
              </p>
              <div style={styles.newsletterForm}>
                <input
                  type="email"
                  placeholder="Your email address"
                  style={styles.newsletterInput}
                />
                <button style={styles.newsletterButton}>Subscribe</button>
              </div>

              <div style={styles.socialLinks}>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
                  <FiFacebook size={20} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
                  <FiInstagram size={20} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
                  <FiTwitter size={20} />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
                  <FiYoutube size={20} />
                </a>
=======
              <div
                style={styles.columnHeader}
                onClick={() => isMobile && toggleSection('newsletter')}
              >
                <h3 style={styles.columnTitle}>Newsletter</h3>
                {isMobile && (
                  expandedSection === 'newsletter' ? <FiChevronUp /> : <FiChevronDown />
                )}
              </div>
              <div
                style={{
                  ...(isMobile && {
                    display: expandedSection === 'newsletter' ? 'block' : 'none'
                  })
                }}
              >
                <p style={styles.newsletterText}>
                  Subscribe to our newsletter and get exclusive offers, new arrivals, and promotions.
                </p>
                <div style={styles.newsletterForm}>
                  <input
                    type="email"
                    placeholder="Your email address"
                    style={styles.newsletterInput}
                  />
                  <button style={styles.newsletterButton}>Subscribe</button>
                </div>

                <div style={styles.socialLinks}>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
                    <FiFacebook size={20} />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
                    <FiInstagram size={20} />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
                    <FiTwitter size={20} />
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
                    <FiYoutube size={20} />
                  </a>
                </div>
>>>>>>> 179e0b9 (commit)
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={styles.footerBottom}>
        <div style={styles.container}>
          <div style={styles.footerBottomContent}>
            <p style={styles.copyright}>
<<<<<<< HEAD
              © {new Date().getFullYear()} GulAhmed. All Rights Reserved.
=======
              © {new Date().getFullYear()} Mohsin Clothes House. All Rights Reserved.
>>>>>>> 179e0b9 (commit)
            </p>
            <div style={styles.paymentMethods}>
              <span style={styles.paymentLabel}>Payment Methods:</span>
              <img
                src={`${process.env.PUBLIC_URL}/images/payment-methods.png`}
                alt="Payment Methods"
                style={styles.paymentImage}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#f8f8f8',
    color: colors.dark,
    fontSize: '14px'
  },
  footerTop: {
<<<<<<< HEAD
    padding: '50px 0'
=======
    padding: '50px 0',
    '@media (max-width: 768px)': {
      padding: '30px 0'
    }
>>>>>>> 179e0b9 (commit)
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px'
  },
  footerGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
<<<<<<< HEAD
    gap: '30px'
  },
  footerColumn: {
    marginBottom: '20px'
=======
    gap: '30px',
    '@media (max-width: 768px)': {
      gridTemplateColumns: '1fr',
      gap: '0'
    }
  },
  footerColumn: {
    marginBottom: '20px',
    '@media (max-width: 768px)': {
      marginBottom: '0',
      borderBottom: '1px solid #eee'
    }
  },
  columnHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    cursor: 'pointer',
    padding: '15px 0',
    '@media (max-width: 768px)': {
      padding: '15px 0'
    }
>>>>>>> 179e0b9 (commit)
  },
  columnTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '20px',
<<<<<<< HEAD
    color: colors.primary
=======
    color: colors.primary,
    '@media (max-width: 768px)': {
      marginBottom: '0',
      fontSize: '16px'
    }
>>>>>>> 179e0b9 (commit)
  },
  linkList: {
    listStyle: 'none',
    padding: 0,
<<<<<<< HEAD
    margin: 0
=======
    margin: 0,
    '@media (max-width: 768px)': {
      padding: '0 0 15px 15px'
    }
>>>>>>> 179e0b9 (commit)
  },
  linkItem: {
    marginBottom: '12px'
  },
  footerLink: {
    color: colors.dark,
    textDecoration: 'none',
<<<<<<< HEAD
    transition: 'color 0.2s ease',
    ':hover': {
      color: colors.secondary
    }
=======
    transition: 'color 0.2s ease'
>>>>>>> 179e0b9 (commit)
  },
  contactList: {
    listStyle: 'none',
    padding: 0,
<<<<<<< HEAD
    margin: 0
=======
    margin: 0,
    '@media (max-width: 768px)': {
      padding: '0 0 15px 15px'
    }
>>>>>>> 179e0b9 (commit)
  },
  contactItem: {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: '15px'
  },
  contactIcon: {
    marginRight: '10px',
    marginTop: '3px'
  },
  newsletterText: {
    marginBottom: '15px',
<<<<<<< HEAD
    lineHeight: '1.5'
  },
  newsletterForm: {
    display: 'flex',
    marginBottom: '20px'
=======
    lineHeight: '1.5',
    '@media (max-width: 768px)': {
      padding: '0 0 0 15px'
    }
  },
  newsletterForm: {
    display: 'flex',
    marginBottom: '20px',
    '@media (max-width: 768px)': {
      padding: '0 15px',
      flexDirection: 'column'
    }
>>>>>>> 179e0b9 (commit)
  },
  newsletterInput: {
    flex: '1',
    padding: '10px',
    border: '1px solid #ddd',
    borderRight: 'none',
    borderTopLeftRadius: '4px',
<<<<<<< HEAD
    borderBottomLeftRadius: '4px'
=======
    borderBottomLeftRadius: '4px',
    '@media (max-width: 768px)': {
      borderRight: '1px solid #ddd',
      borderRadius: '4px',
      marginBottom: '10px'
    }
>>>>>>> 179e0b9 (commit)
  },
  newsletterButton: {
    padding: '10px 15px',
    backgroundColor: colors.secondary,
    color: 'white',
    border: 'none',
    borderTopRightRadius: '4px',
    borderBottomRightRadius: '4px',
<<<<<<< HEAD
    cursor: 'pointer'
  },
  socialLinks: {
    display: 'flex',
    gap: '15px'
=======
    cursor: 'pointer',
    '@media (max-width: 768px)': {
      borderRadius: '4px',
      padding: '12px'
    }
  },
  socialLinks: {
    display: 'flex',
    gap: '15px',
    '@media (max-width: 768px)': {
      padding: '0 15px 15px'
    }
>>>>>>> 179e0b9 (commit)
  },
  socialLink: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: 'white',
    color: colors.dark,
<<<<<<< HEAD
    transition: 'background-color 0.2s ease, color 0.2s ease',
    ':hover': {
      backgroundColor: colors.secondary,
      color: 'white'
    }
=======
    transition: 'background-color 0.2s ease, color 0.2s ease'
>>>>>>> 179e0b9 (commit)
  },
  footerBottom: {
    borderTop: '1px solid #ddd',
    padding: '20px 0',
    backgroundColor: 'white'
  },
  footerBottomContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
<<<<<<< HEAD
    gap: '20px'
=======
    gap: '20px',
    '@media (max-width: 768px)': {
      flexDirection: 'column',
      textAlign: 'center'
    }
>>>>>>> 179e0b9 (commit)
  },
  copyright: {
    margin: 0
  },
  paymentMethods: {
    display: 'flex',
    alignItems: 'center',
<<<<<<< HEAD
    gap: '10px'
=======
    gap: '10px',
    '@media (max-width: 768px)': {
      flexDirection: 'column'
    }
>>>>>>> 179e0b9 (commit)
  },
  paymentLabel: {
    fontWeight: 'bold'
  },
  paymentImage: {
    height: '24px'
  }
};

export default Footer;
