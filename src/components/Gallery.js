import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class Gallery extends Component {
    render() {
        const imageElements = this.props.carouselImages.map( image => 
            <div>
                <img src={image} className="carouselImage"/>
            </div>
        )
        return (
            <Carousel autoPlay={true} dynamicHeight={true} infiniteLoop={true} interval={7000} showStatus={false} showThumbs={false} transitionTime={2000}>
                {imageElements}
            </Carousel>
        );
    }
};

export default Gallery