import * as React from 'react';
import { mount } from 'enzyme';

import '@testing-library/jest-dom/extend-expect';
import { waitFor } from '@testing-library/react';

import CardNumber from 'components/CardNumber';
import Content from '.';

describe('content component tests', () => {
  it('entered card number is equivalent to props in card', async () => {
    const testValue = '123';

    const content = mount(<Content />);

    const inputWrapper = content.find('input[name="number"]');
    inputWrapper.simulate('change', {
      target: { name: 'number', value: testValue },
    });

    content.update();

    await waitFor(() => {
      expect(content.find(CardNumber).prop('value')).toEqual(
        testValue,
      );
    });
  });
});
