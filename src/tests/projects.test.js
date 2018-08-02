import React from 'react';
import Projects from '../components/pages/Projects';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
    expect(shallow(<Projects/>).find('.Projects').exists()).toBe(true);
});

it('renders same number of images and projects', () => {
    // Find length of images 
    const images = shallow(<Projects />).find(<img/>).length;
    // Find length of ProjectImage components 
    const components = shallow(<Projects />).find('.ProjectImage').length;
    // Ensure equality 
    expect(images).toEqual(components);
});