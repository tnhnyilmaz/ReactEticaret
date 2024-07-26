import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../utils/status";

const initialState = {
    products: [],
    productsState: STATUS.IDLE,
    productDetail: {},
    productDetailStatus: STATUS.IDLE,
};

export const getProducts = createAsyncThunk('getProducts', async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    return data;
});

export const getCategoryProducts = createAsyncThunk('getCategory', async (category) => {
    const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
    const data = await response.json();
    return data;
});

export const getDetailProduct = createAsyncThunk('getProduct', async (id) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await response.json();
    return data;
});

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state) => {
                state.productsState = STATUS.LOADING;
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.productsState = STATUS.SUCCESS;
                state.products = action.payload;
            })
            .addCase(getProducts.rejected, (state) => {
                state.productsState = STATUS.FAIL;
            })
            .addCase(getDetailProduct.pending, (state) => {
                state.productDetailStatus = STATUS.LOADING;
            })
            .addCase(getDetailProduct.fulfilled, (state, action) => {
                state.productDetailStatus = STATUS.SUCCESS;
                state.productDetail = action.payload;
            })
            .addCase(getDetailProduct.rejected, (state) => {
                state.productDetailStatus = STATUS.FAIL;
            })
            .addCase(getCategoryProducts.pending, (state) => {
                state.productsState = STATUS.LOADING;
            })
            .addCase(getCategoryProducts.fulfilled, (state, action) => {
                state.productsState = STATUS.SUCCESS;
                state.products = action.payload;
            })
            .addCase(getCategoryProducts.rejected, (state) => {
                state.productsState = STATUS.FAIL;
            });
    },
});

export default productSlice.reducer;
