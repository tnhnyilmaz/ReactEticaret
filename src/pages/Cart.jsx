import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartComp from '../components/cart/CartComp';
import { getCartTotal } from '../redux/cartSlice';

const Cart = () => {
    console.log("cart rendere")
    const dispatch = useDispatch();
    const { carts,totalAmount,itemCount } = useSelector(state => state.carts)

    useEffect(() => {
        dispatch(getCartTotal())
    }, [dispatch,carts])

    return (
        <div>
            {
                carts?.length>0 ?
                <div>
                    {
                        carts?.map((cart,i)=>(
                            <CartComp key={i} cart={cart} />
                        ))
                    }
                    <div className='flex items-center justify-end text-2xl '>TOPLAM TUTAR: <span className='font-bold text-3xl'> {totalAmount} TL </span> </div>
                    
                </div>:
                <div>
                    Kartınız Boş..
                </div>
            }
        </div>
    )
}

export default memo(Cart)