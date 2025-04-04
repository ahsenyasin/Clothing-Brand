import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import Loading from '../components/Loading';
import { FiSearch } from 'react-icons/fi';
import { colors } from '../design-system';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState('relevance');
  const [priceRange, setPriceRange] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');

  useEffect(() => {
    const fetchSearchResults = async () => {
      setLoading(true);
      try {
        // In a real app, you would fetch from your API with the query parameter
        // Here we're simulating a search with our mock data
        // This is a simplified version that filters products by name or description
        const mockProducts = [
          {
            id: 1,
            name: "Embroidered Lawn Suit",
            price: 4999,
            image: `${process.env.PUBLIC_URL}/images/products/product1.jpeg`,
            category: "women",
            subcategory: "embroidered",
            description: "Beautiful embroidered lawn suit for summer."
          },
          {
            id: 2,
            name: "Printed Cotton Shirt",
            price: 2499,
            image: `${process.env.PUBLIC_URL}/images/products/product2.png`,
            category: "men",
            subcategory: "shirts",
            description: "Stylish printed cotton shirt for casual wear."
          },
          {
            id: 3,
            name: "Kids Casual Outfit",
            price: 1999,
            image: `${process.env.PUBLIC_URL}/images/products/product3.jpeg`,
            category: "kids",
            subcategory: "boys-outfits",
            description: "Comfortable casual outfit for boys."
          },
          {
            id: 4,
            name: "Formal Embroidery Suit",
            price: 5999,
            image: `${process.env.PUBLIC_URL}/images/products/product4.jpeg`,
            category: "women",
            subcategory: "formal",
            description: "Elegant formal embroidered suit for special occasions."
          },
          {
            id: 5,
            name: "Casual Summer T-Shirt",
            price: 1499,
            image: `${process.env.PUBLIC_URL}/images/products/product5.jpeg`,
            category: "men",
            subcategory: "casual",
            description: "Comfortable t-shirt for summer."
          },
          {
            id: 6,
            name: "Luxury Formal Collection",
            price: 8999,
            image: `${process.env.PUBLIC_URL}/images/products/product6.jpeg`,
            category: "women",
            subcategory: "formal",
            description: "Premium formal collection for wedding season."
          },
          {
            id: 7,
            name: "Casual Denim Shirt",
            price: 2999,
            image: `${process.env.PUBLIC_URL}/images/products/product7.jpeg`,
            category: "men",
            subcategory: "denim",
            description: "Stylish denim shirt for casual outings."
          },
          {
            id: 8,
            name: "Kids Party Dress",
            price: 3499,
            image: `${process.env.PUBLIC_URL}/images/products/product8.jpeg`,
            category: "kids",
            subcategory: "girls-dresses",
            description: "Beautiful party dress for little girls."
          },
          {
            id: 9,
            name: "Printed Lawn Collection",
            price: 3999,
            image: `${process.env.PUBLIC_URL}/images/products/product9.jpeg`,
            category: "women",
            subcategory: "printed",
            description: "Elegant printed lawn collection for summer."
          },
          {
            id: 10,
            name: "Men's Formal Suit",
            price: 7999,
            image: `${process.env.PUBLIC_URL}/images/products/product10.jpeg`,
            category: "men",
            subcategory: "suits",
            description: "Classic formal suit for men."
          },
          {
            id: 11,
            name: "Kids School Uniform",
            price: 2499,
            image: `${process.env.PUBLIC_URL}/images/products/product11.jpeg`,
            category: "kids",
            subcategory: "boys-outfits",
            description: "Standard school uniform for boys."
          },
          {
            id: 12,
            name: "Silk Evening Gown",
            price: 9999,
            image: `${process.env.PUBLIC_URL}/images/products/product12.jpeg`,
            category: "women",
            subcategory: "formal",
            description: "Luxurious silk evening gown for special events."
          },
          {
            id: 13,
            name: "Men's Kurta",
            price: 3499,
            image: `${process.env.PUBLIC_URL}/images/products/product13.jpeg`,
            category: "men",
            subcategory: "kurtas",
            description: "Traditional kurta for cultural events."
          },
          {
            id: 14,
            name: "Kids Summer Collection",
            price: 1799,
            image: `${process.env.PUBLIC_URL}/images/products/product14.jpeg`,
            category: "kids",
            subcategory: "girls-tops",
            description: "Light and colorful summer collection for kids."
          },
          {
            id: 15,
            name: "Bedsheet Set",
            price: 4999,
            image: `${process.env.PUBLIC_URL}/images/products/product15.png`,
            category: "home",
            subcategory: "bedsheets",
            description: "Premium bedsheet set with matching pillowcases."
          }
        ];

        // Filter products based on search query
        const filteredProducts = query
          ? mockProducts.filter(product =>
              product.name.toLowerCase().includes(query.toLowerCase()) ||
              product.description.toLowerCase().includes(query.toLowerCase()) ||
              product.category.toLowerCase().includes(query.toLowerCase()) ||
              product.subcategory.toLowerCase().includes(query.toLowerCase())
            )
          : [];

        setProducts(filteredProducts);
      } catch (error) {
        console.error('Error fetching search results:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSearchResults();
  }, [query]);

  // Apply filters and sorting
  const filteredAndSortedProducts = () => {
    let filtered = [...products];

    // Apply price filter
    if (priceRange !== 'all') {
      switch (priceRange) {
        case 'under2000':
          filtered = filtered.filter(p => p.price < 2000);
          break;
        case '2000-5000':
          filtered = filtered.filter(p => p.price >= 2000 && p.price <= 5000);
          break;
        case 'over5000':
          filtered = filtered.filter(p => p.price > 5000);
          break;
        default:
          break;
      }
    }

    // Apply category filter
    if (categoryFilter !== 'all') {
      filtered = filtered.filter(p => p.category === categoryFilter);
    }

    // Apply sorting
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        // Since we don't have date added, we'll just use the ID as a proxy for "newest"
        filtered.sort((a, b) => b.id - a.id);
        break;
      default: // 'relevance' - keep the original order which is assumed to be by relevance
        break;
    }

    return filtered;
  };

  const finalProducts = filteredAndSortedProducts();
  const categories = [...new Set(products.map(p => p.category))];

  if (loading) return <Loading />;

  return (
    <div style={styles.container}>
      <div style={styles.searchHeader}>
        <h1 style={styles.title}>Search Results for "{query}"</h1>
        <p style={styles.resultCount}>{finalProducts.length} items found</p>
      </div>

      {finalProducts.length === 0 ? (
        <div style={styles.noResults}>
          <FiSearch size={60} color={colors.secondary} />
          <h2>No results found</h2>
          <p>Try different keywords or browse our categories</p>
          <div style={styles.suggestedCategories}>
            <Link to="/category/women" style={styles.suggestedLink}>Women</Link>
            <Link to="/category/men" style={styles.suggestedLink}>Men</Link>
            <Link to="/category/kids" style={styles.suggestedLink}>Kids</Link>
            <Link to="/category/home" style={styles.suggestedLink}>Home</Link>
          </div>
        </div>
      ) : (
        <div style={styles.content}>
          <div style={styles.sidebar}>
            <div style={styles.filterSection}>
              <h3 style={styles.filterTitle}>Sort By</h3>
              <select
                style={styles.select}
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="relevance">Relevance</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="newest">Newest First</option>
              </select>
            </div>

            <div style={styles.filterSection}>
              <h3 style={styles.filterTitle}>Price Range</h3>
              <select
                style={styles.select}
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
              >
                <option value="all">All Prices</option>
                <option value="under2000">Under Rs. 2,000</option>
                <option value="2000-5000">Rs. 2,000 - Rs. 5,000</option>
                <option value="over5000">Over Rs. 5,000</option>
              </select>
            </div>

            {categories.length > 0 && (
              <div style={styles.filterSection}>
                <h3 style={styles.filterTitle}>Categories</h3>
                <select
                  style={styles.select}
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                >
                  <option value="all">All Categories</option>
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>

          <div style={styles.productsGrid}>
            {finalProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '20px 5%',
    maxWidth: '1400px',
    margin: '0 auto'
  },
  searchHeader: {
    marginBottom: '30px'
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: '5px'
  },
  resultCount: {
    color: '#666',
    marginBottom: '20px'
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
    marginBottom: '25px'
  },
  filterTitle: {
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: colors.primary
  },
  select: {
    width: '100%',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    backgroundColor: 'white'
  },
  productsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
    gap: '25px',
    flex: 1
  },
  noResults: {
    textAlign: 'center',
    padding: '60px 0',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px'
  },
  suggestedCategories: {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
    marginTop: '20px'
  },
  suggestedLink: {
    display: 'inline-block',
    padding: '8px 15px',
    backgroundColor: 'white',
    color: colors.primary,
    borderRadius: '4px',
    textDecoration: 'none',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    transition: 'all 0.2s'
  },
  // Responsive styles
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

export default SearchResults;
