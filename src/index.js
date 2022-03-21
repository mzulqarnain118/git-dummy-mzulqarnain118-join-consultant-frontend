import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { init } from "@fullstory/browser";

init({ orgId: '15YBDF' })

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
