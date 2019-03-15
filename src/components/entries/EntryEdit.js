import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { editEntry } from '../../actions';
import EntryForm from './partials/EntryForm';

class EntryEdit extends Component {
  onSubmit = (formValues) => {
    const { match: { params } } = this.props;
    this.props.editEntry(params.id, formValues);
  }

  render() {
    const { entry } = this.props;
    return (
      <div>
        <h3>Edit Entry</h3>
        <EntryForm
          initialValues={_.pick(entry, ['content', 'createdAt'])}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  entry: state.entries[ownProps.match.params.id],
});

export default connect(mapStateToProps, { editEntry })(EntryEdit);
