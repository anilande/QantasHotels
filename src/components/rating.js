import React, { Component } from 'react';

class Rating extends Component {
  constructor(props) {
    super(props);
  }

  renderMask(symbol) {
    return Array.from({ length: 5 }, (_, idx) => <i key={ idx }>{ symbol }</i>);
  }

  render() {
    let symbol = "";
    const rating = this.props.rating;

    if (this.props.ratingType === 'star') {
        symbol = '\u2605';
    }
    else if (this.props.ratingType === 'self') {
        symbol = '\u2B24';
    }

    const symbols = Array.from({ length: 5 }, (_, idx) => {
      return (
        <i key={ idx } data-order={ (idx + 1) }>{ symbol }</i>
      );
    });

    return (
      <div className="rating">
        {symbols}
        <div className="current-rating" style={{ width: `${(rating / 5 * 100)}%` }}>
          {this.renderMask(symbol)}
        </div>
      </div>
    );
  }
}

export default Rating;