import React, { FC, useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useStore } from '../context/Store';
import { Link } from 'react-router-dom';
import { useStyles } from './Login.style';
import { paths } from '../router';

export const Login: FC = () => {
  const classes = useStyles();
  const {
    state: {
      global: { name }
    },
    actions: {
      auth: { login }
    }
  } = useStore();
  const [username, setUsername] = useState(name);
  const [password, setPassword] = useState('');

  // TODO: Remove style attribute from Link - for some reason settings the className has no effect
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          SiSL Login
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Brugernavn"
            name="username"
            autoComplete="username"
            autoFocus
            onChange={e => setUsername(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Kodeord"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={e => setPassword(e.target.value)}
          />
          <Link
            to={paths.dashboard}
            style={{ textDecoration: 'none', color: 'white' }}
          >
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.submit}
              onClick={e => login(username, password)}
            >
              Log ind
            </Button>
          </Link>
        </form>
      </div>
    </Container>
  );
};
