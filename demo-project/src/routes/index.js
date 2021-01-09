import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../containers/home";
import About from "../containers/about";
import PageNotFound from "../common/components/pageNotFound";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../store/configure";

export const Navigator = () => {
  return (
    <div>
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about/:id" component={About} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </ConnectedRouter>
    </div>
  );
};
