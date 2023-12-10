import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import CarouselButton from './carousel-button';

const ImageCarousel = ({ images }) => {
    return (
        <div className="relative">
        <Carousel 
        infiniteLoop
        autoPlay
       
        showStatus={false}
        
        renderArrowPrev={(clickHandler, hasPrev, labelPrev) => 
            hasPrev && <CarouselButton reverse={true} onClick={clickHandler} />
        }
        renderArrowNext={(clickHandler, hasNext, labelNext) => 
            hasNext && <CarouselButton reverse={false} onClick={clickHandler} />
        }
        >
            {images.map((image, index) => (
                <div key={index}>
                    {/* <img src={image} alt={`Slide ${index}`} /> */}
                    <div className='h-40 w-full bg-pink z-20'>
                        <p>{index}</p>

                    </div>
                </div>
            ))}
        </Carousel>
        </div>
    );
};

export default ImageCarousel;