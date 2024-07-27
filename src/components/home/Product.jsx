import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart, getCartTotal } from '../../redux/cartSlice';

const Product = ({ product }) => {
    console.log("product rendered");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [quantity] = useState(1);

    const handleNavigateToDetail = () => {
        navigate(`products/${product?.id}`);
    };

    const addBasket = useCallback((e) => {
        e.stopPropagation();
        dispatch(addToCart({
            id: product?.id,
            title: product?.title,
            image: product?.image,
            price: product?.price,
            quantity: quantity
        }));
        dispatch(getCartTotal());
    }, [dispatch, product, quantity]);

    return (
        <div
            onClick={handleNavigateToDetail}
            className='w-[352px] p-2 mb-2 ml-4 border rounded-md relative cursor-pointer hover:bg-gray-100'
        >
            <div className='text-2xl font-bold absolute rounded-md top-0 right-0 bg-black text-white p-2 m-2'>
                {product?.price} <span>TL</span>
            </div>
            <img className='w-[200px] h-[200px] object-cover m-auto' src={product?.image} alt="" />
            <div className='text-center px-3 mt-3 font-bold'>{product?.title}</div>
            <div>
                <button
                    onClick={addBasket}
                    className='text-xl font-bold absolute rounded-md bottom-12 right-2 bg-red-600 text-white p-2 m-2'
                >
                    Sepete Ekle
                </button>
            </div>
        </div>
    );
};

export default Product;
