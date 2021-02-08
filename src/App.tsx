import React from "react";
import "./App.scss";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Landing } from "./Landing";

const App: React.FC = () => {
  return (
    <div className="App-wrapper">
      <header className="header">Phone Market</header>
      <main className="main-content">
        <Router>
          <Switch>
            <Route path="/mobiles" exact>
              <Landing />
            </Route>
            <Route path="/mobiles/:id">
              <>Detalle</>
            </Route>
          </Switch>
        </Router>
      </main>
    </div>
  );
};

export default App;
