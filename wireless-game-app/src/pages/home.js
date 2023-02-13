import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Home = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = ({ inputQuestion }) => {
    if (inputQuestion) {
      navigate("/quiz", { state: inputQuestion });
    }
  };

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
      className="h-screen w-screen relative bg-ufo bg-cover justify-center flex items-center flex-col"
    >
      <motion.h1
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", duration: 2 }}
        className="font-playfair font-bold text-5xl text-white mb-10 -mt-15"
      >
        Welcome! Please enter the quiz question:
      </motion.h1>
      <div className="relatvie flex items-center text-white justify-center h-50">
        <motion.svg
          className="h-20 absolute"
          animate={{ x: searchOpen ? -210 : 0 }}
          transition={{ type: "linear" }}
          onClick={() => setSearchOpen((prev) => !prev)}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clipRule="evenodd"
          ></path>
        </motion.svg>
        <form onSubmit={handleSubmit(onSubmit)}>
          <motion.input
            {...register("inputQuestion", {
              required: "This field is required",
            })}
            animate={{ scaleX: searchOpen ? 1 : 0 }}
            transition={{ type: "linear" }}
            placeholder="Search..."
            className="font-playfair bg-transparent border-2 border-white rounded-md w-80 p-5 placeholder:text-white"
          />
        </form>
      </div>
      {errors.inputQuestion && (
        <span className="text-darkRed mt-5 font-bold font-playfair">
          This field is required
        </span>
      )}
    </motion.div>
  );
};

export default Home;
