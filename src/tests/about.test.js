import React from 'react';
import About from '../components/pages/About';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
    shallow(<About/>);
});