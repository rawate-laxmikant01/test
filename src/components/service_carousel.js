import React, { useState,useEffect } from 'react';

const ServiceCarousel = ({ items }) => {

    const [isMobile, setIsMobile] = useState(false);
    const [isTab, setIsTab] = useState(false);

    useEffect(() => {
        // Add a listener for changes to the screen size
        const mediaQuery = window.matchMedia("(max-width: 800px)");

        // Set the initial value of the `isMobile` state variable
        setIsMobile(mediaQuery.matches);

        // Define a callback function to handle changes to the media query
        const handleMediaQueryChange = (event) => {
            setIsMobile(event.matches);
        };

        // Add the callback function as a listener for changes for changes to the media query
        mediaQuery.addEventListener("change", handleMediaQueryChange);

        // Remove the listener when the component is unmounted
        return () => {
            mediaQuery.removeEventListener("change", handleMediaQueryChange);
        };
    }, []);

    useEffect(() => {
        // Add a listener for changes to the screen size
        const mediaQuery = window.matchMedia("(max-width: 1280px)");

        // Set the initial value of the `isMobile` state variable
        setIsTab(mediaQuery.matches);

        // Define a callback function to handle changes to the media query
        const handleMediaQueryChange = (event) => {
            setIsTab(event.matches);
        };

        // Add the callback function as a listener for changes for changes to the media query
        mediaQuery.addEventListener("change", handleMediaQueryChange);

        // Remove the listener when the component is unmounted
        return () => {
            mediaQuery.removeEventListener("change", handleMediaQueryChange);
        };
    }, []);

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const itemsPerPage = !isMobile ? isTab?2:3:1; // Number of items to show at a time

    const nextImage = () => {
        if (Array.isArray(items)) {
            setCurrentImageIndex((prevIndex) =>
                prevIndex + itemsPerPage >= items.length ? 0 : prevIndex + itemsPerPage
            );
        }
    };

    const prevImage = () => {
        if (Array.isArray(items)) {
            setCurrentImageIndex((prevIndex) =>
                prevIndex - itemsPerPage < 0
                    ? items.length - itemsPerPage
                    : prevIndex - itemsPerPage
            );
        }
    };

    // Create an array of items to display based on the current index and itemsPerPage
    const visibleItems = Array.isArray(items)
        ? items.slice(currentImageIndex, currentImageIndex + itemsPerPage)
        : [];

    return (
        <div className="relative">
            <div className="w-full overflow-hidden p-4">
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 mt-12 text-[#887C68] text-left">
                    {visibleItems.map((item, index) => (
                        <div
                            key={index}
                            className=" relative rounded shadow-lg flex flex-col "
                        > <div class="relative ">
                                <img src={item.image} alt="Your Image" class="w-full h-[532px]"></img>
                                <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black from-0% to-transparent to-80% "></div>
                            </div>
                            <div className=" text-[28px] p-4 px-6 absolute bottom-6 left-0 w-full font-semibold text-[#FFFFFF]  leading-[51px] tracking-wide text-center uppercase">
                                {item.name}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <button
                onClick={prevImage}
                className="absolute left-0 lg:left-[-30px] top-1/2 transform -translate-y-1/2 px-2 py-1 bg-[#F6F6F6] text-white shadow-md shadow-black"
            >
                <span class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg class="w-5 h-5 text-[#64615B] sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                    <span class="hidden">Previous</span>
                </span>
            </button>
            <button
                onClick={nextImage}
                className="absolute right-0 lg:right-[-30px] top-1/2 transform -translate-y-1/2 px-2 py-1 bg-[#F6F6F6] text-white shadow-md shadow-black"
            >
                <span class="inline-flex justify-center  w-8 h-8 items-center sm:w-10 sm:h-10  dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg class="w-5 h-5 text-[#64615B] sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                    <span class="hidden">Next</span>
                </span>

                {/* <span class="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg class="w-5 h-5 text-[#64615B] sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                    <span class="hidden">Next</span>
                </span> */}
            </button>
        </div>
    );
};

export default ServiceCarousel;
