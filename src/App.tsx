import "./App.css";

import Home from "./containers/home/Home";
import Menu from "./components/menu/Menu";
import ContextLoginManager from "./ContextLoginManager";
import ContextProductManager from "./ContextProductManager";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import Create from "./containers/create/Create";
import Detail from "./containers/detail/Detail";
import Edit from "./containers/edit/Edit";
import PrivateRoute from "./components/private-router/PrivateRouter";
import React from "react";
import Remove from "./containers/remove/Remove";
import Login from "./containers/login/Login";
import Listado from "./components/listado/Listado";
import NotFound from "./containers/not-found/NotFound";

function App() {
  return (
    <ContextLoginManager>
      <ContextProductManager>
        <div>
          <Router>
            <Menu />
            <Switch>
              <Route exact path="/">
                <div className="container">
                  <Home />
                </div>
              </Route>
              <Route exact path="/login">
                <div className="container">
                  <Login />
                </div>
              </Route>
              <Route exact path="/list">
                <div className="container">
                  <Listado />
                </div>
              </Route>
              <Route exact path="/create">
                <div className="container">
                  <Create />
                </div>
              </Route>
              {/* <Route path="/privateCreate" exact>
                <PrivateRoute path="/privateCreate" exact component={Create} />
              </Route> */}
              <Route path="/detail" exact component={Detail} />
              <Route path="/privateEdit/:id" exact>
                <PrivateRoute path="/privateEdit/:id" exact component={Edit} />
              </Route>
              <Route path="/privateRemove/:id" exact>
                <PrivateRoute
                  path="/privateRemove/:id"
                  exact
                  component={Remove}
                />
              </Route>
              <Route path="*" exact>
                <NotFound />
              </Route>
            </Switch>
          </Router>
        </div>
      </ContextProductManager>
    </ContextLoginManager>
  );
}

export default App;
