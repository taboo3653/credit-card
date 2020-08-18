import * as React from 'react';

import { Props as InputProps } from 'components/Inputs/Input';

interface Props extends InputProps {
  options: Array<number | string>;
}

function Select<T extends InputProps>(
  InputComponent: React.ComponentType<T>,
) {
  return ({
    placeholder,
    options,
    ...otherProps
  }: Props): React.ReactElement => (
    <InputComponent {...(otherProps as T)} as="select">
      <option value={-1}>{placeholder}</option>
      {options.map(value => (
        <option key={value}>{value}</option>
      ))}
    </InputComponent>
  );
}

export default Select;
