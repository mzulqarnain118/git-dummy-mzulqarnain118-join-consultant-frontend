import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./CreateConsultantComponents/Home/Home";
import HomePage from "./HomePage";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    console.log = console.warn = console.error = () => {};
    return (
      <div>
        <Router>
          <Switch>
            {/* Home Page component */}
            <Route exact path="/" component={HomePage}></Route>
            {/* create consultant Home component */}
            <Route exact path="/consultant" component={Home}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
