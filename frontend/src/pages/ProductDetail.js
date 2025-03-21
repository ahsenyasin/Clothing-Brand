import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/CartSlice';
import './../App.css';

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);

  // Temporary product data
  const product = {
    id: 1,
    name: 'Embroidered Lawn Suit',
    price: 4599,
    images: ['/images/product1.jpg', '/images/product1-alt.jpg'],
    description: 'Premium quality embroidered lawn suit with chiffon dupatta',
    sizes: ['S', 'M', 'L', 'XL']
  };

  return (
    <div className="product-detail">
      <div className="product-gallery">
        {product.images.map((img, index) => (
          <img key={index} src={img} alt={`Product View ${index + 1}`} />
        ))}
      </div>

      <div className="product-info">
        <h1>{product.name}</h1>
        <p className="price">Rs. {product.price.toLocaleString()}</p>
        <p className="description">{product.description}</p>

        <div className="size-selector">
          <label>Size:</label>
          {product.sizes.map(size => (
            <button 
              key={size}
              className={selectedSize === size ? 'active' : ''}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}
        </div>

        <div className="quantity-selector">
          <label>Quantity:</label>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
          />
        </div>

        <button 
          className="add-to-cart-btn"
          onClick={() => dispatch(addToCart({...product, quantity}))}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;