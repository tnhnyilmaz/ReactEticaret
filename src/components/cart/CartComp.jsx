import React, { memo, useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart, updateCartQuantity } from '../../redux/cartSlice';
import WarningComp from '../warning/WarningComp';

const CartComp = ({ cart }) => {
    console.log("cartComp rendered");
    const [isModal, setIsModal] = useState(false);
    const dispatch = useDispatch();

    const btnOK = useCallback(() => {
        dispatch(removeFromCart(cart?.id));
        setIsModal(false);
    }, [dispatch, cart?.id]);

    const btnNO = useCallback(() => {
        setIsModal(false);
    }, []);

    const decrement = useCallback(() => {
        if (cart?.quantity ===1) {
            setIsModal(true)
        }
        else {
            dispatch(updateCartQuantity({ id: cart?.id, quantity: cart?.quantity - 1 }));
        }
    
    }, [dispatch, cart]);

    const increment = useCallback(() => {
        dispatch(updateCartQuantity({ id: cart?.id, quantity: cart?.quantity + 1 }));
    }, [dispatch, cart]);


    return (
        <div className='my-5 flex items-center justify-between'>
            <img className='w-[150px] h-[150px] object-cover' src={cart?.image} alt="" />
            <div className='w-[476px]'>
                <div className='text-xl'>{cart?.title}</div>
                <div>{cart?.description}</div>
            </div>
            <div className='font-bold text-2xl'>{cart?.price} TL</div>

            <div className='text-2xl cursor-pointer flex justify'>
                <div onClick={decrement} >-</div>
                <div>{cart?.quantity}</div>
                <div onClick={increment} >+</div>

            </div>
            <div onClick={() => setIsModal(true)} className='bg-red-500 text-white w-[150px] text-2xl cursor-pointer rounded-md h-16 flex items-center justify-center'>Ürünü Sil</div>
            <WarningComp isOpen={isModal} onClose={btnNO} onConfirm={btnOK} />
        </div>
    );
};

export default memo(CartComp);
