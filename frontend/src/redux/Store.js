import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';
<<<<<<< HEAD

export default configureStore({
  reducer: {
    cart: cartReducer
  }
});
=======
import wishlistReducer from './WishlistSlice';

export default configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer
  }
});
>>>>>>> ec17d2a (Initial commit)
