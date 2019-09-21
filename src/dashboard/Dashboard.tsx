import React, { FC, useEffect, useState } from 'react';
import clsx from 'clsx';
import { useStyles } from './Dashboard.style';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

/*
import { MeasurementsComponent } from '../measurements/MeasurementsComponent';
import { PlanDefinitionsBoxComponent } from '../plandefinitionsbox/PlanDefinitionsBoxComponent';
import { QuestionnairesBoxComponent } from '../questionnairesbox/QuestionnairesBoxComponent';
import { TabContainer } from '../tabs/tabcontainer/TabContainer';
import { ThresholdsBoxComponent } from '../thresholdsbox/ThresholdsBoxComponent';*/
import { TopBar } from '../topbar/TopBar';

import {
  isStringEmpty
} from '../utils/utils';
import { DashboardBox } from '../dashboardbox/DashboardBox';
import { AccountValue } from '../customtypes';
import { IUIStateAccountValues } from '../ui/reducers/account-values-reducer';

interface DashboardProps {
  intl: any;
  accountValues: IUIStateAccountValues;
  populateDashboard: (dara: any) => any;
  fetchAccountValues: () => void;
}

export const Dashboard: FC<DashboardProps> = (props: DashboardProps) => {
  const classes = useStyles();

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const fixedHeightPaperLong = clsx(classes.paper, classes.fixedHeightLong);

  // Destructuring props
  const {
    fetchAccountValues,
    accountValues
  } = props;

  useEffect(() => {
    fetchAccountValues();
  }, [false]); // Adding populateDashboard causes useEffect() to be called repeatedly!

  const [value, setValue] = useState(1);
  function handleChange(event: React.ChangeEvent<{}>, newValue: number) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <TopBar
        intl={props.intl}
        title={props.intl.formatMessage({
          id: 'dashboard.topBar.title'
        })}
        subtitle={''}
      />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        {console.log('AccountValues')}
        {console.log(accountValues.data)}
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={1}>
            <Grid item xs={12} md={12} lg={12}>
              <DashboardBox
                title={props.intl.formatMessage({
                  id: 'dashboard.accountValues'
                })}
                description=""
                showEditButton={false}
                fetching={accountValues.fetching}
                items={accountValues.data}
                resources={[]}
                resourceFinderItems={[]}
                crosshairValues={[]}
                fetchResources={() => {}}
              />
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item xs={12} md={6} lg={6}>
              <Grid container spacing={1}>
                <Grid item xs={12} md={12} lg={12}>
                  <Paper className={fixedHeightPaper}>
                    <DashboardBox
                      title={'BoxTitle'}
                      description=""
                      showEditButton={true}
                      fetching={false}
                      items={[]}
                      resources={[]}
                      resourceFinderItems={[]}
                      crosshairValues={[]}
                      fetchResources={() => {}}
                    />
                  </Paper>
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                  <Paper className={fixedHeightPaper}>
                    <DashboardBox
                      title={'BoxTitle'}
                      description=""
                      showEditButton={true}
                      fetching={false}
                      items={[]}
                      resources={[]}
                      resourceFinderItems={[]}
                      crosshairValues={[]}
                      fetchResources={() => {}}
                    />
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <Paper className={fixedHeightPaperLong}>
                <DashboardBox
                  title={'BoxTitle'}
                  description=""
                  showEditButton={true}
                  fetching={false}
                  items={[]}
                  resources={[]}
                  resourceFinderItems={[]}
                  crosshairValues={[]}
                  fetchResources={() => {}}
                />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
};
