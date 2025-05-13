import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import DailyCookingChallenge from "./pages/DailyCookingChallenge";
import Hero from "./pages/Hero";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Routes>
      {/* Landing Page */}
      <Route path="/" element={<Hero />} />

      {/* Application Pages with Navbar */}
      <Route
        path="/home"
        element={
          <>
            <Navbar />
            <Home />
          </>
        }
      />
      <Route
        path="/about"
        element={
          <>
            <Navbar />
            <About />
          </>
        }
      />
      <Route
        path="/contact"
        element={
          <>
            <Navbar />
            <Contact />
          </>
        }
      />
      <Route
        path="/challenge"
        element={
          <>
            <Navbar />
            <DailyCookingChallenge />
          </>
        }
      />
    </Routes>
  );
};

export default App;
