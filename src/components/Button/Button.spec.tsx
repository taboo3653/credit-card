import * as React from 'react';
import { shallow } from 'enzyme';

import Button from '.';

describe('should render Button component', () => {
  it('component contains text', () => {
    const text = 'test';
    const component = shallow(<Button>{text}</Button>);

    expect(component.contains(text)).toBe(true);
  });
});
