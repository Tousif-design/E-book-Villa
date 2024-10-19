import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import List from "../../public/list.json"; // Ensure this path is correct
import Cards from './cards'; // Ensure the path is correct

const FreeBooks = () => {
    // Ensure List is an array before filtering
    const filterData = Array.isArray(List) ? List.filter(data => data.category === "Free") : [];

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className='flex flex-col items-center justify-center max-w-full container mx-auto md:px-20 px-4 mt-6'>
        <div className='text-center'>
            <h1 className='font-semibold text-xl pb-2'>Study Material</h1>
            <p className='text-sm md:text-base'>Education is the most powerful weapon which you can use to change the world.</p>
        </div>
    </div>
    
    );
};

export default FreeBooks;
