import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../utils/status";

const initialState = {
    products: [],
    productsState: STATUS.IDLE,
    productDetail: {},
    productDetailStatus: STATUS.IDLE,
};

export const getSearchProducts = createAsyncThunk('searchProducts', async (keyword) => {
    const response = await fetch(`https://fakestoreapi.com/products/:${keyword}`);
    const data = await response.json();
    return data;
});

const productSlice = createSlice({
    name: "search",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state) => {
                state.productsState = STATUS.LOADING;
            })

    },
});

export default productSlice.reducer;
