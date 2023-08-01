import React from "react";
import { Card } from "antd";
import day1 from "../../assets/day1.png";

const Day1 = () => {
  const cardHeaderStyle = { height: "40px", paddingTop: "5px" };

  return (
    <div>
      <Card
        title={
          <h3 className="text-white text-2xl font-playfair">
            Day 1: 18 July 2023
          </h3>
        }
        headStyle={cardHeaderStyle}
        className="bg-black bg-opacity-30 text-white md:h-[70vh] lg:h-[90vh] h-auto md:w-180 p-4 
        overflow-y-scroll scrollbar scrollbar-thumb-scroll  scrollbar-track-transparent scrollbar-track-rounded-lg scrollbar-thumb-rounded-xl scrollbar-w-4"
      >
        <div className="w-lg mx-auto mb-16 rounded-lg border-2 overflow-hidden">
          <img
            src={day1}
            alt="Day 1 Image"
            className="w-full h-full object-contain rounded-md overflow-hidden"
          />
        </div>
        <div className="w-full bg-red p-5 relative border-2 ">
          <div className="w-48 h-10 -top-5 text-lg bg-blue border-2 absolute flex items-center justify-center font-playfair rounded-md">
            Information
          </div>
          <p className="mt-5 font-playfair text-base">
            <strong>What have we learned today:</strong>
          </p>
          <ul className="mt-2 ml-5 font-playfair text-base list-disc">
            <li>
              Alignment of goals to settle differences in mental models between individuals and stakeholders.
            </li>
            <li>
              Asking good questions to gather meaningful responses, frameworks for forming good questions.
            </li>
            <li>
              Refining questions using Large Language Models (LLM).
            </li>
            <li>
              Project risk management, prepare for failures to recover fast.
            </li>
          </ul>
          <p className="mt-5 font-playfair text-base">
            Today, we created a stakeholder map to keep track of the perspectives we need to consider during our interview and design process [attached to post]. Based on the stakeholder map, we created a list of questions, curated to extract useful information from The Annexe Communities on the project’s scope. As our designing journey on this OIP is a continuous one, we need to formulate effective questions to understand our customer’s requirements better and gather explicit, objective feedback on prototypes.
          </p>
          <p className="mt-5 font-playfair text-base">
            As our main goal is to deliver a meaningful product, it is important that we learn to deliberately and explicitly resolve misunderstandings to prevent delays in the timeline or straying from the project’s focus. Therefore, within the team, we believe that verbal discussion, face to face, would work most effectively for us as we can raise questions directly and identify any disagreements or uncertainties through feedback via facial expressions. Additionally, we will be able to enforce that everyone is actively involved in the design process this way.
          </p>
          <p className="mt-5 font-playfair text-base">
            Tomorrow, our priority is to empathise with the problems faced by The Annexe Communities, identify what they need, and define the project’s scope.
          </p>
          <ol className="mt-2 ml-5 font-playfair text-base list-decimal">
            <li>
              We will start the day with a face-to-face meeting with Jane from The Annexe Communities.
            </li>
            <li>
              Next, we will gather to create ground rules for the team, along with a team contract, to ensure that discussions are effective and respectful.
            </li>
            <li>
              Following that, we will share and discuss our meeting notes to reach a common understanding of the problem at hand, formulate a problem statement, and begin the design process to create personas and identify their needs.
            </li>
            <li>
              From there, we will brainstorm potential ideas freely, without judgment, and refine them to create a few prototypes of how our solution could be like.
            </li>
          </ol>
        </div>
      </Card>
    </div>
  );
};

export default Day1;