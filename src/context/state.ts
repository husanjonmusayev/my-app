import { createSlice } from '@reduxjs/toolkit';

interface StoreState {
  data: string[];
}

const initialState: StoreState = {
  data: [],
};

const storeSlice = createSlice({
  name: 'store',
  initialState,
  reducers: {
    setStoreData(state, action: { payload: string[] }) {
      return { ...state, data: action.payload };
    },
  },
});

// Destructure and export action creators individually
export const { setStoreData } = storeSlice.actions;
export default storeSlice.reducer; // Export the reducer
