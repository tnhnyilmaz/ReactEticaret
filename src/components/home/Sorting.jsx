import React, { memo, useCallback } from 'react';

const Sorting = ({ setSort }) => {
    console.log("sorting rendered")

    const sortingHandler = useCallback((e) => {
        setSort(e.target.value)
    }, [setSort]);
    return (
        <div className='bg-gray-100  my-5 p-5 flex justify-end'>
            <select onChange={sortingHandler} className='bg-white py-3 px-5' name="" id="">
                <option disabled value="">SEÇİNİZ..</option>
                <option value="inc">Artan</option>
                <option value="dec">Azalan</option>
            </select>
        </div>

    )
}

export default memo(Sorting)