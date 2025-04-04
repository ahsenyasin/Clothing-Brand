import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import Loading from '../components/Loading';
import Error from '../components/Error';
import { colors } from '../design-system';

const CategoryPage = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [subcategories, setSubcategories] = useState([]);

  // Format the category name for display
  const formatCategoryName = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        // Simulate API call - in a real app, you would fetch from backend
        const mockProducts = [
          {
            id: 1,
            name: "Embroidered Lawn Suit",
            price: 4999,
            image: `${process.env.PUBLIC_URL}/images/products/product1.jpeg`,
            category: "women",
            subcategory: "embroidered"
          },
          {
            id: 2,
            name: "Printed Cotton Shirt",
            price: 2499,
            image: `${process.env.PUBLIC_URL}/images/products/product2.png`,
            category: "men",
            subcategory: "shirts"
          },
          {
            id: 3,
            name: "Kids Casual Outfit",
            price: 1999,
            image: `${process.env.PUBLIC_URL}/images/products/product3.jpeg`,
            category: "kids",
            subcategory: "boys-outfits"
          },
          {
            id: 4,
            name: "Formal Embroidery Suit",
            price: 5999,
            image: `${process.env.PUBLIC_URL}/images/products/product4.jpeg`,
            category: "women",
            subcategory: "formal"
          },
          {
            id: 5,
            name: "Casual Summer T-Shirt",
            price: 1499,
            image: `${process.env.PUBLIC_URL}/images/products/product5.jpeg`,
            category: "men",
            subcategory: "casual"
          },
          {
            id: 6,
            name: "Luxury Formal Collection",
            price: 8999,
            image: `${process.env.PUBLIC_URL}/images/products/product6.jpeg`,
            category: "women",
            subcategory: "formal"
          },
          {
            id: 7,
            name: "Casual Denim Shirt",
            price: 2999,
            image: `${process.env.PUBLIC_URL}/images/products/product7.jpeg`,
            category: "men",
            subcategory: "denim"
          },
          {
            id: 8,
            name: "Kids Party Dress",
            price: 3499,
            image: `${process.env.PUBLIC_URL}/images/products/product8.jpeg`,
            category: "kids",
            subcategory: "girls-dresses"
          },
          {
            id: 9,
            name: "Printed Lawn Collection",
            price: 3999,
            image: `${process.env.PUBLIC_URL}/images/products/product9.jpeg`,
            category: "women",
            subcategory: "printed"
          },
          {
            id: 10,
            name: "Men's Formal Suit",
            price: 7999,
            image: `${process.env.PUBLIC_URL}/images/products/product10.jpeg`,
            category: "men",
            subcategory: "suits"
          },
          {
            id: 11,
            name: "Kids School Uniform",
            price: 2499,
            image: `${process.env.PUBLIC_URL}/images/products/product11.jpeg`,
            category: "kids",
            subcategory: "boys-outfits"
          },
          {
            id: 12,
            name: "Silk Evening Gown",
            price: 9999,
            image: `${process.env.PUBLIC_URL}/images/products/product12.jpeg`,
            category: "women",
            subcategory: "formal"
          },
          {
            id: 13,
            name: "Men's Kurta",
            price: 3499,
            image: `${process.env.PUBLIC_URL}/images/products/product13.jpeg`,
            category: "men",
            subcategory: "kurtas"
          },
          {
            id: 14,
            name: "Kids Summer Collection",
            price: 1799,
            image: `${process.env.PUBLIC_URL}/images/products/product14.jpeg`,
            category: "kids",
            subcategory: "girls-tops"
          },
          {
            id: 15,
            name: "Bedsheet Set",
            price: 4999,
            image: `${process.env.PUBLIC_URL}/images/products/product15.png`,
            category: "home",
            subcategory: "bedsheets"
          }
        ];

        // Filter products by category
        const filteredProducts = mockProducts.filter(
          product => product.category.toLowerCase() === category.toLowerCase()
        );

        // Get unique subcategories for this category
        const uniqueSubcategories = [...new Set(filteredProducts.map(item => item.subcategory))];
        setSubcategories(uniqueSubcategories);

        setProducts(filteredProducts);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  if (loading) return <Loading />;
  if (error) return <Error message={error} />;

  return (
    <div className="category-page" style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>{formatCategoryName(category)} Collection</h1>
        <p style={styles.subtitle}>
          Explore our {formatCategoryName(category)} collection and find your perfect style.
        </p>
      </div>

      <div style={styles.content}>
        <div style={styles.sidebar}>
          <div style={styles.filterSection}>
            <h3 style={styles.filterTitle}>Categories</h3>
            <ul style={styles.filterList}>
              {subcategories.map((subcat, index) => (
                <li key={index} style={styles.filterItem}>
                  <Link to={`/${category}/${subcat}`} style={styles.filterLink}>
                    {formatCategoryName(subcat.replace('-', ' '))}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div style={styles.filterSection}>
            <h3 style={styles.filterTitle}>Price Range</h3>
            <ul style={styles.filterList}>
              <li style={styles.filterItem}>
                <Link to="#" style={styles.filterLink}>Under Rs. 2000</Link>
              </li>
              <li style={styles.filterItem}>
                <Link to="#" style={styles.filterLink}>Rs. 2000 - Rs. 5000</Link>
              </li>
              <li style={styles.filterItem}>
                <Link to="#" style={styles.filterLink}>Above Rs. 5000</Link>
              </li>
            </ul>
          </div>
        </div>

        <div style={styles.productSection}>
          <div style={styles.productHeader}>
            <span>{products.length} products found</span>
            <div style={styles.sortOptions}>
              <label htmlFor="sort">Sort by: </label>
              <select id="sort" style={styles.sortSelect}>
                <option value="newest">Newest</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="popularity">Popularity</option>
              </select>
            </div>
          </div>

          <div style={styles.productGrid}>
            {products.length > 0 ? (
              products.map(product => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <div style={styles.noProducts}>
                <p>No products found in this category.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px 5%',
    maxWidth: '1400px',
    margin: '0 auto'
  },
  header: {
    textAlign: 'center',
    marginBottom: '40px'
  },
  title: {
    fontSize: '32px',
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: '10px'
  },
  subtitle: {
    fontSize: '16px',
    color: '#666',
    maxWidth: '600px',
    margin: '0 auto'
  },
  content: {
    display: 'flex',
    gap: '30px'
  },
  sidebar: {
    width: '250px',
    flexShrink: 0
  },
  filterSection: {
    marginBottom: '30px'
  },
  filterTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: colors.primary,
    paddingBottom: '10px',
    borderBottom: '1px solid #eee',
    marginBottom: '15px'
  },
  filterList: {
    listStyle: 'none',
    padding: 0,
    margin: 0
  },
  filterItem: {
    marginBottom: '10px'
  },
  filterLink: {
    color: '#444',
    textDecoration: 'none',
    fontSize: '14px',
    transition: 'color 0.2s',
    ':hover': {
      color: colors.secondary
    }
  },
  productSection: {
    flex: 1
  },
  productHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px'
  },
  sortOptions: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
  },
  sortSelect: {
    padding: '8px 12px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '14px'
  },
  productGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
    gap: '25px'
  },
  noProducts: {
    padding: '50px',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px'
  },
  // Add responsive styles
  '@media (max-width: 768px)': {
    content: {
      flexDirection: 'column'
    },
    sidebar: {
      width: '100%',
      marginBottom: '20px'
    }
  }
};

export default CategoryPage;
