import React from 'react';
import Form from 'react-bootstrap/Form';
import './Input.module.scss';

const Input = ({ name, placeholder, value, onChange }) => {
  return (
    <Form.Control
      type="text"
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      size="lg"
      className="Input"
    />
  );
};

/*
Input.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  name: '',
  placeholder: '',
  value: '',
  onChange: () => {},
};
*/

export default Input;
