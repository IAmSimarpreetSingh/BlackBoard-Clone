import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import App from './App';
import Admin from './components/Admin';
import AdminPanel from './components/AdminPanel'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/" component={Login} />
        <Route path="/admin" component={Admin} />
        <Route path="/adminpanel" component={AdminPanel} />
        <App />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

