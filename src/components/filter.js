import React, {Component} from 'react';
import ReactDom from 'react-dom';

class Filter extends Component {
    constructor () {
        super(...arguments);
        this.handelChange = this.handelChange.bind(this);
    }

    handelChange(e) {
    	this.props.onChange(e.target.value);
    }

    render () {
        const options = this.props.options;
        let options_nodes = [];

        Object.keys(this.props.options).forEach((key) => {
            options_nodes.push(<option key={key} value={key}>{options[key]}</option>);
        });
        return (
            <select onChange={this.handelChange}> {options_nodes} </select>
        );
    }
}

export default (Filter);
