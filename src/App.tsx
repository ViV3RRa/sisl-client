import React, { FC } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { DashboardComponent } from './dashboard/DashboardComponent';
import { Login } from './auth/Login';
//import { OverviewComponent } from './overview/OverviewComponent';
//import { MeasurementsComponent } from './measurements/MeasurementsComponent';
import { ThemeProvider } from '@material-ui/styles';
import { create } from 'jss';
import { StylesProvider, jssPreset } from '@material-ui/styles';
import { theme } from './theme';
import CssBaseline from '@material-ui/core/CssBaseline';
import { paths } from './router';
import { IntlProvider, addLocaleData } from 'react-intl';
import locale_da from 'react-intl/locale-data/da';
import locale_en from 'react-intl/locale-data/en';
import messages_da from './translations/da.json';
import messages_en from './translations/en.json';

// Set up localization
const locale = 'en';
addLocaleData([...locale_da, ...locale_en]);
const messages = {
  da: messages_da,
  en: messages_en
};

const jss = create({
  ...jssPreset(),
  insertionPoint: document.getElementById('jss-insertion-point') as HTMLElement
});

const App: FC = () => {
  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <StylesProvider jss={jss}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Router>
            <div className="App">
              <Route path={paths.dashboard} component={DashboardComponent} />
              <Route path={paths.login} component={Login} />
              <Redirect from={paths.base} to={paths.dashboard} />
            </div>
          </Router>
        </ThemeProvider>
      </StylesProvider>
    </IntlProvider>
  );
};

export default App;