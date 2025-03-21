import React from 'react';
import SliderBanner from '../components/SliderBanner';
import ProductCard from '../components/ProductCard';

const Home = () => {
  // Temporary product data
  const products = [
    { 
      id: 1, 
      name: 'Embroidered Lawn Suit', 
      price: 4599, 
      image: '/images/product1.jpg' 
    },
    { 
      id: 2, 
      name: "Men's Formal Suit", 
      price: 6999, 
      image: '/images/product2.jpg' 
    }
  ];

  return (
    <div className="home-page">
      {/* ✅ Properly imported component */}
      <SliderBanner />
      
      <section className="collection-section">
        <h2>New Arrivals</h2>
        <div className="product-grid">
          {products.map(product => (
            // ✅ Correct ProductCard usage
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;