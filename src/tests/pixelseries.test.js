import React from 'react';
import PixelSeries from '../components/pages/PixelSeries';
import pixelData from '../db/pixel.json';
import { shallow, mount } from 'enzyme';

it('renders without crashing', () => {
    expect(shallow(<PixelSeries />).find('.PixelSeries').exists()).toBe(true);
});

describe('pixel data object contains', () => {
    it('name', () => {
        pixelData.map(pixel => {
            expect(pixel.name).toBeTruthy();
        });
    });

    it('image url', () => {
        pixelData.map(pixel => {
            expect(pixel.image).toBeTruthy();
        });
    });
});

describe('there are matching', () => {
    it('images to names', () => {
        const images = mount(<PixelSeries/>).find('img').length;
        const names = mount(<PixelSeries/>).find('p').length;
        expect(images).toEqual(names);
    });
});