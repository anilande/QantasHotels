import React, {Component} from 'react';
import ReactDom from 'react-dom';

import List from './components/list';
import data from './data/data';

const API_PATH = "/api/products";

class Hotels extends Component {

    constructor () {
        super(...arguments);

        this.data = data.hotels;

        this.state = {
            itemsList: data.hotels,
            filters: data.sort_filters,
            title: data.query.location
        };
    }

    render () {
        return (
            <div className="app-page">
                <h1>Quantas</h1>
                <div className="lists-wrapper">
                    <List itemsList={this.state.itemsList} title={this.state.title} filters={this.state.filters}/>
                </div>
            </div>
        );
    }
}

// ReactDom.render(<Hotels />, document.getElementById('appContainer'));

export default (Hotels);
