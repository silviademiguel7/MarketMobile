import React from "react";
import "./App.scss";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";
import { Landing } from "./Landing";
import Detalle from "./Detalle";

const App: React.FC = () => {
  return (
    <div className="App-wrapper">
      <Router>
        <Link to="/mobiles">
          <header className="header">Phone Market</header>
        </Link>
        <main className="main-content">
          <Switch>
            <Route path="/" exact>
              <Redirect to="/mobiles" />
            </Route>
            <Route path="/mobiles" exact>
              <Landing />
            </Route>
            <Route path="/mobiles/:id">
              <Detalle />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
};

export default App;
