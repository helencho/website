import React from 'react';
import PixelSeries from '../components/pages/PixelSeries';
import { shallow, mount } from 'enzyme';

it('renders without crashing', () => {
    expect(shallow(<PixelSeries />).find('.PixelSeries').exists()).toBe(true);
});

it('renders same numbers of images and names', () => {
    const images = mount(<PixelSeries/>).find('img').length;
    const names = mount(<PixelSeries/>).find('p').length;
    expect(images).toEqual(names);
});