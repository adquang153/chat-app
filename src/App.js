import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Layout from './containers/Layout';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Layout} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
