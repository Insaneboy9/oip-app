import React from "react";
import { useLocation, Link } from "react-router-dom";

const Quiz = () => {
  const location = useLocation();
  const question = location.state.data;
  const [seconds, setSeconds] = React.useState(null);

  const retrieveVoice = () =>{ //this function should get the voice media
    console.log("fastest button and voice retrieval")
  }

  React.useEffect(() => {
    if(seconds===0){
       retrieveVoice();
       setSeconds(null)
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
    <div className="flex h-screen justify-center items-center ">
      <h2>{question}</h2>

      <Link to="/">
        <button>Ask a new question</button>
      </Link>

      <button onClick={()=>setSeconds(5)}>Start question countdown</button>
      <div>{seconds}</div>
    </div>
  );
};

export default Quiz;
