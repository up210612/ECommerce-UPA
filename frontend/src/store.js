import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import persistConfig from './persistConfig';
import productReducer from './slices/productSlice';
import cartReducer from './slices/cartSlice';
import clientReducer from './slices/clientSlice';
import checkoutReducer from './slices/checkoutSlice';

const persistedCartReducer = persistReducer(persistConfig, cartReducer);

const store = configureStore({
  reducer: {
    product: productReducer,
    cart: persistedCartReducer,
    client: clientReducer,
    checkout: checkoutReducer,
  }
});

const persistor = persistStore(store);

export { store, persistor };
