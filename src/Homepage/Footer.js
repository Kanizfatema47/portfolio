import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
    return (
        <div class="flex items-center justify-center">
            <div class="m-2 max-w-5xl items-center">
                <div class="flex flex-col items-center"> 
                    <div className="hidden md:flex space-x-4">
                        <a
                            href="#"
                            className="text-rose-900 transform hover:scale-110 transition-transform"
                        >
                            <FontAwesomeIcon icon={faGoogle} size="lg" />
                        </a>
                        <a
                            href="#"
                            className=" text-rose-900 transform hover:scale-110 transition-transform"
                        >
                            <FontAwesomeIcon icon={faLinkedin} size="lg" />
                        </a>
                        <a
                            href="#"
                            className="text-rose-900 transform hover:scale-110 transition-transform"
                        >
                            <FontAwesomeIcon icon={faGithub} size="lg" />
                        </a>
                    </div>
                    <div class="flex md:flex-row flex-col">
                        <p class="hover:text-rose-800  text-rose-900 font-medium m-2"> <a href="#">Home</a> </p>
                        <p class="hover:text-rose-800  text-rose-900 font-medium m-2"> <a href="#">About us </a> </p>
                        <p class="hover:text-rose-800  text-rose-900 font-medium m-2"> <a href="#">Services </a> </p>
                        <p class="hover:text-rose-800  text-rose-900 font-medium m-2"> <a href="#">Contact Us </a> </p>
                        <p class="hover:text-rose-800  text-rose-900 font-medium m-2"> <a href="#"> Privacy Policy </a> </p>
                    </div>
                    <div class="text-rose-900 font-medium mt-4 text-xs"> Copyright 2022. All rights reserved by <a href="#"
                        class="text-rose-800 ">KF</a> </div>
                </div>
            </div>
        </div>

    );
};

export default Footer;