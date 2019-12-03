import React from 'react';
import { Formik } from 'formik';

import PropTypes from 'prop-types';

import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';

import Button from 'components/Button';
import Label from 'components/Label';
import Input from 'components/Input';

import './MainForm.module.scss';

const MainForm = ({ numberValue, onChange }) => {
  return (
    <Form className="MainForm">
      <Form.Group>
        <Label>Card Number</Label>
        <Input
          name="number"
          value={numberValue}
          onChange={onChange}
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>

      <Form.Group>
        <Label>Card Holder</Label>
        <Input name="cardHolder" />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>

      <Form.Row>
        <Form.Group
          as={Col}
          xs="8"
          className="pr-4"
          controlId="validationFormik01"
        >
          <Label>Expiration Date</Label>
          <Form.Row>
            <Col>
              <Input name="firstName" placeholder="Month" />
            </Col>
            <Col>
              <Input name="firstName" placeholder="Year" />
            </Col>
          </Form.Row>
        </Form.Group>

        <Form.Group
          as={Col}
          xs="4"
          controlId="validationFormikUsername"
        >
          <Label>CVV</Label>
          <Input name="lastName" />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Form.Row>
      <Button type="submit">Submit</Button>
    </Form>
  );
};

MainForm.propTypes = {
  numberValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default MainForm;