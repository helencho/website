import React from 'react';
import About from '../components/pages/About';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
    expect(shallow(<About/>).find('.About').exists()).toBe(true);
});