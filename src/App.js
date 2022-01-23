import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Landing from "./components/Landing";
import Signup from "./components/Signup";
import ChatScreen from "./components/ChatScreen";
import WelcomeScreen from "./components/WelcomeScreen";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/chat" component={ChatScreen} />
          <Route path="/" exact component={Landing} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route exact path="/welcome" component={WelcomeScreen} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

// import React from "react";
// import Router from "./Router";

// function App() {
//   return <Router />;
// }

// export default App;
