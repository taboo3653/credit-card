import * as React from 'react';

import { Props as InputProps } from 'components/Inputs/Input';

const handleChange = (propHandleChange, length: number) => (
  event: React.ChangeEvent<HTMLInputElement>,
): void => {
  event.target.value = event.target.value.slice(0, length);

  propHandleChange(event);
};

function LimitedInput<T extends InputProps>(
  InputComponent: React.ComponentType<T>,
  length: number,
) {
  return ({
    onChange: propHandleChange,
    ...otherProps
  }: InputProps): React.ReactElement => {
    return (
      <InputComponent
        onChange={handleChange(propHandleChange, length)}
        {...(otherProps as T)}
      />
    );
  };
}

export default LimitedInput;
