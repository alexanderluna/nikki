import React from 'react';
import { makeStyles } from '@material-ui/core/styles/';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, Link, Typography, Button } from '@material-ui/core';
import { NoteAddOutlined } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  header: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
  },
  home: {
    fontFamily: 'pt mono, monospace, serif',
    '&:hover': {
      textDecoration: 'none',
    },
  },
  title: {
    flexGrow: 1,
  },
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
}));

const Header = ({ location: { pathname } }) => {
  const classes = useStyles();

  const AdapterLink = React.forwardRef((props, ref) => (
    <RouterLink innerRef={ref} {...props} />
  ));

  return (
    <AppBar className={pathname === '/' ? classes.header : null}>
      <Toolbar>
        <Typography variant="h5" className={classes.title}>
          <Link
            to="/index"
            color="inherit"
            className={classes.home}
            component={RouterLink}
          >
            Nikki.
          </Link>
        </Typography>
        {(pathname !== '/') && (
          <Typography variante="h6">
            <Button
              to="/create"
              color="inherit"
              component={AdapterLink}
            >
              New
              <NoteAddOutlined className={classes.rightIcon} />
            </Button>
          </Typography>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
