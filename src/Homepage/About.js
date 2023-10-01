import React from 'react';
import profileImage from '../images/my pic.jpg' // Replace 'profile.jpg' with your image file path

const About = () => {
    return (
        <section className="bg-gray-100 font-sans">
            <h1 className="text-4xl flex flex-col justify-center items-center font-bold pt-8 mb-4 ">About Me</h1>

            <div className="container mx-auto p-8 flex flex-col md:flex-row">
                {/* Column 1: Image */}
                <div className="md:w-1/2 flex justify-center items-center mb-8 md:mb-0">
                    <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-white hover:shadow-lg">
                        <img className="w-full h-full object-cover" src={profileImage} alt="Profile" />
                    </div>
                </div>

                {/* Column 2: About Me Description and Button */}
                <div className="md:w-1/2 max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
                    <p className="text-gray-700 mb-8">I am a web developer with a focus on creating beautiful and functional websites. My expertise lies in front-end and back-end development, and I am always eager to learn new technologies and frameworks. I am dedicated to delivering high-quality work and creating seamless user experiences.</p>

                    <div className="text-center md:text-left">
                        <p className="text-lg text-gray-700 mb-2">Let's work together and create something amazing!</p>
                        <button className="bg-rose-900 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline">
                            Contact Me
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
