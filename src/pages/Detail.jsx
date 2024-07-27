import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading/Loading';
import DetailComp from '../components/detail/DetailComp';
import { getDetailProduct } from '../redux/productSlice';

const Detail = () => {
    console.log("detail rendered")
    const { id } = useParams();
    const dispatch = useDispatch();
    const { productDetail, productDetailStatus } = useSelector(state => state.products);

    useEffect(() => {
        dispatch(getDetailProduct(id));
    }, [dispatch, id]);

    return (
        <div>
            {
                productDetailStatus=="LOADING" ? <Loading/>: <DetailComp productDetail={productDetail} />
            }
        </div>
    );
};

export default Detail;
