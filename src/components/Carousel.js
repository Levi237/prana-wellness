import React from 'react';

import './Carousel.css';

const Carousel = ({carouselContent}) => {
    const showQuotes = carouselContent.map((quote, key) => {
        return(
            <>
                <section>{quote.statement}</section>
                <div>- {quote.person}</div>
            </>
        )
    });
    return(
        <div className="carousel-container">
            <section>see why people love prana</section>
            <button>
                <div className="arrow-left"></div>
            </button>
            <div>
                {showQuotes}
            </div>
            <button>
                <div className="arrow-right"></div>
            </button>
        </div>
    );
};
export default Carousel;