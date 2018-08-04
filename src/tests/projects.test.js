import React from 'react';
import Projects from '../components/pages/Projects';
import ProjectImage from '../components/elements/ProjectImage';
import ProjectModal from '../components/elements/ProjectModal';
import projectData from '../db/projects.json';
import { shallow, mount } from 'enzyme';

describe('Initial render', () => {
    it('renders without crashing', () => {
        expect(shallow(<Projects />).find('.Projects').exists()).toBe(true);
    });
});

describe('Project data object contains', () => {
    it('title as name', () => {
        projectData.map(project => {
            expect(project.name).toBeTruthy();
        });
    });

    it('tagline', () => {
        projectData.map(project => {
            expect(project.tagline).toBeTruthy();
        });
    });

    it('description', () => {
        projectData.map(project => {
            expect(project.description).toBeTruthy();
        });
    });

    it('tech stacks', () => {
        projectData.map(project => {
            expect(project.tech.length).toBeTruthy();
        });
    });

    it('thumbnail as png', () => {
        projectData.map(project => {
            expect(project.links.thumb).toBeTruthy();
            expect(project.links.thumb).toContain('.png');
        });
    });

    it('fullsize image as png', () => {
        projectData.map(project => {
            expect(project.links.img).toBeTruthy();
            expect(project.links.img).toContain('.png');
            // Check to see it contains correct image link (.toHaveValue) => static url 
        });
    });

    it('live url', () => {
        projectData.map(project => {
            expect(project.links.live).toBeTruthy();
        });
    });

    it('source code url', () => {
        projectData.map(project => {
            expect(project.links.source).toBeTruthy();
        });
    });
});

describe('There are matching', () => {
    it('images to hidden overlay components', () => {
        const images = mount(<Projects />).find('img').length;
        const overlay = mount(<Projects />).find('.overlay').length;
        expect(images).toEqual(overlay);
    });

    it('images to project titles', () => {
        const images = mount(<Projects />).find('img').length;
        const components = mount(<Projects />).find('h3').length;
        expect(images).toEqual(components);
    });
});

describe('<ProjectModal />', () => {
    it('open modal when .overlay is clicked', () => {
        projectData.map(project => {
            const wrapper = shallow(<ProjectImage data={project} />);
            wrapper.find('.overlay').simulate('click');
            expect(wrapper.find('Modal').prop('isOpen')).toEqual(true);
        });
    });

    it('close modal when X is clicked', () => {
        projectData.map(project => {
            shallow(<ProjectModal data={project} />).find('.close').simulate('click');
            const wrapper = shallow(<ProjectImage data={project} />);
            expect(wrapper.find('Modal').prop('isOpen')).toEqual(false);
        });
    });
});

