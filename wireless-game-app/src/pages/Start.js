import React from "react";
import logo from "../assets/logo.png";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import LocationSearchingIcon from "@mui/icons-material/LocationSearching";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

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
  const onDragEnd = (info) => {
    const { destination } = info;
    if (destination.droppableId === "start") {
      navigate("/home");
    }
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="h-screen w-screen relative bg-ufo bg-cover justify-center flex items-center flex-col">
        <motion.img
          initial={{ opacity: 0, y: -200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", duration: 2 }}
          className="w-50 h-60 -mt-70 mb-10"
          src={logo}
        />
        <div>
          <motion.h1
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", duration: 2 }}
            className="font-playfair font-bold text-5xl text-white"
          >
            WELCOME TO INSANE GAME
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", duration: 2 }}
            className="font-playfair font-bold text-3xl text-white text-center mt-3 mb-10"
          >
            SLIDE TO START
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", duration: 2 }}
            className="flex justify-between w-full bg-lightRed p-4 rounded-3xl items-center "
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
                          <RocketLaunchIcon sx={{ fontSize: 34 }} />
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
      </div>
    </DragDropContext>
  );
}

export default Start;
