import React from 'react';
import NavBar from '../components/NavBar';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
    shallow(<NavBar/>);
});