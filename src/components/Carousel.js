import React from 'react';

import './Carousel.css';

const Carousel = ({carouselContent}) => {
    return(
        <div className="carousel-container">
            <section>see why people love prana</section>
            <button>
                <div className="arrow-left"></div>
            </button>
            <div>
                {/* <section>{carouselContent.quote}</section> */}
                {/* <div>-{carouselContent.name}</div> */}
            </div>
            <button>
                <div className="arrow-right"></div>
            </button>
        </div>
    )
}
export default Carousel