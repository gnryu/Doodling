import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import "./index.css";
import Landing from "./page/landing/Landing";
import Main from "./page/Main";
import Write from "./page/Write";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="App">
    <Header />
    {/* <Landing /> */}
    {/* <Test /> */}
    {/* <Main /> */}
    <Write />
  </div>
);
