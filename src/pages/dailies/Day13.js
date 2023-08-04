import React from "react";
import { Card } from "antd";
import day13 from "../../assets/day13.jpg";

const Day13 = () => {
  const cardHeaderStyle = { height: "40px", paddingTop: "5px" };

  return (
    <div>
      <Card
        title={
          <h3 className="text-white text-2xl font-playfair">
            Day 13: 3 August 2023
          </h3>
        }
        headStyle={cardHeaderStyle}
        className="bg-black bg-opacity-30 text-white md:h-[70vh] lg:h-[90vh] h-auto md:w-180 p-4 
        overflow-y-scroll scrollbar scrollbar-thumb-scroll  scrollbar-track-transparent scrollbar-track-rounded-lg scrollbar-thumb-rounded-xl scrollbar-w-4"
      >
        <div className="w-lg mx-auto mb-16 rounded-lg border-2 overflow-hidden">
          <img
            src={day13}
            alt="Day 13"
            className="w-full h-full object-contain rounded-md overflow-hidden"
          />
        </div>
        <div className="w-full bg-red p-5 relative border-2 mt-5">
          <div className="w-48 h-10 -top-5 text-lg bg-blue border-2 absolute flex items-center justify-center font-playfair rounded-md">
            Information
          </div>
          <p className="mt-5 font-playfair text-base">
            Today’s exhibition was a great success, and we are delighted with the valuable feedback we received from the attendees. Professor Grizou’s suggestion of adding a delete button to our platform was particularly important. This feature will enable users to easily remove duplicate or redundant stories, events, and art, enhancing the overall user experience. We are excited that our platform is almost ready for use, and we’re thrilled that Jane found it easy and enjoyable to use. Her positive feedback made all the hard work worthwhile.
          </p>
        </div>
      </Card>
    </div>
  );
};

export default Day13;