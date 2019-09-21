import React from 'react';
import ReactDOM from 'react-dom';
import { TopBar } from './TopBar';
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from '../context/Store';
import { intl, locale, messages, shallowWithIntl } from '../helpers/intl-test';
import { IntlProvider } from 'react-intl';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <IntlProvider locale={locale} messages={messages[locale]}>
      <BrowserRouter>
        <StoreProvider>
          <TopBar intl={intl} title="Title" subtitle="Subtitle" />
        </StoreProvider>
      </BrowserRouter>
    </IntlProvider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly', () => {
  const result = shallowWithIntl(
    <TopBar intl={intl} title="Title" subtitle="Subtitle" />
  );
  expect(result).toMatchSnapshot();
});
