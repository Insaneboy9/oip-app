import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Start from "./pages/Start";
import Quiz from "./pages/quiz";
import Home from "./pages/home";
import { AnimatePresence } from "framer-motion";

const App = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Start />} />
        <Route path="/home" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </AnimatePresence>
  );
};

export default App;
