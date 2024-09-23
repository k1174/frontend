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
        <div className="relative w-full max-w-2xl mx-auto">
            <div className="overflow-hidden rounded-lg">
                <div
                    className="flex transition-transform duration-500"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {items.map((item, index) => (
                        <div key={index} className="min-w-full ">
                            <img key={index} src={item} alt="event" className="w-600 h-auto" />
                        </div>
                    ))}
                </div>
            </div>
            <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-md p-2"
            >
                &#10094;
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-md p-2"
            >
                &#10095;
            </button>
            <div className="flex justify-center mt-2">
                {items.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2 h-2 mx-1 rounded-full ${currentIndex === index ? 'bg-blue-600' : 'bg-gray-300'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
