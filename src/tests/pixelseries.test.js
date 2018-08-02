import React from 'react';
import PixelSeries from '../components/pages/PixelSeries';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
    expect(shallow(<PixelSeries />).find('.PixelSeries').exists()).toBe(true);
});