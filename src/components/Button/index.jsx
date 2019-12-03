import React from 'react';
import PropTypes from 'prop-types';
import BSButton from 'react-bootstrap/Button';
import './Button.module.scss';

const Button = ({ children }) => {
  return (
    <BSButton className="Button" size="lg">
      {children}
    </BSButton>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Button;
