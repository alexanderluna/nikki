import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

class Backup extends Component {
  get downloadString() {
    const { entries } = this.props;
    const encodedJson = encodeURIComponent(JSON.stringify(entries));
    return `data:text/json;charset=utf-8,${encodedJson}`;
  }

  render() {
    return (
      <div>
        <a
          href={this.downloadString}
          download="nikki.json"
          style={{ position: 'fixed', bottom: '0', right: '0' }}
        >
          Download
        </a>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  entries: _.omit(state, 'form'),
});

export default connect(mapStateToProps)(Backup);
