import React from "react";
import { Card } from "antd";

const Day4 = () => {
  const cardHeaderStyle = { height: "40px", paddingTop: "5px" };

  return (
    <div>
      <Card
        title={
          <h3 className="text-white text-2xl font-playfair">
            Day 4: 21 July 2023
          </h3>
        }
        headStyle={cardHeaderStyle}
        className="bg-black bg-opacity-30 text-white md:h-[70vh] lg:h-[90vh] h-auto md:w-180 p-4 
        overflow-y-scroll scrollbar scrollbar-thumb-scroll  scrollbar-track-transparent scrollbar-track-rounded-lg scrollbar-thumb-rounded-xl scrollbar-w-4"
      >
        <div className="w-full bg-red p-5 relative border-2 mt-5">
          <div className="w-48 h-10 -top-5 text-lg bg-blue border-2 absolute flex items-center justify-center font-playfair rounded-md">
            Information
          </div>
          <p className="mt-5 font-playfair text-base">
            <strong>Today, we decided to use storyboarding for our prototype, as it allows us to follow the user’s journey and imagine potential issues with the solution. Despite the low-fidelity prototype, we were able to identify logistical challenges with our suggested solution and a gap in our stakeholder analysis.</strong>
          </p>
          <ul className="mt-2 ml-5 font-playfair text-base list-disc">
            <li>
              We realized that the QR code has to be able to withstand damage and still be usable.
            </li>
            <li>
              Additionally, the use of QR codes may pose a security risk as it could be pasted over with a QR code leading to a malicious website if it is not frequently checked on.
            </li>
            <li>
              We also realized that we left out two stakeholders in our previous analysis, which are everyday people who have no awareness of the Annexe Communities or their work, and people who partake in geocaching.
            </li>
          </ul>
          <p className="mt-5 font-playfair text-base">
            Apart from prototyping, we designed some tests for our potential solutions, which we will use to evaluate the improved prototypes.
          </p>
          <p className="mt-5 font-playfair text-base">
            Over the weekend, we will create more prototypes, potentially using different methods of prototyping to critique our potential solutions thoroughly, before presenting Jane with our most promising prototype.
          </p>
        </div>
      </Card>
    </div>
  );
};

export default Day4;