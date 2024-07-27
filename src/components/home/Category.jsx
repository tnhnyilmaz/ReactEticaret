import React, { memo, useCallback, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../redux/categorySlice';

const Category = ({ setCategory }) => {
    console.log("category rendered");
    const dispatch = useDispatch();
    const { categories } = useSelector(state => state.categories);


    const memoizedSetCategory = useCallback((category) => {
        setCategory(category);
    }, [setCategory]);

    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch]);


    const memoizedCategories = useMemo(() => categories, [categories]);

    return (
        <div className='w-1/6 bg-gray-100 p-5 max-h-screen'>
            <div className='border-b pb-1 px-2 text-xl font-bold'>KATEGORİ</div>
            {
                memoizedCategories?.map((category) => (
                    <div
                        onClick={() => memoizedSetCategory(category)}
                        className='text-lg mt-2 cursor-pointer hover:bg-gray-200 p-2'
                        key={category.id || category} // Ensure a unique key if possible
                    >
                        {category.title || category}
                    </div>
                ))
            }
        </div>
    );
};

export default memo(Category);
