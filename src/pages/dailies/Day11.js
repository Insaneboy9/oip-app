import React from "react";
import { Card } from "antd";

const Day11 = () => {
  const cardHeaderStyle = { height: "40px", paddingTop: "5px" };

  return (
    <div>
      <Card
        title={
          <h3 className="text-white text-2xl font-playfair">
            Day 11: 1 August 2023
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
            Today, we made significant progress with our poster by completing a draft and seeking feedback from Professor Grizou. The feedback was valuable as it helped us identify the shortcomings in our content. One major area of improvement is the need for more details about our main features. We should focus on providing clear and comprehensive information to engage our audience effectively.
          </p>
          <p className="mt-5 font-playfair text-base">
            Furthermore, we realized that our initial design needed improvement, so we have worked on creating a new design. The new design should be visually appealing, organized, and easy to follow. A well-structured poster will enhance the presentation of our content and make it more accessible to viewers.
          </p>
          <p className="mt-5 font-playfair text-base">
            During usability testing, we came across an issue with the font contrast on our product. It is essential to address this problem to ensure readability and accessibility. We should select fonts and color combinations that provide enough contrast to make the content easily legible for all readers.
          </p>
          <p className="mt-5 font-playfair text-base">
            Tomorrow, we plan to continue our efforts in refining the poster and website, considering the feedback received. By doing so, we aim to create an impactful and informative poster that effectively communicates our message and a user-friendly website.
          </p>
          <p className="mt-5 font-playfair text-base">
            Overall, with these improvements and revisions, we hope to submit a compelling poster and a user-friendly website design that effectively communicates the essence of our project and captivates our audience.
          </p>
        </div>
      </Card>
    </div>
  );
};

export default Day11;