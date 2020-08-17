import * as React from 'react';

import Input, { Props as InputProps } from 'components/Inputs/Input';

import { filterNumbers } from 'tools/stringTools';

function NumberInput({
  onChange: propHandleChange,
  ...otherProps
}: InputProps): React.ReactElement {
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    event.target.value = filterNumbers(event.target.value);

    propHandleChange(event);
  };

  return <Input onChange={handleChange} {...otherProps} />;
}

export default NumberInput;
