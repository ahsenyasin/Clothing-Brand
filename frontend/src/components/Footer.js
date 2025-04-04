import React from 'react';
import { Link } from 'react-router-dom';
import { FiMapPin, FiPhone, FiMail, FiFacebook, FiInstagram, FiTwitter, FiYoutube } from 'react-icons/fi';
import { colors, spacing, typography } from '../design-system';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerTop}>
        <div style={styles.container}>
          <div style={styles.footerGrid}>
            {/* Shop Column */}
            <div style={styles.footerColumn}>
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
                </li>
              </ul>
            </div>

            {/* Information Column */}
            <div style={styles.footerColumn}>
              <h3 style={styles.columnTitle}>Information</h3>
              <ul style={styles.linkList}>
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
              <h3 style={styles.columnTitle}>Customer Service</h3>
              <ul style={styles.linkList}>
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
                </li>
              </ul>
            </div>

            {/* Newsletter Signup */}
            <div style={styles.footerColumn}>
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
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={styles.footerBottom}>
        <div style={styles.container}>
          <div style={styles.footerBottomContent}>
            <p style={styles.copyright}>
              © {new Date().getFullYear()} GulAhmed. All Rights Reserved.
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
    padding: '50px 0'
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px'
  },
  footerGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '30px'
  },
  footerColumn: {
    marginBottom: '20px'
  },
  columnTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: colors.primary
  },
  linkList: {
    listStyle: 'none',
    padding: 0,
    margin: 0
  },
  linkItem: {
    marginBottom: '12px'
  },
  footerLink: {
    color: colors.dark,
    textDecoration: 'none',
    transition: 'color 0.2s ease',
    ':hover': {
      color: colors.secondary
    }
  },
  contactList: {
    listStyle: 'none',
    padding: 0,
    margin: 0
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
    lineHeight: '1.5'
  },
  newsletterForm: {
    display: 'flex',
    marginBottom: '20px'
  },
  newsletterInput: {
    flex: '1',
    padding: '10px',
    border: '1px solid #ddd',
    borderRight: 'none',
    borderTopLeftRadius: '4px',
    borderBottomLeftRadius: '4px'
  },
  newsletterButton: {
    padding: '10px 15px',
    backgroundColor: colors.secondary,
    color: 'white',
    border: 'none',
    borderTopRightRadius: '4px',
    borderBottomRightRadius: '4px',
    cursor: 'pointer'
  },
  socialLinks: {
    display: 'flex',
    gap: '15px'
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
    transition: 'background-color 0.2s ease, color 0.2s ease',
    ':hover': {
      backgroundColor: colors.secondary,
      color: 'white'
    }
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
    gap: '20px'
  },
  copyright: {
    margin: 0
  },
  paymentMethods: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
  },
  paymentLabel: {
    fontWeight: 'bold'
  },
  paymentImage: {
    height: '24px'
  }
};

export default Footer;
