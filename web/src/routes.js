import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import NewResource from "./pages/NewResource";
import Resources from "./pages/Resources";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Resources} />
        <Route path="/new/resource" component={NewResource} />
      </Switch>
    </BrowserRouter>
  );
}
