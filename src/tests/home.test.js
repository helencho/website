import React from 'react';
import Home from '../components/pages/Home';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
    shallow(<Home/>);
});