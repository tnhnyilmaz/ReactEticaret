import React, { useCallback, useState } from 'react'
import Category from '../components/home/Category'
import Products from '../components/home/Products'
import SliderComp from '../components/home/SliderComp'
import Sorting from '../components/home/Sorting'
const Home = () => {
    console.log("home rendered")
    const [sort, setSort] = useState('');
    const [category, setCategory] = useState('');

    const memoizedSetSort = useCallback((newSort) => {
        setSort(newSort);
    }, []);


    const memoizedSetCategory = useCallback((newCategory) => {
        setCategory(newCategory);
    }, []);

    return (
        <div>
            <SliderComp />
            <Sorting setSort={memoizedSetSort} />
            <div className='flex'>
                <Category setCategory={memoizedSetCategory} />
                <Products category={category} sort={sort} />
            </div>
        </div>
    )
}

export default Home