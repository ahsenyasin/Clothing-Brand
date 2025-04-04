import { createSlice } from '@reduxjs/toolkit';

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: [],
  reducers: {
    addToWishlist: (state, action) => {
      const product = action.payload;
      const existingProduct = state.find(item => item.id === product.id);

      if (!existingProduct) {
        state.push(product);
      }
    },
    removeFromWishlist: (state, action) => {
      const productId = action.payload;
      return state.filter(item => item.id !== productId);
    },
    clearWishlist: (state) => {
      return [];
    }
  }
});

export const { addToWishlist, removeFromWishlist, clearWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
