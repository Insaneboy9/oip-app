import React from "react";
import { Card } from "antd";
import day3 from "../../assets/day3.png";

const Day3 = () => {
  const cardHeaderStyle = { height: "40px", paddingTop: "5px" };

  return (
    <div>
      <Card
        title={
          <h3 className="text-white text-2xl font-playfair">
            Day 3: 20 July 2023
          </h3>
        }
        headStyle={cardHeaderStyle}
        className="bg-black bg-opacity-30 text-white md:h-[70vh] lg:h-[90vh] h-auto md:w-180 p-4 
        overflow-y-scroll scrollbar scrollbar-thumb-scroll  scrollbar-track-transparent scrollbar-track-rounded-lg scrollbar-thumb-rounded-xl scrollbar-w-4"
      >
        <div className="w-lg mx-auto mb-16 rounded-lg border-2 overflow-hidden">
          <img
            src={day3}
            alt="Day 3 Image"
            className="w-full h-full object-contain rounded-md overflow-hidden"
          />
        </div>
        <div className="w-full bg-red p-5 relative border-2 ">
          <div className="w-48 h-10 -top-5 text-lg bg-blue border-2 absolute flex items-center justify-center font-playfair rounded-md">
            Information
          </div>
          <p className="mt-5 font-playfair text-base">
            <strong>After our interview yesterday, we came to understand The Annexe Communities’ problem, their motivation, and goals. With these in mind, today we went through a brainstorming session.</strong>
          </p>
          <p className="mt-5 font-playfair text-base">
            All ideas were welcomed, even if an individual suggestion was only able to satisfy part of the client’s needs. For example, the idea of collaborating with geocaching to increase the exposure of The Annexe Communities’ murals, community garden, and building satisfies their need of attracting a younger audience, however, it excludes another set of important stakeholders - senior members of the community who may benefit from learning about The Annexe Communities’ work, but are not familiar with geocaching or are unable to afford phones with an internet connection. This idea might be useful to the solution still, combining it with other ideas that complement it such that most, if not all, of the client’s needs are addressed in the proposed solution.
          </p>
          <p className="mt-5 font-playfair text-base">
            Jamboard was used to facilitate in the brainstorming process (screenshot blurred for privacy of ideas).
          </p>
          <p className="mt-5 font-playfair text-base">
            We will send 3 of our best potential solutions to Jane today, for her feedback.
          </p>
          <p className="mt-5 font-playfair text-base">
            We also took the time to get started on our website to document the project’s progress, since we had no classes today.
          </p>
          <p className="mt-5 font-playfair text-base">
            Tomorrow we will go into prototyping, after understanding what to take note of through the lecture. Depending on Jane’s preferred idea, we will get started and aim to send her some low-fidelity prototypes by the end of the day, and revise it over the weekend based on her comments.
          </p>
        </div>
      </Card>
    </div>
  );
};

export default Day3;