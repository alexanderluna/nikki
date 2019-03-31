import React from 'react';
import {
  Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,
} from '@material-ui/core';

const Modal = ({ handleClose, handleDelete, title, children }) => (
  <div>
    <Dialog
      open
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {title}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {children}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleClose}
          color="primary"
        >
          Dismiss
        </Button>
        <Button
          onClick={handleDelete}
          color="secondary"
          variant="contained"
          autoFocus
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  </div>
);

export default Modal;
