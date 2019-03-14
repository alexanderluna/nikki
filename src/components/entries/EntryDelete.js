import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteEntry } from '../../actions';

class EntryDelete extends Component {
  componentDidMount() {
    const { match: { params } } = this.props;
    this.props.deleteEntry(params.id);
  }

  render() {
    return (
      <div>
        <h1>Delete Entry</h1>
      </div>
    );
  }
}

export default connect(null, { deleteEntry })(EntryDelete);
