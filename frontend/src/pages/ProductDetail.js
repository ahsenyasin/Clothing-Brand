import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FiShoppingBag, FiHeart, FiShare2, FiChevronRight, FiMinus, FiPlus } from 'react-icons/fi';
import { addToCart } from '../redux/CartSlice';
import { colors, spacing } from '../design-system';
import Loading from '../components/Loading';
import Error from '../components/Error';

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        // Mock API call with a timeout to simulate network request
        setTimeout(() => {
          // Find product by ID (in a real app, this would be an API call)
          const mockProduct = {
            id: Number(id),
            name: "Embroidered Lawn Suit",
            price: 4999,
            discount: 15,
            originalPrice: 5999,
            images: [
              `${process.env.PUBLIC_URL}/images/products/product${id}.jpeg`,
              `${process.env.PUBLIC_URL}/images/products/product${(Number(id) % 15) + 1}.${Number(id) % 2 === 0 ? 'png' : 'jpeg'}`,
              `${process.env.PUBLIC_URL}/images/products/product${(Number(id) % 15) + 2}.jpeg`
            ],
            sizes: ['XS', 'S', 'M', 'L', 'XL'],
            colors: ['Black', 'White', 'Blue', 'Red'],
            category: "Women",
            description: "This beautiful embroidered lawn suit features intricate embroidery on premium fabric. Perfect for summer wear, it offers both comfort and style. The suit includes a shirt, trouser, and a chiffon dupatta with elegant embroidery and finishing.",
            details: [
              "3-piece unstitched suit",
              "Lawn fabric for shirt",
              "Embroidered neckline and sleeves",
              "Chiffon dupatta with embroidered borders",
              "Includes matching trousers fabric"
            ],
            care: "Dry clean only. Iron on medium heat. Do not bleach.",
            sku: `GA-${id}00${id}-W`,
            inStock: true,
            relatedProducts: [1, 2, 3, 4].filter(num => num !== Number(id))
          };

          setProduct(mockProduct);
          setLoading(false);

          // Set default color
          if (mockProduct.colors && mockProduct.colors.length > 0) {
            setSelectedColor(mockProduct.colors[0]);
          }
        }, 500);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart({
        ...product,
        size: selectedSize,
        color: selectedColor,
        quantity
      }));

      // Show success message or navigate to cart
      alert('Product added to cart');
    }
  };

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity > 0) {
      setQuantity(newQuantity);
    }
  };

  if (loading) return <Loading />;
  if (error) return <Error message={error} />;
  if (!product) return <Error message="Product not found" />;

  // Calculate discounted price
  const finalPrice = product.discount
    ? Math.round(product.price * (1 - product.discount / 100))
    : product.price;

  return (
    <div style={styles.container}>
      {/* Breadcrumb Navigation */}
      <div style={styles.breadcrumbs}>
        <Link to="/" style={styles.breadcrumbLink}>Home</Link>
        <FiChevronRight style={styles.breadcrumbSeparator} />
        <Link to={`/category/${product.category.toLowerCase()}`} style={styles.breadcrumbLink}>{product.category}</Link>
        <FiChevronRight style={styles.breadcrumbSeparator} />
        <span style={styles.breadcrumbCurrent}>{product.name}</span>
      </div>

      <div style={styles.productContainer}>
        {/* Product Images Section */}
        <div style={styles.imageGallery}>
          <div style={styles.mainImage}>
            <img
              src={product.images[0]}
              alt={product.name}
              style={styles.productMainImage}
            />
            {product.discount > 0 && (
              <div style={styles.discountBadge}>
                {product.discount}% OFF
              </div>
            )}
          </div>

          <div style={styles.thumbnails}>
            {product.images.map((image, index) => (
              <div key={index} style={styles.thumbnail}>
                <img
                  src={image}
                  alt={`${product.name} view ${index + 1}`}
                  style={styles.thumbnailImage}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info Section */}
        <div style={styles.productInfo}>
          <h1 style={styles.productName}>{product.name}</h1>

          <div style={styles.productPrice}>
            <span style={styles.finalPrice}>Rs. {finalPrice.toLocaleString()}</span>
            {product.discount > 0 && (
              <span style={styles.originalPrice}>Rs. {product.originalPrice.toLocaleString()}</span>
            )}
          </div>

          <div style={styles.skuInfo}>
            SKU: <span style={styles.skuCode}>{product.sku}</span>
          </div>

          {product.inStock ? (
            <div style={styles.stockStatus}>
              <span style={styles.inStock}>In Stock</span>
            </div>
          ) : (
            <div style={styles.stockStatus}>
              <span style={styles.outOfStock}>Out of Stock</span>
            </div>
          )}

          {/* Color Selection */}
          {product.colors && product.colors.length > 0 && (
            <div style={styles.optionSection}>
              <h3 style={styles.optionTitle}>Color:</h3>
              <div style={styles.colorOptions}>
                {product.colors.map(color => (
                  <button
                    key={color}
                    style={{
                      ...styles.colorOption,
                      backgroundColor: color.toLowerCase(),
                      border: selectedColor === color ? `2px solid ${colors.secondary}` : '1px solid #ddd'
                    }}
                    onClick={() => setSelectedColor(color)}
                    aria-label={color}
                  />
                ))}
              </div>
              <div style={styles.selectedOptionText}>{selectedColor}</div>
            </div>
          )}

          {/* Size Selection */}
          {product.sizes && product.sizes.length > 0 && (
            <div style={styles.optionSection}>
              <h3 style={styles.optionTitle}>Size:</h3>
              <div style={styles.sizeOptions}>
                {product.sizes.map(size => (
                  <button
                    key={size}
                    style={{
                      ...styles.sizeOption,
                      backgroundColor: selectedSize === size ? colors.secondary : 'white',
                      color: selectedSize === size ? 'white' : colors.dark
                    }}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity Selection */}
          <div style={styles.optionSection}>
            <h3 style={styles.optionTitle}>Quantity:</h3>
            <div style={styles.quantitySelector}>
              <button
                style={styles.quantityButton}
                onClick={() => handleQuantityChange(quantity - 1)}
                disabled={quantity <= 1}
              >
                <FiMinus />
              </button>
              <span style={styles.quantityDisplay}>{quantity}</span>
              <button
                style={styles.quantityButton}
                onClick={() => handleQuantityChange(quantity + 1)}
              >
                <FiPlus />
              </button>
            </div>
          </div>

          {/* Add to Cart & Wishlist Buttons */}
          <div style={styles.actionButtons}>
            <button
              style={styles.addToCartButton}
              onClick={handleAddToCart}
              disabled={!product.inStock}
            >
              <FiShoppingBag style={styles.buttonIcon} />
              Add to Cart
            </button>

            <button style={styles.wishlistButton}>
              <FiHeart />
            </button>

            <button style={styles.shareButton}>
              <FiShare2 />
            </button>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <div style={styles.productDetails}>
        <div style={styles.tabsHeader}>
          <button
            style={{
              ...styles.tabButton,
              borderBottom: activeTab === 'description' ? `2px solid ${colors.secondary}` : '2px solid transparent',
              color: activeTab === 'description' ? colors.secondary : colors.dark
            }}
            onClick={() => setActiveTab('description')}
          >
            Description
          </button>
          <button
            style={{
              ...styles.tabButton,
              borderBottom: activeTab === 'details' ? `2px solid ${colors.secondary}` : '2px solid transparent',
              color: activeTab === 'details' ? colors.secondary : colors.dark
            }}
            onClick={() => setActiveTab('details')}
          >
            Details
          </button>
          <button
            style={{
              ...styles.tabButton,
              borderBottom: activeTab === 'care' ? `2px solid ${colors.secondary}` : '2px solid transparent',
              color: activeTab === 'care' ? colors.secondary : colors.dark
            }}
            onClick={() => setActiveTab('care')}
          >
            Care Instructions
          </button>
        </div>

        <div style={styles.tabContent}>
          {activeTab === 'description' && (
            <p style={styles.descriptionText}>{product.description}</p>
          )}

          {activeTab === 'details' && (
            <ul style={styles.detailsList}>
              {product.details.map((detail, index) => (
                <li key={index} style={styles.detailItem}>{detail}</li>
              ))}
            </ul>
          )}

          {activeTab === 'care' && (
            <p style={styles.careText}>{product.care}</p>
          )}
        </div>
      </div>

      {/* Related Products */}
      <div style={styles.relatedProducts}>
        <h2 style={styles.relatedTitle}>You May Also Like</h2>
        <div style={styles.relatedGrid}>
          {product.relatedProducts.map(relatedId => (
            <Link key={relatedId} to={`/product/${relatedId}`} style={styles.relatedProductLink}>
              <div style={styles.relatedProductCard}>
                <img
                  src={`${process.env.PUBLIC_URL}/images/products/product${relatedId}.jpeg`}
                  alt={`Related product ${relatedId}`}
                  style={styles.relatedProductImage}
                />
                <div style={styles.relatedProductInfo}>
                  <h3 style={styles.relatedProductName}>Related Product {relatedId}</h3>
                  <p style={styles.relatedProductPrice}>Rs. {(4000 + relatedId * 500).toLocaleString()}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '30px 20px'
  },
  breadcrumbs: {
    display: 'flex',
    alignItems: 'center',
    margin: '0 0 20px',
    fontSize: '14px',
    color: '#666'
  },
  breadcrumbLink: {
    color: '#666',
    textDecoration: 'none',
    ':hover': {
      color: colors.secondary
    }
  },
  breadcrumbSeparator: {
    margin: '0 8px',
    fontSize: '12px'
  },
  breadcrumbCurrent: {
    color: colors.dark,
    fontWeight: 'bold'
  },
  productContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '40px',
    marginBottom: '50px'
  },
  imageGallery: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px'
  },
  mainImage: {
    position: 'relative',
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '4px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
  },
  productMainImage: {
    width: '100%',
    height: 'auto',
    objectFit: 'contain'
  },
  discountBadge: {
    position: 'absolute',
    top: '15px',
    right: '15px',
    backgroundColor: colors.secondary,
    color: 'white',
    padding: '5px 10px',
    borderRadius: '4px',
    fontWeight: 'bold',
    fontSize: '14px'
  },
  thumbnails: {
    display: 'flex',
    gap: '10px',
    flexWrap: 'wrap'
  },
  thumbnail: {
    width: 'calc(25% - 8px)',
    borderRadius: '4px',
    overflow: 'hidden',
    cursor: 'pointer',
    border: '1px solid #eee'
  },
  thumbnailImage: {
    width: '100%',
    height: '70px',
    objectFit: 'cover'
  },
  productInfo: {
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '4px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
  },
  productName: {
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '15px',
    color: colors.primary
  },
  productPrice: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px'
  },
  finalPrice: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: colors.secondary,
    marginRight: '10px'
  },
  originalPrice: {
    fontSize: '18px',
    color: '#999',
    textDecoration: 'line-through'
  },
  skuInfo: {
    color: '#666',
    fontSize: '14px',
    marginBottom: '15px'
  },
  skuCode: {
    fontWeight: 'bold'
  },
  stockStatus: {
    marginBottom: '20px',
  },
  inStock: {
    color: '#2ecc71',
    fontWeight: 'bold',
    display: 'inline-block',
    padding: '4px 10px',
    backgroundColor: '#f1f9f5',
    borderRadius: '4px',
    fontSize: '14px'
  },
  outOfStock: {
    color: '#e74c3c',
    fontWeight: 'bold',
    display: 'inline-block',
    padding: '4px 10px',
    backgroundColor: '#fdeded',
    borderRadius: '4px',
    fontSize: '14px'
  },
  optionSection: {
    marginBottom: '25px'
  },
  optionTitle: {
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: '10px'
  },
  colorOptions: {
    display: 'flex',
    gap: '10px',
    marginBottom: '5px'
  },
  colorOption: {
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    cursor: 'pointer',
    border: '1px solid #ddd'
  },
  selectedOptionText: {
    fontSize: '14px',
    color: '#666'
  },
  sizeOptions: {
    display: 'flex',
    gap: '10px'
  },
  sizeOption: {
    padding: '8px 15px',
    borderRadius: '4px',
    border: '1px solid #ddd',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'all 0.2s'
  },
  quantitySelector: {
    display: 'flex',
    alignItems: 'center',
    border: '1px solid #ddd',
    borderRadius: '4px',
    width: 'fit-content'
  },
  quantityButton: {
    border: 'none',
    background: 'none',
    padding: '10px 15px',
    cursor: 'pointer',
    fontSize: '16px',
    color: colors.dark,
    ':disabled': {
      color: '#ccc',
      cursor: 'not-allowed'
    }
  },
  quantityDisplay: {
    padding: '0 15px',
    minWidth: '40px',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  actionButtons: {
    display: 'flex',
    gap: '10px',
    marginTop: '20px'
  },
  addToCartButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '12px 25px',
    backgroundColor: colors.secondary,
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontWeight: 'bold',
    fontSize: '16px',
    cursor: 'pointer',
    flex: '1',
    transition: 'background-color 0.2s',
    ':hover': {
      backgroundColor: '#d44436'
    },
    ':disabled': {
      backgroundColor: '#ccc',
      cursor: 'not-allowed'
    }
  },
  buttonIcon: {
    marginRight: '8px'
  },
  wishlistButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '12px 15px',
    backgroundColor: 'white',
    color: colors.dark,
    border: '1px solid #ddd',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'all 0.2s'
  },
  shareButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '12px 15px',
    backgroundColor: 'white',
    color: colors.dark,
    border: '1px solid #ddd',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'all 0.2s'
  },
  productDetails: {
    backgroundColor: 'white',
    borderRadius: '4px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
    marginBottom: '50px'
  },
  tabsHeader: {
    display: 'flex',
    borderBottom: '1px solid #eee'
  },
  tabButton: {
    padding: '15px 25px',
    backgroundColor: 'transparent',
    border: 'none',
    borderBottom: '2px solid transparent',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
    transition: 'all 0.2s'
  },
  tabContent: {
    padding: '30px'
  },
  descriptionText: {
    lineHeight: '1.6',
    color: '#555'
  },
  detailsList: {
    paddingLeft: '20px',
    lineHeight: '1.6',
    color: '#555'
  },
  detailItem: {
    marginBottom: '8px'
  },
  careText: {
    lineHeight: '1.6',
    color: '#555'
  },
  relatedProducts: {
    marginBottom: '50px'
  },
  relatedTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
    textAlign: 'center',
    color: colors.primary
  },
  relatedGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
    gap: '20px'
  },
  relatedProductLink: {
    textDecoration: 'none',
    color: 'inherit'
  },
  relatedProductCard: {
    backgroundColor: 'white',
    borderRadius: '4px',
    overflow: 'hidden',
    boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
    transition: 'transform 0.2s',
    ':hover': {
      transform: 'translateY(-5px)'
    }
  },
  relatedProductImage: {
    width: '100%',
    height: '220px',
    objectFit: 'cover'
  },
  relatedProductInfo: {
    padding: '15px'
  },
  relatedProductName: {
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: '5px'
  },
  relatedProductPrice: {
    color: colors.secondary,
    fontWeight: 'bold'
  }
};

export default ProductDetail;
