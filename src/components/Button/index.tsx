import * as React from 'react';
import { Button as BSButton, ButtonProps } from 'react-bootstrap';

import styles from './Button.module.scss';

export interface Props {
  children?: string;
  type?: ButtonProps['type'];
}

const Button = ({ children, type }: Props): React.ReactElement => {
  return (
    <BSButton type={type} className={styles.Button} size="lg">
      {children}
    </BSButton>
  );
};

export default Button;
