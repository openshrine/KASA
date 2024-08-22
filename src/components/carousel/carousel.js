import React, { useState } from 'react';
import '../carousel/carousel.scss';

function Carousel({ pictures }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const newIndex = currentIndex === 0 ? pictures.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const newIndex = currentIndex === pictures.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <div className="carousel">
            <img src={pictures[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="carousel__image" />
            {pictures.length > 1 && (
                <>
                    <button className="carousel__button carousel__button--left" onClick={prevSlide}>
                        <i className="fa-solid fa-chevron-left"></i>
                    </button>
                    <button className="carousel__button carousel__button--right" onClick={nextSlide}>
                        <i className="fa-solid fa-chevron-right"></i>
                    </button>
                </>
            )}
            <div className="carousel__counter">
                {currentIndex + 1}/{pictures.length}
            </div>
        </div>
    );
}

export default Carousel;
