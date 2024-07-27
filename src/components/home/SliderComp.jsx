import React, { memo } from 'react';
import Slider from 'react-slick';
const SliderComp = () => {
    console.log("slidercomp rendered")
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div>
            <Slider {...settings}>
                <div className='!flex items-center text-5xl bg-gray-100 px-6 '>
                    <div className='p-4'>
                        <div className='test-9xl font-bold'>Nike Dunk Low Unlocked By You</div>
                        <div className='text-lg my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis distinctio ipsum totam, voluptate sed!</div>
                        <div className='border rounded-full cursor-pointer text-3xl w-[200px] h16 flex items-center justify-center bg-gray-200'>İncele</div>
                    </div>
                    <img className=" h-72" src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/96610838-ebc8-4e42-9d4b-acaec7311b1c/custom-dunk-low-unlocked-by-you.png  " alt="" />
                </div>
                <div className='!flex items-center text-5xl bg-gray-100 px-6'>
                    <div className='p-4'>
                        <div className='test-9xl font-bold'>Nike Dunk Low Next Nature</div>
                        <div className='text-lg my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis distinctio ipsum totam, voluptate sed!</div>
                        <div className='border rounded-full cursor-pointer text-3xl w-[200px] h16 flex items-center justify-center bg-gray-200'>İncele</div>
                    </div>
                    <img className=" h-72" src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5a7cd144-04d2-47ba-832e-10faa2bf7c75/NIKE+DUNK+LOW+NN.png" alt="" />
                </div>
            </Slider>

        </div>
    )
}

export default memo(SliderComp)