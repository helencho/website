import React from 'react';
import Projects from '../components/pages/Projects';
import ProjectImage from '../components/elements/ProjectImage';
import ProjectModal from '../components/elements/ProjectModal';
import projectData from '../db/projects.json';
import { shallow, mount } from 'enzyme';

it('renders without crashing', () => {
    expect(shallow(<Projects />).find('.Projects').exists()).toBe(true);
});


describe('<ProjectModal />', () => {
    it('open modal when .overlay is clicked', () => {
        const wrapper = shallow(<ProjectImage data={projectData[0]} />);
        wrapper.find('.overlay').simulate('click');
        expect(wrapper.find(<ProjectModal />).prop('isOpen')).toEqual(true);
    })
});

