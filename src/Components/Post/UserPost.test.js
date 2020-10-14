import React from 'react';
import { shallow } from 'enzyme';
import UserPost from './UserPost'


describe('UserPost Component',()=>{
    test('Should render without errors',()=>{
        const component = shallow(<UserPost />);
        console.log(component.debug());
        const wrapper = component.find('.user-post-card');
        expect(wrapper.length).toBe(1);
    });

});
