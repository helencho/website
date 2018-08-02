import React from 'react';
import Pixel from '../components/pages/Pixel';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
    shallow(<Pixel/>);
});