import React from 'react';
import { mount, shallow, render } from 'enzyme';
import {expect} from 'chai';
import data from '../mock/data/data';

import List from '../../src/components/list';

describe('<List/>', function () {
    it('should have a filter and list component', function () {
        const wrapper = shallow(<List itemsList={ data.hotels} options={ data.sort_filters } title='test'/>);

        expect(wrapper.find('Filter')).to.have.length(1);
        expect(wrapper.find('ListItem')).to.have.length(5);
    });
    it('should have an initial state', function () {
        const wrapper = shallow(<List itemsList={ data.hotels } options={ data.sort_filters } title={data.query.location}/>);
        expect(wrapper.state().itemsList).to.be.defined;
        expect(wrapper.state().itemsList).to.have.length(5);
        expect(wrapper.state().title).to.be.defined;
        expect(wrapper.state().sorts).to.be.defined;
    });
});

