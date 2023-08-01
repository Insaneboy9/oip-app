import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Start from "./pages/Start";
import Home from "./pages/Home";
import { AnimatePresence } from "framer-motion";
import Blog from "./pages/Blog";
import About from "./pages/About";

const App = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Start />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </AnimatePresence>
  );
};

export default App;
