import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import SliderBanner from '../components/SliderBanner';
import ProductCard from '../components/ProductCard';
import Loading from '../components/Loading';
import Error from '../components/Error';
import { colors, spacing } from '../design-system';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Simulate API call
        const mockProducts = [
          {
            id: 1,
            name: "Embroidered Lawn Suit",
            price: 4999,
            image: `${process.env.PUBLIC_URL}/images/products/product1.jpeg`,
            category: "Women"
          },
          {
            id: 2,
            name: "Printed Cotton Shirt",
            price: 2499,
            image: `${process.env.PUBLIC_URL}/images/products/product2.png`,
            category: "Men"
          },
          {
            id: 3,
            name: "Kids Casual Outfit",
            price: 1999,
            image: `${process.env.PUBLIC_URL}/images/products/product3.jpeg`,
            category: "Kids"
          },
          {
            id: 4,
            name: "Formal Embroidery Suit",
            price: 5999,
            image: `${process.env.PUBLIC_URL}/images/products/product4.jpeg`,
            category: "Women"
          },
          {
            id: 5,
            name: "Casual Summer T-Shirt",
            price: 1499,
            image: `${process.env.PUBLIC_URL}/images/products/product5.jpeg`,
            category: "Men"
          },
          {
            id: 6,
            name: "Luxury Formal Collection",
            price: 8999,
            image: `${process.env.PUBLIC_URL}/images/products/product6.jpeg`,
            category: "Women"
          },
          {
            id: 7,
            name: "Casual Denim Shirt",
            price: 2999,
            image: `${process.env.PUBLIC_URL}/images/products/product7.jpeg`,
            category: "Men"
          },
          {
            id: 8,
            name: "Kids Party Dress",
            price: 3499,
            image: `${process.env.PUBLIC_URL}/images/products/product8.jpeg`,
            category: "Kids"
          }
        ];

        setProducts(mockProducts);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <Loading />;
  if (error) return <Error message={error} />;

  // Filter products by category
  const womenProducts = products.filter(product => product.category === "Women");
  const menProducts = products.filter(product => product.category === "Men");
  const kidsProducts = products.filter(product => product.category === "Kids");

  return (
    <div className="home-page">
      <SliderBanner />

      {/* Category Navigation */}
      <section style={styles.categoryNav}>
        <div style={styles.categoryContainer}>
          <Link to="/category/women" style={styles.categoryItem}>
            <div style={styles.categoryIcon}>
              <img src={`${process.env.PUBLIC_URL}/images/products/product1.jpeg`} alt="Women" style={styles.categoryImage} />
            </div>
            <h3 style={styles.categoryTitle}>Women</h3>
          </Link>

          <Link to="/category/men" style={styles.categoryItem}>
            <div style={styles.categoryIcon}>
              <img src={`${process.env.PUBLIC_URL}/images/products/product2.png`} alt="Men" style={styles.categoryImage} />
            </div>
            <h3 style={styles.categoryTitle}>Men</h3>
          </Link>

          <Link to="/category/kids" style={styles.categoryItem}>
            <div style={styles.categoryIcon}>
              <img src={`${process.env.PUBLIC_URL}/images/products/product3.jpeg`} alt="Kids" style={styles.categoryImage} />
            </div>
            <h3 style={styles.categoryTitle}>Kids</h3>
          </Link>

          <Link to="/category/unstitched" style={styles.categoryItem}>
            <div style={styles.categoryIcon}>
              <img src={`${process.env.PUBLIC_URL}/images/products/product4.jpeg`} alt="Unstitched" style={styles.categoryImage} />
            </div>
            <h3 style={styles.categoryTitle}>Unstitched</h3>
          </Link>

          <Link to="/category/home" style={styles.categoryItem}>
            <div style={styles.categoryIcon}>
              <img src={`${process.env.PUBLIC_URL}/images/products/product5.jpeg`} alt="Home" style={styles.categoryImage} />
            </div>
            <h3 style={styles.categoryTitle}>Home</h3>
          </Link>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="collection-section" style={styles.section}>
        <div style={styles.sectionHeader}>
          <h2 style={styles.sectionTitle}>New Arrivals</h2>
          <Link to="/new-arrivals" style={styles.viewAll}>View All</Link>
        </div>
        <div className="product-grid" style={styles.productGrid}>
          {products.slice(0, 4).map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Women's Collection */}
      <section className="collection-section" style={{...styles.section, backgroundColor: '#f8f8f8'}}>
        <div style={styles.sectionHeader}>
          <h2 style={styles.sectionTitle}>Women's Collection</h2>
          <Link to="/category/women" style={styles.viewAll}>View All</Link>
        </div>
        <div className="product-grid" style={styles.productGrid}>
          {womenProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Promotional Banner */}
      <section style={styles.promoBanner}>
        <div style={styles.promoContent}>
          <h2 style={styles.promoTitle}>SUMMER SALE</h2>
          <p style={styles.promoText}>Up to 50% off on selected items</p>
          <Link to="/sale" style={styles.promoButton}>Shop Now</Link>
        </div>
      </section>

      {/* Men's Collection */}
      <section className="collection-section" style={styles.section}>
        <div style={styles.sectionHeader}>
          <h2 style={styles.sectionTitle}>Men's Collection</h2>
          <Link to="/category/men" style={styles.viewAll}>View All</Link>
        </div>
        <div className="product-grid" style={styles.productGrid}>
          {menProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Kids' Collection */}
      <section className="collection-section" style={{...styles.section, backgroundColor: '#f8f8f8'}}>
        <div style={styles.sectionHeader}>
          <h2 style={styles.sectionTitle}>Kids' Collection</h2>
          <Link to="/category/kids" style={styles.viewAll}>View All</Link>
        </div>
        <div className="product-grid" style={styles.productGrid}>
          {kidsProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

const styles = {
  section: {
    padding: '40px 5%',
  },
  sectionHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px'
  },
  sectionTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: colors.dark
  },
  viewAll: {
    color: colors.secondary,
    textDecoration: 'none',
    fontWeight: 'bold'
  },
  productGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '30px'
  },
  categoryNav: {
    padding: '20px 5%',
    marginBottom: '20px'
  },
  categoryContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '15px',
    flexWrap: 'wrap'
  },
  categoryItem: {
    textDecoration: 'none',
    textAlign: 'center',
    flex: '1',
    minWidth: '120px',
    color: colors.dark,
    transition: 'transform 0.3s ease'
  },
  categoryIcon: {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    overflow: 'hidden',
    margin: '0 auto 10px',
    border: `3px solid ${colors.light}`
  },
  categoryImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  categoryTitle: {
    fontSize: '16px',
    fontWeight: 'bold',
    margin: '5px 0'
  },
  promoBanner: {
    background: `url(${process.env.PUBLIC_URL}/images/banners/banner2.png) center/cover no-repeat`,
    height: '300px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '40px 0',
    textAlign: 'center'
  },
  promoContent: {
    backgroundColor: 'rgba(255,255,255,0.85)',
    padding: '30px 50px',
    borderRadius: '5px'
  },
  promoTitle: {
    fontSize: '32px',
    fontWeight: 'bold',
    color: colors.secondary,
    marginBottom: '10px'
  },
  promoText: {
    fontSize: '18px',
    color: colors.dark,
    marginBottom: '20px'
  },
  promoButton: {
    display: 'inline-block',
    padding: '12px 30px',
    backgroundColor: colors.secondary,
    color: 'white',
    textDecoration: 'none',
    borderRadius: '4px',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease'
  }
};

export default Home;
