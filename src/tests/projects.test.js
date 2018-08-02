import React from 'react';
import Projects from '../components/pages/Projects';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
    expect(shallow(<Projects/>).find('.Projects').exists()).toBe(true);
});

it('renders same number of images and projects', () => {
    const images = shallow(<Projects />).find(<img/>).length;
    const components = shallow(<Projects />).find('h3').length;
    expect(images).toEqual(components);
});