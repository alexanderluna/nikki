import React, { createRef } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { CloudUploadOutlined } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { importDiary } from '../actions';

const useStyles = makeStyles(theme => ({
  actionButton: {
    margin: theme.spacing(1),
    color: '#fff',
  },
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
}));

const UploadField = (props) => {
  const classes = useStyles();

  const uploadRef = createRef();

  const importDiaryFromFile = (data) => {
    const diary = JSON.parse(data.target.result);
    props.importDiary(diary);
  };

  const readBackup = ({ target: { files } }) => {
    if (!files[0]) return;

    const reader = new FileReader();
    reader.onload = importDiaryFromFile;
    reader.readAsText(files[0]);
  };

  return (
    <Button
      color="secondary"
      onClick={() => uploadRef.current.click()}
      variant="contained"
      className={classes.actionButton}
    >
      Import
      <span aria-hidden="true" />
      <input
        ref={uploadRef}
        onChange={readBackup}
        className={classes.upload}
        type="file"
        hidden
        accept="application/json"
      />
      <CloudUploadOutlined className={classes.rightIcon} />
    </Button>
  );
};

export default connect(null, { importDiary })(UploadField);
