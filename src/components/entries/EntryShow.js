import React from 'react';
import { connect } from 'react-redux';

const EntryShow = ({ entry }) => (
  <div>
    {entry && <p>{entry.id}</p>}
  </div>
);

const mapStateToProps = (state, ownProps) => ({
  entry: state.entries[ownProps.match.params.id],
});

export default connect(mapStateToProps)(EntryShow);
