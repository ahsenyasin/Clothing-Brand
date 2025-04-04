import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
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
=======
import { useLocation } from 'react-router-dom';
import { FiFilter, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import ProductCard from '../components/ProductCard';
import { colors } from '../design-system';

const SearchResults = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get('q') || '';

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOption, setSortOption] = useState('relevance');
  const [filterOpen, setFilterOpen] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);

  // Mock product data
  useEffect(() => {
    // Simulate API fetch based on search query
    setTimeout(() => {
      const mockProducts = [
        {
          id: 1,
          name: 'Embroidered Lawn Suit',
          price: 4500,
          oldPrice: 5900,
          category: 'women',
          subcategory: 'embroidered',
          colors: ['blue', 'green'],
          image: '/images/products/product1.jpeg',
          discount: 24
        },
        {
          id: 2,
          name: 'Printed Cotton Shirt',
          price: 2800,
          category: 'men',
          subcategory: 'shirts',
          colors: ['white', 'black'],
          image: '/images/products/product2.png'
        },
        {
          id: 3,
          name: 'Digital Print Kurti',
          price: 3200,
          oldPrice: 3800,
          category: 'women',
          subcategory: 'printed',
          colors: ['red', 'orange'],
          image: '/images/products/product3.jpeg',
          discount: 16
        },
        {
          id: 4,
          name: 'Formal Chiffon Dress',
          price: 6500,
          category: 'women',
          subcategory: 'formal',
          colors: ['black', 'navy'],
          image: '/images/products/product4.jpeg'
        },
        {
          id: 5,
          name: 'Men\'s Formal Suit',
          price: 12500,
          oldPrice: 15000,
          category: 'men',
          subcategory: 'suits',
          colors: ['black', 'gray'],
          image: '/images/products/product5.jpeg',
          discount: 17
        },
        {
          id: 6,
          name: 'Kids Cotton Dress',
          price: 2200,
          category: 'kids',
          subcategory: 'girls-dresses',
          colors: ['pink', 'yellow'],
          image: '/images/products/product6.jpeg'
        }
      ];

      // Filter products based on search query
      const filteredProducts = searchQuery
        ? mockProducts.filter(product =>
            product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.subcategory.toLowerCase().includes(searchQuery.toLowerCase())
          )
        : mockProducts;

      setProducts(filteredProducts);
      setLoading(false);
    }, 1000);
  }, [searchQuery]);

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
    // Sort products based on the selected option
    let sortedProducts = [...products];
    switch (e.target.value) {
      case 'price-low':
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        // Would typically sort by date, but using IDs for this example
        sortedProducts.sort((a, b) => b.id - a.id);
        break;
      case 'discount':
        sortedProducts.sort((a, b) => (b.discount || 0) - (a.discount || 0));
        break;
      default:
        // 'relevance' - no specific sorting in mock data
        break;
    }
    setProducts(sortedProducts);
  };

  const toggleCategory = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const toggleColor = (color) => {
    if (selectedColors.includes(color)) {
      setSelectedColors(selectedColors.filter(c => c !== color));
    } else {
      setSelectedColors([...selectedColors, color]);
    }
  };

  const toggleFilter = () => {
    setFilterOpen(!filterOpen);
  };

  const handlePriceChange = (e, index) => {
    const newRange = [...priceRange];
    newRange[index] = parseInt(e.target.value, 10);
    setPriceRange(newRange);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        {searchQuery
          ? `Search Results for "${searchQuery}"`
          : "All Products"
        }
      </h1>

      <p style={styles.resultsCount}>
        {products.length} products found
      </p>

      <div style={styles.mobileFilterToggle}>
        <button style={styles.filterButton} onClick={toggleFilter}>
          <FiFilter size={16} />
          <span>Filter & Sort</span>
          {filterOpen ? <FiChevronUp size={16} /> : <FiChevronDown size={16} />}
        </button>
      </div>

      <div style={{
        ...styles.filtersContainer,
        display: filterOpen ? 'block' : 'none'
      }} className="mobile-filters">
        <div style={styles.filterSection}>
          <h3 style={styles.filterHeading}>Sort By</h3>
          <select
            style={styles.sortSelect}
            value={sortOption}
            onChange={handleSortChange}
          >
            <option value="relevance">Relevance</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="newest">Newest First</option>
            <option value="discount">Discount</option>
          </select>
        </div>

        <div style={styles.filterSection}>
          <h3 style={styles.filterHeading}>Price Range</h3>
          <div style={styles.priceInputs}>
            <input
              type="number"
              value={priceRange[0]}
              onChange={(e) => handlePriceChange(e, 0)}
              style={styles.priceInput}
              min="0"
              max={priceRange[1]}
            />
            <span style={styles.priceSeparator}>to</span>
            <input
              type="number"
              value={priceRange[1]}
              onChange={(e) => handlePriceChange(e, 1)}
              style={styles.priceInput}
              min={priceRange[0]}
            />
          </div>
        </div>

        <div style={styles.filterSection}>
          <h3 style={styles.filterHeading}>Categories</h3>
          <div style={styles.checkboxList}>
            {['women', 'men', 'kids', 'home'].map(category => (
              <label key={category} style={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category)}
                  onChange={() => toggleCategory(category)}
                  style={styles.checkbox}
                />
                <span style={styles.checkboxText}>{category.charAt(0).toUpperCase() + category.slice(1)}</span>
              </label>
            ))}
          </div>
        </div>

        <div style={styles.filterSection}>
          <h3 style={styles.filterHeading}>Colors</h3>
          <div style={styles.colorOptions}>
            {['black', 'white', 'red', 'blue', 'green', 'yellow', 'pink', 'navy', 'gray'].map(color => (
              <button
                key={color}
                style={{
                  ...styles.colorButton,
                  backgroundColor: color,
                  border: selectedColors.includes(color) ? '2px solid black' : '1px solid #ddd'
                }}
                onClick={() => toggleColor(color)}
                aria-label={color}
              />
            ))}
          </div>
        </div>
      </div>

      <div style={styles.contentLayout}>
        <div style={styles.filtersDesktop}>
          <div style={styles.filterSection}>
            <h3 style={styles.filterHeading}>Sort By</h3>
            <select
              style={styles.sortSelect}
              value={sortOption}
              onChange={handleSortChange}
            >
              <option value="relevance">Relevance</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="newest">Newest First</option>
              <option value="discount">Discount</option>
            </select>
          </div>

          <div style={styles.filterSection}>
            <h3 style={styles.filterHeading}>Price Range</h3>
            <div style={styles.priceInputs}>
              <input
                type="number"
                value={priceRange[0]}
                onChange={(e) => handlePriceChange(e, 0)}
                style={styles.priceInput}
                min="0"
                max={priceRange[1]}
              />
              <span style={styles.priceSeparator}>to</span>
              <input
                type="number"
                value={priceRange[1]}
                onChange={(e) => handlePriceChange(e, 1)}
                style={styles.priceInput}
                min={priceRange[0]}
              />
            </div>
          </div>

          <div style={styles.filterSection}>
            <h3 style={styles.filterHeading}>Categories</h3>
            <div style={styles.checkboxList}>
              {['women', 'men', 'kids', 'home'].map(category => (
                <label key={category} style={styles.checkboxLabel}>
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(category)}
                    onChange={() => toggleCategory(category)}
                    style={styles.checkbox}
                  />
                  <span style={styles.checkboxText}>{category.charAt(0).toUpperCase() + category.slice(1)}</span>
                </label>
              ))}
            </div>
          </div>

          <div style={styles.filterSection}>
            <h3 style={styles.filterHeading}>Colors</h3>
            <div style={styles.colorOptions}>
              {['black', 'white', 'red', 'blue', 'green', 'yellow', 'pink', 'navy', 'gray'].map(color => (
                <button
                  key={color}
                  style={{
                    ...styles.colorButton,
                    backgroundColor: color,
                    border: selectedColors.includes(color) ? '2px solid black' : '1px solid #ddd'
                  }}
                  onClick={() => toggleColor(color)}
                  aria-label={color}
                />
              ))}
            </div>
          </div>
        </div>

        <div style={styles.productsGrid}>
          {loading ? (
            <div style={styles.loading}>Loading products...</div>
          ) : products.length > 0 ? (
            products.map(product => (
              <div key={product.id} style={styles.productCard}>
                <ProductCard product={product} />
              </div>
            ))
          ) : (
            <div style={styles.noResults}>
              <h2>No products found</h2>
              <p>Try adjusting your search criteria or browse our categories.</p>
            </div>
          )}
        </div>
      </div>
