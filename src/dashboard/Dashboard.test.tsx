import React from 'react';
import { Dashboard } from './Dashboard';
import { intl, shallowWithIntl } from '../helpers/intl-test';

it('renders without crashing (enzyme)', () => {
  const result = shallowWithIntl(
    <Dashboard
      intl={intl}
      accountValues={{ fetching: false, data: [] }}
      populateDashboard={() => {}}
      fetchAccountValues={() => {}}
    />
  );
  expect(result.debug()).toMatchSnapshot();
});
