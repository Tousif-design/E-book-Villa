import React from 'react';
import BannerImage from "../../public/Banner.png";

const Banner = () => {
    return (
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row items-center justify-center'>
            <div className='w-full md:w-1/2 mt-12 md:mt-32 order-2 md:order-1 text-center md:text-left'>
                <div className='space-y-6'>
                    <h1 className='text-3xl md:text-4xl font-bold'>
                        Hello, welcome here to learn something <span className='text-pink-500'>new-everyday</span>
                    </h1>
                    <p className='text-lg md:text-xl'>
                        "Unlock the door to limitless knowledge—every page is a new adventure! Every book is a key to new worlds, ideas, and perspectives. Journey through pages filled with wisdom, wonder, and inspiration. Embrace the thrill of discovery as you grow, learn, and transform. Dive into our collection and start your journey today!"
                    </p>
                </div>
                <button className="btn bg-pink-500 mt-6 mx-auto md:mx-0 text-white hover:bg-pink-800 duration-300">Download.</button>
            </div>

            <div className='order-1 w-full md:w-1/2 mt-8 md:mt-0 ml-0 md:ml-12 flex justify-center'>
                <img src={BannerImage} alt="Image-Banner" className="mt-12" />
            </div>
        </div>
    );
}

export default Banner;
