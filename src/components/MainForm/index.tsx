import * as React from 'react';

import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

import Button from 'components/Button';
import Label from 'components/Label';
import Input from 'components/Inputs/Input';
import CardNumberInput from 'components/Inputs/CardNumberInput';

import styles from './MainForm.module.scss';

export interface Props {
  onChange: (event: React.ChangeEvent<unknown>) => void;
  numberValue: string;
}

function MainForm({
  numberValue,
  onChange: handleChange,
}: Props): React.ReactElement {
  return (
    <Form className={styles.MainForm}>
      <Form.Group>
        <Label>Card Number</Label>
        <CardNumberInput
          name="number"
          value={numberValue}
          onChange={handleChange}
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
}

export default MainForm;
