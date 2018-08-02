import React from 'react';
import PixelSeries from '../components/pages/PixelSeries';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
    expect(shallow(<PixelSeries />).find('.PixelSeries').exists()).toBe(true);
});

it('renders same numbers of images and names', () => {
    const images = shallow(<PixelSeries/>).find('img').length;
    const names = shallow(<PixelSeries/>).find('p').length;
    expect(images).toEqual(names);
});