import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom'

const Home = () => {
  const [question, setQuestion] = useState("");

  const handleChange = (event) => {
    setQuestion(event.target.value);
  };

  return (
    <div className="justify-center">
      <h2>Welcome! Please enter the quiz question:</h2>
      <input
        type="text"
        id="question"
        name="question"
        onChange={handleChange}
        value={question}
        autoComplete="off"
      />

      <Link to="/quiz" state={{ data: question }}>
      <button>Enter</button>
      </Link>
    </div>
  );
};

export default Home;
