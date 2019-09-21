import React from 'react';
import { shallow } from 'enzyme';
import { DashboardBoxRow } from './DashboardBoxRow';

it('renders without crashing (enzyme)', () => {
  const result = shallow(
    <DashboardBoxRow obj={{ type: '', title: '', values: [], action: '' }} />,
    {
      context: {}
    }
  );
  expect(result.debug()).toMatchSnapshot();
});
