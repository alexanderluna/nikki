import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { Container, Button } from '@material-ui/core';
import { NoteAddOutlined } from '@material-ui/icons';
import UploadField from './UploadField';

const styles = theme => ({
  header: {
    height: '100vh',
    backgroundImage: 'url(/nikki2.jpg)',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  subHeader: {
    paddingTop: '25vh',
    textAlign: 'center',
    color: '#d5d5d5',
    fontFamily: 'pt mono, monospace, serif',
  },
  actionButton: {
    margin: theme.spacing(1),
  },
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
});

const Home = ({ classes }) => (
  <div>
    <Container className={classes.header}>
      <Container className={classes.subHeader} maxWidth="sm">
        <h2>
          Create your private diary without having
          to connect to a server
        </h2>
        <UploadField />
        <Button
          to="/index"
          component={Link}
          variant="contained"
          color="secondary"
          className={classes.actionButton}
        >
          Create Diary
          <NoteAddOutlined className={classes.rightIcon} />
        </Button>
      </Container>
    </Container>
  </div>
);

export default withStyles(styles)(Home);
