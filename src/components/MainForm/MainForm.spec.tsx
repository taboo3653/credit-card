import * as React from 'react';
import { shallow } from 'enzyme';

import MainForm, { Props } from '.';

const props: Props = {
  onChange: jest.fn(),
  numberValue: '',
};

it('snapshot', () => {
  const component = shallow(<MainForm {...props} />);
  expect(component).toMatchSnapshot();
});
