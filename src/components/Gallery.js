import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class Gallery extends Component {
    render() {
        const imageElements = this.props.images.map( image => 
            <div>
                <img src={image} />
                <p className='legend'>Legend 1</p>
            </div>
        )
        return (
            <Carousel>
                {imageElements}
            </Carousel>
        );
    }
};

export default Gallery