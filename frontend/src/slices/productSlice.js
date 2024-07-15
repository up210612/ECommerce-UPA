import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list : []
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers : {
        getProducts : (state, action) => {
            state.list = action.payload;
        },
    }
});

export const { getProducts } = productSlice.actions;

export default productSlice.reducer;