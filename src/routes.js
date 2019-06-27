import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Main from "./pages/Main";
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/sobre" component={About} />
        <Route path="/sobre" component={ErrorPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
