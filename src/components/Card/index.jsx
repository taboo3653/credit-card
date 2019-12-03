import React from 'react';

import CardNumber from 'components/CardNumber';
import PropTypes from 'prop-types';

import './Card.module.scss';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { numberValue } = this.props;

    return (
      <div className="Card">
        <div className="Card__top">
          <img src="assets/images/chip.png" alt="chip" />
          <div className="Card__card-type">
            <img src="assets/images/visa.png" alt="card-type" />
          </div>
        </div>
        <CardNumber value={numberValue} />
      </div>
    );
  }
}

Card.propTypes = {
  numberValue: PropTypes.string.isRequired,
};

export default Card;
