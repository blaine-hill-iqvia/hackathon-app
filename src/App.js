import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import Survey from './components/Survey';
import Tier from './components/Tier';

import './App.css';

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Switch>
          <Route path="/">
          <Home />
          </Route>
        </Switch>
        <Switch>
          <Route path="/survey">
          <Survey />
          </Route>
        </Switch>
        <Switch>
          <Route path="/tier">
          <Tier />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
