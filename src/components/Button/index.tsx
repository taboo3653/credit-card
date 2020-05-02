import * as React from 'react';
import { Button as BSButton } from 'react-bootstrap';
import './Button.module.scss';

export interface Props {
  children: string;
}

const Button = ({ children }: Props): React.ReactNode => {
  return (
    <BSButton className="Button" size="lg">
      {children}
    </BSButton>
  );
};

export default Button;
