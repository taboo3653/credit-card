import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import CardNumber, { Props } from '.';

const getComponent = (props?: Props): ShallowWrapper =>
  shallow(<CardNumber {...props} />);

describe('correct display', () => {
  let component;

  it('empty', () => {
    component = getComponent();
    component.find('span div').forEach(node => {
      expect(node.contains('#')).toBe(true);
    });
  });

  it('full value', () => {
    const testText = '1111222233334444';
    component = getComponent({ value: testText });

    component.find('span div').forEach((node, index) => {
      if (index > 3 && index < 12) {
        expect(node.text()).toBe('*');
      } else expect(node.text()).toBe(testText[index]);
    });
  });
});
