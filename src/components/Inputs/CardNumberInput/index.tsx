import * as React from 'react';

import NumberInput from 'components/Inputs/NumberInput';

import { Props as InputProps } from 'components/Inputs/Input';
import LimitedInput from 'components/Inputs/LimitedInput';

import { splitByLength } from 'tools/stringTools';

const numberCount = 16;
const LimitedNumberInput = LimitedInput(NumberInput, numberCount);

function CardNumberInput({
  value,
  ...otherProps
}: InputProps): React.ReactElement {
  return (
    <LimitedNumberInput
      value={splitByLength(value, 4).join(' ')}
      {...otherProps}
    />
  );
}

export default CardNumberInput;
