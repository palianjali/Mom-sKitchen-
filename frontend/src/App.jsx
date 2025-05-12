import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import DailyCookingChallenge from "./pages/DailyCookingChallenge";
import { assets } from "./assets/assets";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/challenge" element={<DailyCookingChallenge />} />
      </Routes>
    </div>
  );
};

export default App;