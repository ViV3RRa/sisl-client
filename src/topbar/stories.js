import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { TopBar } from '../topbar/TopBar';
import StoryRouter from 'storybook-react-router';
import { StoreProvider } from '../context/Store';
import { intl, locale, messages } from '../helpers/intl-test';
import { IntlProvider } from 'react-intl';

storiesOf('TopBar', module)
  .addDecorator(StoryRouter())
  .add(
    'with title',
    withInfo({
      text: 'Top bar with side menu and finder.'
    })(() => (
      <StoreProvider>
        <IntlProvider locale={locale} messages={messages[locale]}>
          <TopBar intl={intl} title="Title" />
        </IntlProvider>
      </StoreProvider>
    ))
  )
  .add(
    'without title',
    withInfo({
      text: 'Top bar with side menu and finder.'
    })(() => (
      <StoreProvider>
        <IntlProvider locale={locale} messages={messages[locale]}>
          <TopBar intl={intl} />
        </IntlProvider>
      </StoreProvider>
    ))
  )
  .add(
    'with subtitle',
    withInfo({
      text: 'Top bar with side menu and finder.'
    })(() => (
      <StoreProvider>
        <IntlProvider locale={locale} messages={messages[locale]}>
          <TopBar intl={intl} title="Title" subtitle="Subtitle" />
        </IntlProvider>
      </StoreProvider>
    ))
  );
