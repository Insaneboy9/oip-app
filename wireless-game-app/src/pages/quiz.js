import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const countVariant = {
  initial: { opacity: 1, scale: 0 },
  visible: { opacity: 1, scale: 1, rotateZ: 360 },
};

const Quiz = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const question = location.state;
  const [seconds, setSeconds] = React.useState(null);

  const retrieveVoice = () => {
    //this function should get the voice media
    console.log("fastest button and voice retrieval");
  };

  const onClick = () => {
    navigate("/home");
  };

  React.useEffect(() => {
    if (seconds === 0) {
      retrieveVoice();
      setSeconds(null);
    }

    // exit early when we reach 0
    if (!seconds) return;

    // save intervalId to clear the interval when the
    // component re-renders
    const intervalId = setInterval(() => {
      setSeconds(seconds - 1);
    }, 1000);

    // clear interval on re-render to avoid memory leaks
    return () => clearInterval(intervalId);
  }, [seconds]);

  return (
    <motion.div
      initial={{ width: "100%" }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
      className="h-screen w-screen relative bg-ufo bg-cover justify-center flex items-center flex-col"
    >
      <motion.h2
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", duration: 2 }}
        className="font-playfair font-bold text-5xl text-white mb-20"
      >
        Question: {question}
      </motion.h2>

      <AnimatePresence>
        {seconds && (
          <motion.div
            variants={countVariant}
            initial="initial"
            animate="visible"
            transition={{ type: "spring", repeat: 5, duration: 1 }}
            className="w-50 h-50 text-8xl font-bold text-white"
          >
            {seconds}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", duration: 2 }}
        className="flex gap-x-10"
      >
        <button
          className="p-5 bg-red text-white rounded-xl mt-20"
          onClick={() => setSeconds(5)}
        >
          Start question countdown
        </button>
        <button
          onClick={onClick}
          className="p-5 bg-red text-white rounded-xl mt-20"
        >
          Ask a new question
        </button>
      </motion.div>
    </motion.div>
  );
};

export default Quiz;
