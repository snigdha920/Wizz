import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import App from "./components/App";
import "./bootstrap-social.css";
import "./styles.css"

const rootElement = document.getElementById("root");
ReactDOM.render(
    <HashRouter>
      <App />
    </HashRouter>,
  rootElement
);
