import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Landing from "./page/landing/Landing";
import Main from "./page/main/Main";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Landing /> */}
    {/* <Test /> */}
    <Main />
  </React.StrictMode>
);
