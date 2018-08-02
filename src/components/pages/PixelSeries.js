import React, { Component } from 'react';
import Pixel from '../elements/Pixel';
import pixelData from '../../db/pixel.json';

class PixelSeries extends Component {
    render() {
        return (
            <div className="PixelSeries fadein main-header">
                <h1>Pixel Series</h1>
                <div className="showcase">
                    {pixelData.map((pixel, id) => <Pixel data={pixel} key={id} />)}
                </div>
            </div>
        )
    }
}

export default PixelSeries;