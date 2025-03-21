import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SliderBanner from '../components/SliderBanner';
import ProductCard from '../components/ProductCard';
import Loading from '../components/Loading';
import Error from '../components/Error';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Replace with your API endpoint
        const response = await axios.get('https://jsonplaceholder.typicode.com/photos?_limit=8');
        
        const formattedProducts = response.data.map(item => ({
          id: item.id,
          name: item.title,
          price: Math.floor(Math.random() * 5000) + 1000,
          image: `${process.env.PUBLIC_URL}/images/product${item.id % 4 + 1}.jpg` // Ensure images exist
        }));

        setProducts(formattedProducts);
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

  return (
    <div className="home-page">
      <SliderBanner />
      
      <section className="collection-section">
        <h2 className="section-title">New Arrivals</h2>
        <div className="product-grid">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="featured-collection">
        <h2 className="section-title">Featured Collection</h2>
        <div className="product-grid">
          {products.slice(0, 4).map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;