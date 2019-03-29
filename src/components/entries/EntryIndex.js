import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles/';
import { Container } from '@material-ui/core';
import { NoteAddOutlined, CloudUploadOutlined } from '@material-ui/icons';
import Entry from './partials/Entry';
import UploadField from '../UploadField';

const useStyles = makeStyles(theme => ({
  container: {
    paddingTop: '5rem',
  },
  empty: {
    textAlign: 'center',
    color: '#cccaca',
  },
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
  entryList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gridGap: '5px 10px',
    gridAutoRows: '10px',
  },
}));

const EntryIndex = ({ entries }) => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <UploadField />
      {entries.length === 0 && (
        <Container maxWidth="xs" className={classes.empty}>
          <h3>Your Diary is empty</h3>
          <h3>
            Create a new Entry
            <NoteAddOutlined className={classes.rightIcon} />
          </h3>
          <h3>
            Or Import your Diary
            <CloudUploadOutlined className={classes.rightIcon} />
          </h3>
        </Container>
      )}
      <Container className={classes.entryList}>
        {entries.map(({ id, content }) => (
          <Entry key={id} id={id} content={content} />
        ))}
      </Container>
    </Container>
  );
};

const mapStateToProps = state => ({
  entries: Object.values(state.entries),
});

export default connect(mapStateToProps)(EntryIndex);
