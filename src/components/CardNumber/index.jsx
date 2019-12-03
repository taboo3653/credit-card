import React from 'react';
import PropTypes from 'prop-types';
import './CardNumber.module.scss';

class CardNumber extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { value } = this.props;
    const items = [];

    for (let i = 0; i < 16; i += 1) {
      let val;

      if (value[i] === undefined) val = '#';
      else if (i >= 4 && i <= 11) val = '*';
      else val = value[i];

      const item = (
        <span key={`${i}_${val}`}>
          <div className="CardNumber__numberItem">{val}</div>
        </span>
      );

      items.push(item);
    }

    return <div className="CardNumber">{items}</div>;
  }
}

CardNumber.propTypes = {
  value: PropTypes.string,
};

CardNumber.defaultProps = {
  value: '',
};

export default CardNumber;
