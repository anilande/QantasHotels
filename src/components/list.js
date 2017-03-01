import React, {Component} from 'react';
import ReactDom from 'react-dom';
import ListItem from './list-item';
import Filter from './filter';

class List extends Component {
    constructor () {
        super(...arguments);
        this.state = {
            itemsList: this.props.itemsList || [],
            title: this.props.title,
            sorts: this.props.filters
        };

        this.applySort = this.applySort.bind(this);
    }

    applySort(sortField) {
        let newData = this.state.itemsList;

        newData.sort((function (sortField) {
            return function (a, b) {
                if (!sortField) {
                    sortField = 'rating-asc';
                }

                let
                    [field, sort] = sortField.split('-'),
                    valueA, valueB, result;

                if (sort == 'deals') {
                    sort = 'asc';
                }

                switch (field) {
                    case 'price': {
                        valueA = parseInt(a.rooms[0]['price'].replace('$', ''), 10);
                        valueB = parseInt(b.rooms[0]['price'].replace('$', ''), 10);
                    }break;
                    case 'name': {
                        valueA = a.title;
                        valueB = b.title;
                    }break;
                     case 'top': {
                        valueA = parseInt(a.rooms[0]['savings'].replace('$', '').replace('~', ''), 10);
                        valueB = parseInt(b.rooms[0]['savings'].replace('$', '').replace('~', ''), 10);
                    }break;
                    default: {
                        valueA = a.rating;
                        valueB = b.rating;
                    }break;
                }

                if (sort === 'asc') {
                    if (valueA < valueB) {
                        result = -1;
                    } else if (valueA > valueB) {
                        result = 1;
                    } else {
                        result = 0;
                    }
                    
                } else {
                    if (valueA < valueB) {
                        result = 1;
                    } else if (valueA > valueB) {
                        result = -1;
                    } else {
                        result = 0;
                    }
                }

                return result;
            };
        })(sortField));

        this.setState({itemsList: newData});
    }

    render () {
        const itemsList = this.state.itemsList;

        return (
            <div>
                <div className="head">
                    <div className="floatl">{itemsList.length} hotels in {this.state.title}</div>
                    <div className="floatr">
                        Sort by <Filter options={this.state.sorts} onChange={this.applySort}/>
                    </div>
                </div>
                <ul>
                    { itemsList.map(function(item, index) {
                       return <ListItem key={index} item={item} />;
                    })}
                </ul>
                <hr/>
            </div>
        );
    }
}

export default (List);
