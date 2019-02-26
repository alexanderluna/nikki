import React, { Component } from 'react';
import config from '../config';

class Home extends Component {
  state = { isSignedIn: false }

  componentDidMount() {
    window.gapi.load('client:auth2', this.initClient);
  }

  initClient = () => {
    window.gapi.client.init({
      apiKey: config.apiKey,
      clientId: config.clientId,
      discoveryDocs: config.discoveryDocs,
      scope: config.scopes,
    }).then(() => {
      window.gapi.auth2.getAuthInstance().isSignedIn.listen(this.updateSigninStatus);
      this.updateSigninStatus(window.gapi.auth2.getAuthInstance().isSignedIn.get());
    }, (error) => {
      console.log(error.details);
    });
  };

  updateSigninStatus = (isSignedIn) => {
    if (isSignedIn) {
      this.fetchMajorData();
    }
    this.setState({ isSignedIn });
  }

  handleSignIn = () => window.gapi.auth2.getAuthInstance().signIn();

  handleSignOut = () => window.gapi.auth2.getAuthInstance().signOut();

  fetchMajorData = () => {
    window.gapi.client.sheets.spreadsheets.values.get({
      spreadsheetId: '1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms',
      range: 'Class Data!A2:E',
    }).then(response => console.log(response.result));
  }

  render() {
    const { isSignedIn } = this.state;
    return (
      <div>
        <h1>Home</h1>
        {isSignedIn && <h2>Logged in</h2>}
        {!isSignedIn && <h2>Logged out</h2>}
        <button type="button" onClick={this.handleSignIn}>Sign in</button>
        <button type="button" onClick={this.handleSignOut}>Sign out</button>
      </div>
    );
  }
}

export default Home;
