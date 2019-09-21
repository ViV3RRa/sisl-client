import { makeStyles } from '@material-ui/core/styles';

export const useGlobalStyles = makeStyles(theme => ({
  warningGood: {
    color: theme.palette.warning.good.main
  },
  warningMedium: {
    color: theme.palette.warning.medium.main
  },
  warningBad: {
    color: theme.palette.warning.bad.main
  }
}));
