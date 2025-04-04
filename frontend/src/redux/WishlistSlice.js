import { createSlice } from '@reduxjs/toolkit';

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: [],
  reducers: {
    addToWishlist: (state, action) => {
<<<<<<< HEAD
      const product = action.payload;
      const existingProduct = state.find(item => item.id === product.id);

      if (!existingProduct) {
        state.push(product);
      }
    },
    removeFromWishlist: (state, action) => {
      const productId = action.payload;
      return state.filter(item => item.id !== productId);
=======
      const item = action.payload;
      const existingItem = state.find(wishlistItem => wishlistItem.id === item.id);

      if (!existingItem) {
        state.push(item);
      }
    },
    removeFromWishlist: (state, action) => {
      const idToRemove = action.payload;
      return state.filter(item => item.id !== idToRemove);
>>>>>>> ec17d2a (Initial commit)
    },
    clearWishlist: (state) => {
      return [];
    }
  }
});

export const { addToWishlist, removeFromWishlist, clearWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
