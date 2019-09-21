import React, { FC } from 'react';
import { useStore } from '../context/Store';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import { Dashboard } from './Dashboard';

const DashboardComponentWrapped: FC<InjectedIntlProps> = (
  props: InjectedIntlProps
) => {
  const {
    state: {
      ui: { accountValues }
    },
    actions: {
      ui: { fetchAccountValues, populateDashboard }
    }
  } = useStore();

  return (
    <div>
      <Dashboard
        intl={props.intl}   
        accountValues={accountValues}
        fetchAccountValues={fetchAccountValues}
        populateDashboard={populateDashboard}
      />
    </div>
  );
};

export const DashboardComponent = injectIntl(DashboardComponentWrapped);
