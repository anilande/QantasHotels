import React from 'react';
import { mount, shallow, render } from 'enzyme';
import {expect} from 'chai';

import Rating from '../../src/components/rating';

describe('<Filter/>', function () {
    it('should have a wrapper element', function () {
        const wrapper = mount(<Rating rating='3.5' ratingType='star'/>);
        expect(wrapper.find('.rating')).to.have.length(1);
        expect(wrapper.find('.current-rating')).to.have.length(1);
        expect(wrapper.find('.rating').children('i')).to.have.length(5);
        expect(wrapper.find('.current-rating').children('i')).to.have.length(5);
    });
    it('should have properties', function () {
        const wrapper = mount(<Rating rating='3.5' ratingType='self'/>);
        expect(wrapper.props().rating).to.be.defined;
        expect(wrapper.props().ratingType).to.be.defined;
        expect(wrapper.props().rating).to.be.equal('3.5');
        expect(wrapper.props().ratingType).to.be.equal('self');
    });
});

