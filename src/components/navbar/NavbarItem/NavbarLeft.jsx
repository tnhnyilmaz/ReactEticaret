import React from 'react'
import { useNavigate } from 'react-router-dom'

const NavbarLeft = () => {
    const navigate=useNavigate();
    return (
        <div onClick={()=> navigate("/")} className='text-6xl'> ShopZon</div>
    )
}

export default NavbarLeft