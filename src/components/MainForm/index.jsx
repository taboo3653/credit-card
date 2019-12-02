import React from 'react';
import { Formik } from 'formik';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'components/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class MainForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Form noValidate>
        <Form.Group>
          <Form.Label>Card Number</Form.Label>
          <Form.Control type="text" name="cardNumber" />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label>Card Holder</Form.Label>
          <Form.Control type="text" name="cardHolder" />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} md="8" controlId="validationFormik01">
            <Form.Label>First name</Form.Label>
            <Form.Row>
              <Col>
                <Form.Control type="text" name="firstName" />
              </Col>
              <Col>
                <Form.Control type="text" name="firstName" />
              </Col>
            </Form.Row>
          </Form.Group>

          <Form.Group
            as={Col}
            md="4"
            controlId="validationFormikUsername"
          >
            <Form.Label>Last name</Form.Label>
            <Form.Control type="text" name="lastName" />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Button type="submit">Submit form</Button>
      </Form>
    );
  }
}

export default MainForm;
