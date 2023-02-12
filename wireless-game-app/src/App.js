import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/home";
import Quiz from "./pages/quiz";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quiz" element={<Quiz />} />
    </Routes>
  );
};

export default App;
