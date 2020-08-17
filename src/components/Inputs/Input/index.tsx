import * as React from 'react';
import Form from 'react-bootstrap/Form';

export interface Props {
  name: string;
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<unknown>) => void;
}

function Input({
  name,
  placeholder = '',
  value = '',
  onChange: handleChange = (): void => {},
}: Props): React.ReactElement {
  return (
    <Form.Control
      type="text"
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      size="lg"
      className="Input"
    />
  );
}

export default Input;
