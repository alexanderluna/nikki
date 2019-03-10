import React, { Component } from 'react';
import { connect } from 'react-redux';
import { importDiary } from '../actions';
import './Home.css';

class Home extends Component {
  importDiary = (data) => {
    const diary = JSON.parse(data.target.result);
    this.props.importDiary(diary);
  }

  readBackup = ({ target: { files } }) => {
    if (!files[0]) return;

    const reader = new FileReader();
    reader.onload = this.importDiary;
    reader.readAsText(files[0]);
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <label
          className="upload"
          htmlFor="upload"
          onChange={this.readBackup}
        >
          <span aria-hidden="true" />
          <input
            className="upload"
            type="file"
            accept="application/json"
          />
        </label>
      </div>
    );
  }
}

export default connect(null, { importDiary })(Home);
