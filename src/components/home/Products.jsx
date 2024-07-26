import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoryProducts, getProducts } from '../../redux/productSlice';
import Loading from '../Loading/Loading';
import Product from './Product';

const Products = ({category,sort}) => {

    const dispatch = useDispatch();
    const { products, productsStatus } = useSelector(state => state.products)

    const [itemsOffset, setItemOffset] = useState(0);

    const itemsPerpage = 6;
    const endOffset = itemsOffset + itemsPerpage;
    const currentItems = products.slice(itemsOffset, endOffset);
    const pageCount = Math.ceil(products.length / itemsPerpage);

    const handlePageClick = (e) =>{
        const newOffset = (e.selected * itemsPerpage) % products.length;
        setItemOffset(newOffset);

    }

    console.log(products, "products")

    useEffect(() => {
        if(category){
            dispatch(getCategoryProducts(category))
        }else{
            dispatch(getProducts())
        }
        
    }, [dispatch,category])

    return (
        <div >
            {
                productsStatus === "LOADING" ? <Loading /> :
                    <>
                        <div className='flex flex-wrap'>
                            {
                                currentItems?.sort((a,b)=> sort=="inc" ?a.price-b.price:sort=="dec" ?b.price-a.price:null).map((product, i) => (
                                    <Product key={i} product={product} /> // 'return' ekledik.
                                ))
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
    )
}

export default Products