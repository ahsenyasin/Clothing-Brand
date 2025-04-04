import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import store from './redux/Store';
import './App.css';

// Create Cart component if missing
const Cart = () => {
  return (
    <div>
      <h1>Shopping Cart</h1>
      <p>Your cart is currently empty.</p>
    </div>
  );
};

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
