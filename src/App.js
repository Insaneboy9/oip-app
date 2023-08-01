import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Start from "./pages/Start";
import Home from "./pages/Home";
import { AnimatePresence } from "framer-motion";
import Dailies from "./pages/Dailies";
import About from "./pages/About";
import Reflection from "./pages/Reflection";
import Poster from "./pages/Poster";

const App = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Start />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dailies" element={<Dailies />} />
        <Route path="/about" element={<About />} />
        <Route path="/reflection" element={<Reflection />} />
        <Route path="/poster" element={<Poster />} />
      </Routes>
    </AnimatePresence>
  );
};

export default App;
