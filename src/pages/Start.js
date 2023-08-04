import React, { useEffect } from "react";
import logo from "../assets/logo-no-background.png";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import LocationSearchingIcon from "@mui/icons-material/LocationSearching";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { GiButtonFinger } from "react-icons/gi";
import useAnimate from "../hooks/useAnimate.js";

const Area = styled.div`
  .start {
    font-size: ${(props) => (props.isDraggingOver ? "5.5rem" : "5rem")};
    background-color: ${(props) =>
      props.isDraggingOver ? "rgba(231, 198, 198, 0.5)" : "none"};
    border-radius: 50%;
    padding: 10px;
    transition: background-color 0.3s ease-in-out, font-size 0.3s ease-in-out;
  }
`;

const DragArea = styled.div`
  background-image: ${(props) =>
    props.isDragging
      ? "linear-gradient(81.66deg, #00B5EE 7.21%, #FF45A4 45.05%, #FFBA00 78.07%)"
      : "none"};
  box-shadow: ${(props) =>
    props.isDragging ? "0px 2px 5px rgba(0,0,0,0.5)" : "none"};
  padding: 10px 10px;
  margin-bottom: 5px;
  border-radius: 50%;
  transition: background-image 0.5s ease-in-out;
  color: #f1f2f6;
`;

function Start() {
  const navigate = useNavigate();
  const useAnimation = useAnimate();

  useEffect(() => {
    useAnimation.onStart();
  }, []);
  const onDragEnd = (info) => {
    const { destination } = info;
    if (destination.droppableId === "start") {
      navigate("/home");
    }
  };
  return (
    <AnimatePresence>
      <DragDropContext onDragEnd={onDragEnd}>
        <motion.div
          exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
          className="h-screen w-screen relative bg-ufo bg-cover justify-center flex items-center flex-col"
        >
          <div className="absolute h-full w-full bg-lightBlack z-1"></div>
          <motion.img
            initial={{ opacity: 0, y: -200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", duration: 2 }}
            className="w-50 h-60 -mt-70 mb-10 z-10"
            src={logo}
          />
          <div className="absolute top-1/4 right-48 flex justify-center items-center flex-col">
            <motion.p
              animate={{ opacity: 0 }}
              transition={{ repeat: Infinity, duration: 1 }}
              className="text-buttonText text-xl font-bold"
            >
              "CLICK ME TRY ANNEXE-CONNECT"
            </motion.p>
            <motion.div whileHover={{ scale: 1.4, rotate: 45 }}>
              <Link to="https://urfrider.github.io/annexe-app/" target="_blank">
                <GiButtonFinger className="text-button text-5xl mt-5 cursor-pointer" />
              </Link>
            </motion.div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <motion.h1
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", duration: 2 }}
              className="font-playfair font-bold text-3xl text-test w-2/3 text-center z-10"
            >
              WELCOME! WE ARE A GROUP OF UoG STUDENTS TASKED TO DESIGN A SOLUTION FOR THE ANNEXE COMMUNITIES DUE TO THE LACK OF DOCUMENTATION AND SHARING OF THEIR ACTIVITIES
            </motion.h1>
            <div className="relative">
              <motion.h1
                initial={{ opacity: 0, x: 200 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: "spring", duration: 2 }}
                className="font-playfair font-bold text-3xl text-buttonText text-center mt-3 mb-10 z-10"
              >
                SLIDE TO DISCOVER OUR JOURNEY
              </motion.h1>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", duration: 2 }}
              className="flex justify-between bg-lightRed p-4 rounded-3xl items-center w-2/3 z-10"
            >
              <Droppable direction="horizontal" droppableId="rocket">
                {(magic) => (
                  <div ref={magic.innerRef} {...magic.droppableProps}>
                    <Draggable index={1} draggableId={"rocket1"}>
                      {(magic, snapshot) => (
                        <div ref={magic.innerRef}>
                          <DragArea
                            ref={magic.innerRef}
                            isDragging={snapshot.isDragging}
                            {...magic.dragHandleProps}
                            {...magic.draggableProps}
                          >
                            <RocketLaunchIcon
                              sx={{ fontSize: 34, color: "#fffa65" }}
                            />
                          </DragArea>
                        </div>
                      )}
                    </Draggable>
                    {magic.placeholder}
                  </div>
                )}
              </Droppable>

              <Droppable droppableId="start">
                {(magic, snapshot) => (
                  <Area
                    ref={magic.innerRef}
                    {...magic.droppableProps}
                    isDraggingOver={snapshot.isDraggingOver}
                    isDraggingFrom={Boolean(snapshot.draggingFromThisWith)}
                  >
                    <LocationSearchingIcon className="start" />
                  </Area>
                )}
              </Droppable>
            </motion.div>
          </div>
        </motion.div>
      </DragDropContext>
    </AnimatePresence>
  );
}

export default Start;
