import React from 'react';
import { Router, Route, Switch } from 'react-router-dom'
import {createBrowserHistory} from 'history'
import './App.css';
import Field from './components/field'

const history = createBrowserHistory()

function App() {
  return (
    <div >
      <Router history={history}>
        <div>
          <Switch>
            <Route exact path="/" component={Field} />
            <Route exact path="/:matchID" component={Field} />
          </Switch>
        </div>
      </Router>
    </div>
  )
}
export default App