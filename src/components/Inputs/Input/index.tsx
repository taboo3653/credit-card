import * as React from 'react';
import Form from 'react-bootstrap/Form';
import { FormControl } from 'react-bootstrap';

export interface Props
  extends React.ComponentProps<typeof FormControl> {
  name: string;
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<unknown>) => void;
}

function Input(props: Props): React.ReactElement {
  return (
    <Form.Control
      type="text"
      size="lg"
      className="Input"
      {...props}
    />
  );
}

export default Input;
