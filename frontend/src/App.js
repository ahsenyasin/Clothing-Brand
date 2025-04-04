import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
<<<<<<< HEAD
<<<<<<< HEAD
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

=======
=======
>>>>>>> ec17d2a (Initial commit)
import CategoryPage from './pages/CategoryPage';
import SubcategoryPage from './pages/SubcategoryPage';
import SearchResults from './pages/SearchResults';
import Cart from './pages/Cart';
<<<<<<< HEAD
import store from './redux/Store';
import './App.css';

>>>>>>> 179e0b9 (commit)
=======
import Wishlist from './pages/Wishlist';
import Account from './pages/Account';
import store from './redux/Store';
import './App.css';

>>>>>>> ec17d2a (Initial commit)
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
            <Route path="/category/:category" element={<CategoryPage />} />
            <Route path="/:category/:subcategory" element={<SubcategoryPage />} />
            <Route path="/search" element={<SearchResults />} />
>>>>>>> 179e0b9 (commit)
=======
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/account" element={<Account />} />
            <Route path="/category/:category" element={<CategoryPage />} />
            <Route path="/:category/:subcategory" element={<SubcategoryPage />} />
            <Route path="/search" element={<SearchResults />} />
>>>>>>> ec17d2a (Initial commit)
          </Routes>
        </main>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
