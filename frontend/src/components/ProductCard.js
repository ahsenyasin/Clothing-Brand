import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/CartSlice';
import PropTypes from 'prop-types';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="product-item">
      <Link to={`/product/${product.id}`}>
        <img 
          src={product.image} 
          alt={product.name} 
          className="product-image"
        />
        <h3 className="product-title">{product.name}</h3>
        <p className="product-price">Rs. {product.price.toLocaleString()}</p>
      </Link>
      <button 
        className="add-to-cart-btn"
        onClick={() => dispatch(addToCart(product))}
      >
        Add to Cart
      </button>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired
  }).isRequired
};

export default ProductCard;