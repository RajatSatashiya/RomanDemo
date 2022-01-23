import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ChatScreen from "./ChatScreen";
import WelcomeScreen from "./WelcomeScreen";
import Landing from "./components/Landing";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/chat" component={ChatScreen} />
        <Route exact path="/" component={Landing} />
        {/* <Route exact path="/welcome" component={WelcomeScreen} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
