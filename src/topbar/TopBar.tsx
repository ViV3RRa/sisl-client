import React, { useState, FC } from 'react';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import SettingsIcon from '@material-ui/icons/Settings';
import MenuIcon from '@material-ui/icons/Menu';
import PersonIcon from '@material-ui/icons/Person';
import { useStyles } from './TopBar.style';
import { SislIcon } from '../icons/sislIcon/SislIcon';
import { theme } from '../theme';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import logo from '../logo-no-text.png';
import { paths } from '../router';
import { FormattedMessage } from 'react-intl';

interface TopBarProps {
  intl: any;
  title?: string;
  subtitle?: string;
}

export const TopBar: FC<TopBarProps> = (props: TopBarProps) => {
  const styles = useStyles();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const renderListItem = (menuItem: any) => {
    return (
      <Link
        to={'/' + menuItem.path}
        className={styles.menuLink}
        key={menuItem.path}
        title={menuItem.title}
      >
        <ListItem button>
          <ListItemIcon>
            <SislIcon
              muiIcon={menuItem.icon}
              color={theme.palette.common.white}
            />
          </ListItemIcon>
          <ListItemText primary={menuItem.title} />
        </ListItem>
      </Link>
    );
  };

  const menuItems = [
    {
      title: props.intl.formatMessage({ id: 'overview.title' }),
      path: 'overview',
      icon: DashboardIcon
    }
  ];

  const bottomMenuItems = [
    {
      title: props.intl.formatMessage({ id: 'settings.title' }),
      path: 'settings',
      icon: SettingsIcon
    },
    {
      title: props.intl.formatMessage({ id: 'logout.title' }),
      path: 'login',
      icon: PersonIcon
    }
  ];

  return (
    <React.Fragment>
      <AppBar
        position="absolute"
        className={clsx(styles.appBar, open && styles.appBarShift)}
        color="secondary"
      >
        <Toolbar>
          <IconButton
            edge="start"
            aria-label={props.intl.formatMessage({ id: 'sidebar.show' })}
            onClick={handleDrawerOpen}
            className={clsx(styles.menuButton, open && styles.menuButtonHidden)}
          >
            <SislIcon muiIcon={MenuIcon} color={theme.palette.common.white} />
          </IconButton>
          <Link to={paths.overview}>
            <img
              src={logo}
              alt={props.intl.formatMessage({ id: 'product.title' })}
              title={props.intl.formatMessage({ id: 'product.title' })}
              className={styles.barLogo}
            />
          </Link>
          <Typography variant="h6" className={styles.title}>
            {props.title}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(styles.drawerPaper, !open && styles.drawerPaperClose)
        }}
        open={open}
      >
        <div className={styles.toolbarIcon}>
          <Typography variant="h6" className={styles.brandName}>
            <FormattedMessage id="product.title" />
          </Typography>
          <IconButton onClick={handleDrawerClose}>
            <SislIcon
              muiIcon={ChevronLeftIcon}
              color={theme.palette.common.white}
            />
          </IconButton>
        </div>
        <Divider />
        <List>
          {menuItems.map((menuItem: any, i: number) => {
            return renderListItem(menuItem);
          })}
        </List>
        <List className={styles.bottomList}>
          {bottomMenuItems.map((menuItem: any, i: number) => {
            return renderListItem(menuItem);
          })}
        </List>
      </Drawer>
    </React.Fragment>
  );
};
