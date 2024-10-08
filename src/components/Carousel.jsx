import { useState } from 'react';

const Carousel = ({ items }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    };

    return (
        <div className="relative w-full max-w-2xl mx-auto pt-4">
            <div className="overflow-hidden rounded-lg shadow-lg">
                <div
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {items.map((item, index) => (
                        <div key={index} className="min-w-full flex items-center justify-center">
                            <img src={item} alt="Event" className="w-auto h-[450px]  rounded-lg" />
                        </div>
                    ))}
                </div>
            </div>
            {/* Previous Button */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 shadow-lg hover:bg-gray-700 focus:outline-none"
            >
                &#10094;
            </button>
            {/* Next Button */}
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 shadow-lg hover:bg-gray-700 focus:outline-none"
            >
                &#10095;
            </button>
            {/* Indicator Dots */}
            <div className="flex justify-center mt-4 space-x-2">
                {items.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-indigo-600' : 'bg-gray-400'}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
