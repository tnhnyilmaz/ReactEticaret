import React, { useEffect } from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { BiSearch } from 'react-icons/bi'
import { SlBasket } from 'react-icons/sl'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getCartTotal } from '../../../redux/cartSlice'

const NavbarRight = () => {
    const dispatch=useDispatch();
    const {itemCount} =useSelector(state=> state.carts)
    const navigate=useNavigate()
    

    useEffect(()=>{
        dispatch(getCartTotal())
    },[dispatch])
    return (
        <div className='flex items-center gap-8' >
            <div className='flex items-center border p-3 rounded-full bg-gray-200'>
                <input className='bg-gray-200 outline-none' type="text" placeholder='Arama Yapınız..' />
                <BiSearch size={25} />
            </div>
            <AiOutlineHeart size={25} />
            <div onClick={()=>navigate("cart")} className='relative'>
                <div className='absolute -top-3 -right-3 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center'>{itemCount}</div>
                <SlBasket size={25} />
            </div>

        </div>
    )
}

export default NavbarRight