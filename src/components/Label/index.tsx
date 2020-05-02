import * as React from 'react';
import Form from 'react-bootstrap/Form';
import './Label.module.scss';

export interface Props {
  children: string;
}

function Label({ children }: Props): React.ReactElement {
  return <Form.Label className="Label">{children}</Form.Label>;
}

export default Label;
