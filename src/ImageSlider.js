import React from 'react';

class ImageSlider extends React.Component {

    state = { currentSlideIndex: 0 }

    render() {
        return(
            <div className="imgSlider">
                <h1>I am on slide {this.state.currentSlideIndex}</h1>
            </div>
        )
    }
}

export default ImageSlider;
