import React from "react";
import { Card } from "antd";

const Day7 = () => {
  const cardHeaderStyle = { height: "40px", paddingTop: "5px" };

  return (
    <div>
      <Card
        title={
          <h3 className="text-white text-2xl font-playfair">
            Day 7: 26 July 2023
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
            Today, we met Jane again to gather feedback on our prototype and the initial glimpse of our website. We also inquired about the possibility of using an iPad since she mentioned that some members of the community couldn’t afford smartphones, stating that it’s often a choice between basic necessities like food and heating. Her higher-up approved the idea.
          </p>
          <p className="mt-2 font-playfair text-base">
            Jane expressed interest in having the ability to click on images from the first page, which would then lead to a slideshow or galleries containing other related images or videos along with descriptions. This would address the concern we had yesterday about overwhelming users with too much content from events, making the website less user-friendly.
          </p>
          <p className="mt-2 font-playfair text-base">
            Additionally, Jane agreed that user-shared content might need to be reviewed by the admin staff to prevent any inappropriate or prank-related posts. This is important because some members of the community might have different views from the ethos of the main annexed communities.
          </p>
          <p className="mt-2 font-playfair text-base">
            However, the higher-up suggested making a video to play on loop on the iPad instead of using the website. We are currently deliberating whether this aligns with our primary focus, as it could divert us from our original plans. We need to carefully consider the pros and cons before making a decision.
          </p>
          <p className="mt-2 font-playfair text-base">
            Tomorrow, our next steps involve sorting out the content provided by Jane, which will be used to start populating our website. This will help us move forward with our project and continue making progress.
          </p>
        </div>
      </Card>
    </div>
  );
};

export default Day7;