import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from "./components/Layout";
import Featured from "./pages/Featured";
import Archives from "./pages/Archives";
import Settings from "./pages/Settings";
import Todos from "./pages/Todos";

const app = document.getElementById('app');
//ReactDOM.render(<Layout/>, app);

ReactDOM.render(
    <Router history={hashHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute component={Featured}></IndexRoute>
        <Route path="flux" component={Todos}></Route>
        <Route path="archives(/:article)" name="archives" component={Archives}></Route>
        <Route path="settings" name="settings" component={Settings}></Route>
      </Route>
    </Router>,
  app);