import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import './Label.module.scss';

const Label = ({ children }) => {
  return <Form.Label className="Label">{children}</Form.Label>;
};

Label.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Label;
