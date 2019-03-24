import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { makeStyles } from '@material-ui/core/styles/';
import Fab from '@material-ui/core/Fab';
import CloudDownload from '@material-ui/icons/CloudDownloadOutlined';

const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1),
    position: 'fixed',
    bottom: '0px',
    right: '0px',
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  link: {
    color: '#FFF',
    textDecoration: 'none',
  },
}));

const Backup = ({ diary }) => {
  const classes = useStyles();

  const downloadLink = () => {
    const encodedJson = encodeURIComponent(JSON.stringify(diary));
    return `data:text/json;charset=utf-8,${encodedJson}`;
  };

  const hasEntries = () => (Object.keys(diary.entries).length >= 1);

  return (
    <div>
      {hasEntries() && (
        <Fab
          color="primary"
          variant="extended"
          className={classes.fab}
          aria-label="download"
        >
          <CloudDownload className={classes.extendedIcon} />
          <a
            className={classes.link}
            href={downloadLink()}
            download="nikki.json"
          >
            Download
          </a>
        </Fab>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  diary: _.omit(state, 'form'),
});

export default connect(mapStateToProps)(Backup);
