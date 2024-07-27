import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../utils/status";

const initialState = {
    products: [],
    productsState: STATUS.IDLE,
    productDetail: {},
    productDetailStatus: STATUS.IDLE,
    searchKeyword: ""
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
export const searchProducts = createAsyncThunk('searchProducts', async (keyword) => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    return data.filter(product =>
        product.title.toLowerCase().includes(keyword.toLowerCase())
    );
});

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        setSearchKeyword: (state, action) => {
            state.searchKeyword = action.payload;
        }
    },
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
            })
            .addCase(searchProducts.fulfilled, (state, action) => {
                state.products = action.payload;
            });
    },
});
export const { setSearchKeyword } = productSlice.actions;
export default productSlice.reducer;
