import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import "./index.css";
import About from "./page/About";
import Landing from "./page/landing/Landing";
import Main from "./page/Main";
import Note from "./page/Note";
import Teams from "./page/Teams";
import Write from "./page/Write";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="App">
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/teams" element={<Teams />} />

        <Route path="/my" element={<Main />} />
        <Route path="/write" element={<Write />} />
        <Route path="/note" element={<Note />} />
      </Routes>
    </BrowserRouter>
  </div>
);
