import React from 'react';
import { mount, shallow, render } from 'enzyme';
import {expect} from 'chai';

import Filter from '../../src/components/filter';

describe('<Filter/>', function () {
    it('should have a selectbox', function () {
        const
            options = { "top-deals": "Top Deals", "price-desc": "Price (high-low)", "price-asc": "Price (low-high)", "name-asc": "Name (A-Z)" },
            wrapper = mount(<Filter options={options}/>);
        expect(wrapper.find('select')).to.have.length(1);
    });
    it('should have an initial state', function () {
        const
            options = { "top-deals": "Top Deals", "price-desc": "Price (high-low)", "price-asc": "Price (low-high)", "name-asc": "Name (A-Z)" },
            wrapper = mount(<Filter options={options}/>);

        expect(wrapper.props().options).to.be.defined;
        expect(JSON.stringify(wrapper.props().options)).to.equal(JSON.stringify({ "top-deals": "Top Deals", "price-desc": "Price (high-low)", "price-asc": "Price (low-high)", "name-asc": "Name (A-Z)"}));
    });
});