>>>>>>> ec17d2a (Initial commit)
    </div>
  );
};

const styles = {
  container: {
<<<<<<< HEAD
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
=======
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '30px 20px',
  },
  title: {
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '5px',
    color: colors.primary,
  },
  resultsCount: {
    fontSize: '14px',
    color: '#666',
    marginBottom: '20px',
  },
  mobileFilterToggle: {
    display: 'none',
    marginBottom: '20px',
    '@media (max-width: 768px)': {
      display: 'block',
    }
  },
  filterButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: '12px 15px',
    backgroundColor: 'white',
    border: '1px solid #ddd',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '15px',
  },
  filtersContainer: {
    backgroundColor: 'white',
    padding: '15px',
    borderRadius: '4px',
    marginBottom: '20px',
    border: '1px solid #ddd',
  },
  contentLayout: {
    display: 'flex',
    gap: '30px',
  },
  filtersDesktop: {
    width: '250px',
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    alignSelf: 'flex-start',
    border: '1px solid #eee',
    '@media (max-width: 768px)': {
      display: 'none',
    }
  },
  filterSection: {
    marginBottom: '25px',
    '&:last-child': {
      marginBottom: 0,
    }
  },
  filterHeading: {
    fontSize: '16px',
    marginBottom: '15px',
    paddingBottom: '8px',
    borderBottom: '1px solid #eee',
  },
  sortSelect: {
>>>>>>> ec17d2a (Initial commit)
    width: '100%',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px',
<<<<<<< HEAD
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
=======
    fontSize: '14px',
  },
  priceInputs: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  priceInput: {
    width: '80px',
    padding: '8px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '14px',
  },
  priceSeparator: {
    color: '#666',
  },
  checkboxList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  checkboxLabel: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  },
  checkbox: {
    marginRight: '8px',
  },
  checkboxText: {
    fontSize: '14px',
  },
  colorOptions: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
  },
  colorButton: {
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    cursor: 'pointer',
    transition: 'transform 0.2s',
    ':hover': {
      transform: 'scale(1.1)',
    }
  },
  productsGrid: {
    flex: 1,
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
    gap: '25px',
    '@media (max-width: 576px)': {
      gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
      gap: '15px',
    }
  },
  productCard: {
    width: '100%',
  },
  loading: {
    padding: '40px',
    textAlign: 'center',
    gridColumn: '1 / -1',
    fontSize: '16px',
    color: '#666',
  },
  noResults: {
    padding: '40px',
    textAlign: 'center',
    gridColumn: '1 / -1',
>>>>>>> ec17d2a (Initial commit)
  }
};

export default SearchResults;
