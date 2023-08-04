import React from "react";
import { Card } from "antd";
import day12 from "../../assets/day12.jpg";

const Day12 = () => {
  const cardHeaderStyle = { height: "40px", paddingTop: "5px" };

  return (
    <div>
      <Card
        title={
          <h3 className="text-white text-2xl font-playfair">
            Day 12: 2 August 2023
          </h3>
        }
        headStyle={cardHeaderStyle}
        className="bg-black bg-opacity-30 text-white md:h-[70vh] lg:h-[90vh] h-auto md:w-180 p-4 
        overflow-y-scroll scrollbar scrollbar-thumb-scroll  scrollbar-track-transparent scrollbar-track-rounded-lg scrollbar-thumb-rounded-xl scrollbar-w-4"
      >
        <div className="w-lg mx-auto mb-16 rounded-lg border-2 overflow-hidden">
          <img
            src={day12}
            alt="Day 12"
            className="w-full h-full object-contain rounded-md overflow-hidden"
          />
        </div>
        <div className="w-full bg-red p-5 relative border-2 mt-5">
          <div className="w-48 h-10 -top-5 text-lg bg-blue border-2 absolute flex items-center justify-center font-playfair rounded-md">
            Information
          </div>
          <p className="mt-5 font-playfair text-base">
            Today, we successfully completed the poster, making sure to address all the issues we had identified earlier. With careful attention to detail, we have finalized all the designs for submission. Our team worked collaboratively, ensuring that every aspect of the project was thoroughly reviewed and improved. Now, we can confidently proceed with our submissions, feeling satisfied with the outcome of our efforts.
          </p>
        </div>
      </Card>
    </div>
  );
};

export default Day12;