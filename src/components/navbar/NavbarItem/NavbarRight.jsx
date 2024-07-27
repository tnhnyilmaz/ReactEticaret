import React, { useCallback, useEffect, useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { SlBasket } from 'react-icons/sl';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCartTotal } from '../../../redux/cartSlice';
import { setSearchKeyword } from '../../../redux/productSlice';

const NavbarRight = () => {
    const dispatch = useDispatch();
    const { itemCount } = useSelector(state => state.carts);
    const navigate = useNavigate();
    const [searchKeyword, setSearchKeywordLocal] = useState('');

    useEffect(() => {
        dispatch(getCartTotal());
    }, [dispatch]);

    const handleSearch = useCallback(() => {
        dispatch(setSearchKeyword(searchKeyword));
    }, [dispatch, searchKeyword]);

    const searchHandler = useCallback((e) => {
        setSearchKeywordLocal(e.target.value);
    }, []);

    const handleKeyDown = useCallback((e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    }, [handleSearch]);

    return (
        <div className='flex items-center gap-6'>
            <div className='flex items-center border p-3 rounded-full bg-gray-200'>
                <input
                    className='bg-gray-200 outline-none'
                    type="text"
                    placeholder='Arama Yapınız..'
                    value={searchKeyword}
                    onChange={searchHandler}
                    onKeyDown={handleKeyDown}
                />
                <BiSearch size={25} onClick={handleSearch} />
            </div>
            <div onClick={() => navigate("cart")} className='relative'>
                <div className='absolute -top-3 -right-3 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center'>{itemCount}</div>
                <SlBasket size={25} />
            </div>
        </div>
    );
};

export default NavbarRight;
