import * as React from 'react';

import Input, { Props as InputProps } from 'components/Input';

import {
  removeAllSpaces,
  splitByLength,
  hasNotNumber,
} from 'tools/stringTools';

export interface Props extends InputProps {
  length: number;
}

function NumberInput({
  onChange: propHandleChange,
  value,
  length,
  ...otherProps
}: Props): React.ReactElement {
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    let targetValue = event.target.value;

    targetValue = removeAllSpaces(targetValue);

    if (hasNotNumber(targetValue)) return;

    event.target.value = targetValue.slice(0, length);

    propHandleChange(event);
  };

  return (
    <Input
      onChange={handleChange}
      value={splitByLength(value, 4).join(' ')}
      {...otherProps}
    />
  );
}

export default NumberInput;
