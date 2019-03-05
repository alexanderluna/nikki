import React from 'react';
import { connect } from 'react-redux';
import Entry from './partials/Entry';

const EntryIndex = ({ entries }) => (
  <div>
    <ul>
      {entries.map(({ id, content }) => (
        <Entry key={id} id={id} content={content} />
      ))}
    </ul>
  </div>
);

const mapStateToProps = state => ({
  entries: Object.values(state.entries),
});

export default connect(mapStateToProps)(EntryIndex);
