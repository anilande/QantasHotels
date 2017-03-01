import React, {Component} from 'react';
import ReactDom from 'react-dom';
import Rating from './rating';

class ListItem extends Component {
    constructor () {
        super(...arguments);
    }

    render () {
        const
            item = this.props.item;

        let
            cancelNode = '',
            pointsEarned = '',
            savings = '',
            promotion = '';

        if (item.rooms[0].free_cancellation) {
            cancelNode = (<a href="#" className="cancel">Free Cancellation</a>);
        }

        if (item.rooms[0].points_earned > 0) {
            pointsEarned = (<span className="points">Quantas Points Earned <br/><span className="points">{item.rooms[0].points_earned}~</span></span>);
        }

        if (parseInt(item.rooms[0].savings.replace('$','').replace('~',''), 10) > 0) {
            savings = (<span className="savings">Save {item.rooms[0].savings}</span>);
        }
        if (item.promotion) {
            promotion = (<span className="promotion">{item.promotion}</span>);
        }

        return (
            <li className="list-item">
                <div className="img">
                    <img src={item.image}/>
                    {promotion}
                </div>
                <div className="details">
                    <h3>{item.title}</h3> <Rating rating={item.rating} ratingType={item.rating_type} /><br/>
                    <span className="address">{item.address}</span><br/>
                    <br/>
                    <a href="#" className="room">{item.rooms[0].name}</a><br/>
                    <br/><br/>
                    {cancelNode}
                    <div className="floatr price">
                        <div className="floatl"> {pointsEarned} </div>
                        <div className="floatr">
                            1 night total ({item.rooms[0].currency})<br/>
                            <span className="amount"><span className='sup'>$</span>{item.rooms[0].price.replace('$', '')}</span><br/>
                            {savings}<br/>
                        </div>
                    </div>
                </div>
            </li>
        );
    }
}

export default (ListItem);
