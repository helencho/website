import React from 'react';
import Home from '../components/pages/Home';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
    expect(shallow(<Home />).find('.Home').exists()).toBe(true);
});