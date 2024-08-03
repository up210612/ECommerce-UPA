import { configureStore } from '@reduxjs/toolkit';
import productReducer from './slices/productSlice';
import cartReducer from './slices/cartSlice';
import clientReducer from './slices/clientSlice';
import checkoutReducer from './slices/checkoutSlice';


export const store = configureStore({
    reducer: {
        product: productReducer,
        cart: cartReducer,
        client: clientReducer,
        checkout: checkoutReducer,
    }
})