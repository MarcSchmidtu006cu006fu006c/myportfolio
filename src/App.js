import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import Home from "./components/Home.js";
import About from "./components/About.js";
import Projects from "./components/Projects.js";
import Error from "./components/Error.js";
import Contact from "./components/Contact.js";

function App() {
  return (<>
      <Navbar />
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Home />}>
          </Route>
          <Route exact path="/about" element={<About />}>
          </Route>
          <Route exact path="/projects" element={<Projects />}>
          </Route>
          <Route exact path="/contact" element={<Contact />}>
          </Route>
          <Route element={<Error />}>
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
