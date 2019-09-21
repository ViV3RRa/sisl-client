import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { SislIcon } from './SislIcon';
import WarningIcon from '@material-ui/icons/Warning';

it('renders without crashing with custom color', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SislIcon muiIcon={WarningIcon} color="#123" />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing with default color', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SislIcon muiIcon={WarningIcon} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly with custom color', () => {
  const result = shallow(<SislIcon muiIcon={WarningIcon} color="#123" />);
  expect(result).toMatchSnapshot();
});

it('renders correctly with default color', () => {
  const result = shallow(<SislIcon muiIcon={WarningIcon} />);
  expect(result).toMatchSnapshot();
});
