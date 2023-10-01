import React from 'react';
import image from '../images/My Pic 1.png'
const Banner = () => {
    return (
        <div className=" bg-transparent py-12 ">
            <div className="container mx-auto flex lg:flex-row md:flex-col-reverse sm:flex-col-reverse items-center justify-center">
                {/* Left Column */}
                <div className="md:w-1/2 md:pr-12">
                    <h1 className="text-3xl md:text-5xl font-bold text-rose-900 mb-4">
                        Dynamic Banner
                    </h1>
                    <p className="text-lg md:text-xl text-rose-900 mb-4">
                        This is a two-column banner with dynamic animations.
                    </p>
                    <p className="text-lg md:text-xl text-rose-900 mb-8">
                        Add your content here.
                    </p>
                    <a
                        href="/your-cv.pdf" // Replace with the actual path to your CV file
                        download
                        className="bg-rose-800 text-white  text-lg md:text-xl font-bold py-2 px-6 rounded-full transition duration-300 transform hover:scale-105 inline-block"
                    >
                        Download CV
                    </a>
                </div>

                {/* Right Column */}
                <div className="mt-8 md:mt-0">
                    <img
                        src={image}
                        alt="Banner Image"
                       
                    />
                </div>
            </div>
        </div>
    );
};

export default Banner;