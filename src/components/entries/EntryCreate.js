import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createEntry } from '../../actions';
import EntryForm from './partials/EntryForm';

class EntryCreate extends Component {
  onSubmit = (formValues) => {
    this.props.createEntry(formValues);
  };

  render() {
    return (
      <div>
        <h3>Create Entry</h3>
        <EntryForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { createEntry })(EntryCreate);
