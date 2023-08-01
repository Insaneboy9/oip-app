import React from "react";
import { Card } from "antd";

const Day10 = () => {
  const cardHeaderStyle = { height: "40px", paddingTop: "5px" };

  return (
    <div>
      <Card
        title={
          <h3 className="text-white text-2xl font-playfair">
            Day 10: 31 July 2023
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
            Today, we’re pleased with the positive progress in website development and the improvements made based on valuable peer feedback. However, there are critical issues that require our attention. One of these concerns is how to handle user-shared content to ensure it aligns with our platform’s values. To address this, we fully support Jane’s suggestion of having admin staff review the content to prevent inappropriate posts. Our focus now is on creating a simple and efficient review process that empowers the staff to do their job effectively without unnecessary hurdles.<br />
            Our optimism remains high as we continue to work collaboratively with a user-centered design approach. Our goal is to create a successful and impactful website that serves the community’s needs. By addressing these issues proactively, we can ensure the website’s integrity and deliver a seamless experience for all users.
          </p>
        </div>
      </Card>
    </div>
  );
};

export default Day10;