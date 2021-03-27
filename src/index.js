import React from "react";
import ReactDOM from "react-dom";
import Home from "./campaigns/views";
import MUITheme from "./campaigns/css/mui-theme";
import "./i18n";

const getRoot = () => {
  if (!window?.localStorage?.getItem("i18nextLng")) {
    window.localStorage.setItem("i18nextLng", "en");
  }
  return document.getElementById("root");
};

ReactDOM.render(
  <MUITheme>
    <Home />
  </MUITheme>,
  getRoot()
);
