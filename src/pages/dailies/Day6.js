import React from "react";
import { Card } from "antd";

const Day6 = () => {
  const cardHeaderStyle = { height: "40px", paddingTop: "5px" };

  return (
    <div>
      <Card
        title={
          <h3 className="text-white text-2xl font-playfair">
            Day 6: 25 July 2023
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
            After creating the digital prototype, we have identified some finer issues that require attention. One key improvement is to restrict the “add events” feature solely to the staff, ensuring that all events posted are approved and endorsed by the annex staff, thereby maintaining quality control.
          </p>
          <p className="mt-2 font-playfair text-base">
            To enhance user experience, we should implement a dedicated button that allows users to easily navigate back to the homepage from any page within the application.
          </p>
          <p className="mt-2 font-playfair text-base">
            Throughout the design process, we have strived to keep the number of pages to a minimum, making navigation more straightforward and intuitive for users.
          </p>
          <p className="mt-2 font-playfair text-base">
            During today’s lesson, we conducted a comparative analysis with an alternative offline event idea. According to the pros and pros chart, both ideas can target two groups, elderly and the youth. However, the digital idea has the advantage of reaching a larger audience, including the elderly, who can gradually bridge their technology gap through the platform, with the simple interface. On the other hand, the offline event may be more readily adopted by people, but this could potentially limit the overall number of individuals reached.
          </p>
          <p className="mt-2 font-playfair text-base">
            In conclusion, we need to make the digital platform more appealing to users, to enhance its effectiveness. To do this, we should get feedback from users and test the app to see how we can improve it. By making the app better based on what users want, we can create a strong and welcoming community for everyone.
          </p>
        </div>
      </Card>
    </div>
  );
};

export default Day6;