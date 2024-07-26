import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({product}) => {
    const navigate=useNavigate();

    return (
        <div onClick={()=>navigate(`products/${product?.id}`)} className='w-[352px] p-2 mb-2 ml-4 border rounded-md relative cursor-pointer hover:bg-gray-100'>
            <div className='text-2xl font-bold absolute rounded-md top-0 right-0 bg-black text-white p-2 m-2' > {product?.price} <span>TL</span> </div>
            <img className='w-[200px] h-[200px] object-cover m-auto' src={product?.image} alt="" />
            <div className='text-center px-3 mt-3 font-bold'>{product?.title}</div>
        </div>
    )
}

export default Product