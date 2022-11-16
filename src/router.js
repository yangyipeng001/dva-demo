import React from "react";
import { Router, Route, Switch } from "dva/router";
import IndexPage from "./routes/IndexPage";
import UserPage from "./routes/UserPage";
// import ExamplePage from "./routes/ExamplePage";
import { ExamplePageDynamic } from "./dynamic";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/user" component={UserPage} />
        <Route path="/example" component={ExamplePageDynamic} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
