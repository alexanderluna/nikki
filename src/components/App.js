import React from 'react';
import { Router, Route } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Home from './Home';
import Header from './Header';
import Backup from './Backup';
import EntryCreate from './entries/EntryCreate';
import EntryDelete from './entries/EntryDelete';
import EntryEdit from './entries/EntryEdit';
import EntryIndex from './entries/EntryIndex';
import EntryShow from './entries/EntryShow';
import history from '../history';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#6F9AB4', contrastText: '#ffffff' },
    secondary: { main: '#CD5F61', contrastText: '#ffffff' },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <div className="">
          <CssBaseline />
          <Backup />
          <Route path="/" component={Header} />
          <Route exact path="/" component={Home} />
          <Route exact path="/create" component={EntryCreate} />
          <Route exact path="/delete/:id" component={EntryDelete} />
          <Route exact path="/edit/:id" component={EntryEdit} />
          <Route exact path="/index" component={EntryIndex} />
          <Route exact path="/show/:id" component={EntryShow} />
        </div>
      </Router>
    </ThemeProvider>

  );
}
