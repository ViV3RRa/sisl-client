import React from 'react';
import { DashboardBox } from './DashboardBox';
import { shallow } from 'enzyme';

it('renders without crashing (enzyme)', () => {
  const result = shallow(
    <DashboardBox
      title="TestBox"
      description=""
      items={[]}
      showEditButton={true}
      fetching={false}
      resources={[]}
      resourceFinderItems={{}}
      crosshairValues={[]}
      fetchResources={() => {}}
    />,
    { context: {} }
  );
  expect(result.debug()).toMatchSnapshot();
});
