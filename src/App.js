import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home/Home";

class App extends React.Component {
  render() {
   // console.log = console.warn = console.error = () => {};
    return (
      <div>
        <Home />
      </div>
    );
  }
}

export default App;
