import React, { useState } from "react";
import { Routes, Route } from "react-router";
import Nav from "./components/Nav";
import DropDown from "./components/Dropdown";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Thanks from "./pages/Thanks";

import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <Nav toggle={toggle} />
      <DropDown isOpen={isOpen} toggle={toggle} />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/portfolio" element={<Portfolio />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/thanks" element={<Thanks />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
