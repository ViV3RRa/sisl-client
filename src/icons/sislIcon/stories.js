import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import StoryRouter from 'storybook-react-router';
import { SislIcon } from './SislIcon';
import WarningIcon from '@material-ui/icons/Warning';

storiesOf('SislIcon', module)
  .addDecorator(StoryRouter())
  .add(
    'default color',
    withInfo({
      text:
        'Icon wrapper that enables default and custom colours for Material-UI icons.'
    })(() => <SislIcon muiIcon={WarningIcon} />)
  )
  .add(
    'custom color',
    withInfo({
      text:
        'Icon wrapper that enables default and custom colours for Material-UI icons.'
    })(() => <SislIcon muiIcon={WarningIcon} color="#951" />)
  );
