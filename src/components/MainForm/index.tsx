import * as React from 'react';

import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

import Button from 'components/Button';
import Label from 'components/Label';
import Input from 'components/Inputs/Input';
import CardNumberInput from 'components/Inputs/CardNumberInput';
import NumberInput from 'components/Inputs/NumberInput';
import Select from 'components/Inputs/Select';

import LimitedInput from 'components/Inputs/LimitedInput';

import FormValues from 'types/FormValues';

import styles from './MainForm.module.scss';

export interface Props {
  onChange: (event: React.ChangeEvent<unknown>) => void;
  values: FormValues;
}

const CVVInput = LimitedInput(NumberInput, 3);
const DateInput = LimitedInput(NumberInput, 2);
const DateSelect = Select(Input);

function MainForm({
  values,
  onChange: handleChange,
}: Props): React.ReactElement {
  return (
    <Form className={styles.MainForm}>
      <Form.Group>
        <Label>Card Number</Label>
        <CardNumberInput
          name="number"
          value={values.number}
          onChange={handleChange}
        />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>

      <Form.Group>
        <Label>Card Holder</Label>
        <Input
          name="name"
          value={values.name}
          onChange={handleChange}
        />
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
              <DateSelect
                name="month"
                options={Array(12)
                  .fill(0)
                  .map((_, i) => i + 1)}
                placeholder="Month"
                value={values.month}
                onChange={handleChange}
              />
            </Col>
            <Col>
              <DateSelect
                name="year"
                options={Array(11)
                  .fill(0)
                  .map((_, i) => new Date().getFullYear() + i)}
                placeholder="Year"
                value={values.year}
                onChange={handleChange}
              />
            </Col>
          </Form.Row>
        </Form.Group>

        <Form.Group
          as={Col}
          xs="4"
          controlId="validationFormikUsername"
        >
          <Label>CVV</Label>
          <CVVInput
            name="cvv"
            value={values.cvv}
            onChange={handleChange}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Form.Row>
      <Button type="submit">Submit</Button>
    </Form>
  );
}

export default MainForm;
