import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Main from "./pages/Main";
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/sobre" component={About} />
        <Route path="*" component={ErrorPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
