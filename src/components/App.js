import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Header from './Header';
import EntryCreate from './entries/EntryCreate';
import EntryDelete from './entries/EntryDelete';
import EntryEdit from './entries/EntryEdit';
import EntryIndex from './entries/EntryIndex';
import EntryShow from './entries/EntryShow';
import history from '../history';

export default function App() {
  return (
    <div className="">
      <Router history={history}>
        <div className="">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/create" component={EntryCreate} />
            <Route exact path="/delete" component={EntryDelete} />
            <Route exact path="/edit/:id" component={EntryEdit} />
            <Route exact path="/index" component={EntryIndex} />
            <Route exact path="/show/:id" component={EntryShow} />
          </Switch>
        </div>
      </Router>
    </div>

  );
}
