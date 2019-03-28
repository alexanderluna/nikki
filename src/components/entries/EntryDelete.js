import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteEntry } from '../../actions';
import Modal from './partials/Modal';
import history from '../../history';

class EntryDelete extends Component {
  handleClose = () => {
    history.push('/index');
  }

  handleDelete = () => {
    const { match: { params } } = this.props;
    this.props.deleteEntry(params.id);
  }

  render() {
    return (
      <div>
        <Modal
          title="Delete Entry"
          handleClose={this.handleClose}
          handleDelete={this.handleDelete}
        >
          Are you sure want to delete this entry ?
        </Modal>
      </div>
    );
  }
}

export default connect(null, { deleteEntry })(EntryDelete);
