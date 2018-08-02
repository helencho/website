import React from 'react';
import Projects from '../components/pages/Projects';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
    shallow(<Projects/>);
});