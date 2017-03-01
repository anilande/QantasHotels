import React from 'react';
import { mount, shallow, render } from 'enzyme';
import {expect} from 'chai';

import Hotels from '../src/main';

describe('<Hotels/>', function () {
    it('should have a header h1', function () {
        const wrapper = shallow(<Hotels/>);
        expect(wrapper.find('h1')).to.have.length(1);
    });
    it('should have a list wrapper', function () {
        const wrapper = shallow(<Hotels/>);
        expect(wrapper.find('.lists-wrapper')).to.have.length(1);
    });
    it('should have a list', function () {
        const wrapper = shallow(<Hotels/>);
        expect(wrapper.find('List')).to.have.length(1);
    });
    it('should have an initial state', function () {
        const wrapper = mount(<Hotels/>);
        expect(wrapper.state().itemsList).to.be.defined;
        expect(JSON.stringify(wrapper.state().filters)).to.equal(JSON.stringify({ "top-deals": "Top Deals", "price-desc": "Price (high-low)", "price-asc": "Price (low-high)", "name-asc": "Name (A-Z)"}));
        expect(wrapper.state().title).to.equal('Sydney');
    });
});
