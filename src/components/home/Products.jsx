import React, { useCallback, useEffect, useMemo, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoryProducts, getProducts, searchProducts } from '../../redux/productSlice';
import Loading from '../Loading/Loading';
import Product from './Product';

const Products = ({ category, sort }) => {
    console.log("products rendered");
    const dispatch = useDispatch();
    const { products, productsStatus, searchKeyword } = useSelector(state => state.products);

    const [itemsOffset, setItemOffset] = useState(0);

    const itemsPerPage = 6;
    const endOffset = itemsOffset + itemsPerPage;
    const pageCount = Math.ceil(products.length / itemsPerPage);

    const currentItems = useMemo(() => {
        let filteredProducts = products;

        if (searchKeyword.trim() !== '') {
            const keywordLower = searchKeyword.toLowerCase();
            filteredProducts = filteredProducts.filter(product =>
                product.title.toLowerCase().includes(keywordLower)
            );
        }

        return filteredProducts
            .slice(itemsOffset, endOffset)
            .sort((a, b) => {
                if (sort === "inc") return a.price - b.price;
                if (sort === "dec") return b.price - a.price;
                return 0;
            });
    }, [products, itemsOffset, endOffset, sort, searchKeyword]);

    const handlePageClick = useCallback((e) => {
        const newOffset = (e.selected * itemsPerPage) % products.length;
        setItemOffset(newOffset);
    }, [itemsPerPage, products.length]);

    useEffect(() => {
        if (searchKeyword.trim() === '') {
            if (category) {
                dispatch(getCategoryProducts(category));
            } else {
                dispatch(getProducts());
            }
        } else {
            dispatch(searchProducts(searchKeyword));
        }
    }, [dispatch, category, searchKeyword]);

    return (
        <div>
            {
                productsStatus === "LOADING" ? <Loading /> :
                    <>
                        <div className='flex flex-wrap'>
                            {
                                currentItems.length === 0 ? (
                                    <div>Aramanıza uygun ürün bulunamadı.</div>
                                ) : (
                                    currentItems.map((product) => (
                                        <Product key={product.id} product={product} />
                                    ))
                                )
                            }
                        </div>
                        <ReactPaginate
                            className='paginate'
                            breakLabel="..."
                            nextLabel=">"
                            onPageChange={handlePageClick}
                            pageRangeDisplayed={5}
                            pageCount={pageCount}
                            previousLabel="<"
                            renderOnZeroPageCount={null}
                        />
                    </>
            }
        </div>
    );
};

export default Products;
