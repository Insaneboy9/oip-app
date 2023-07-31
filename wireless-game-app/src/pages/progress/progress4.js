import React from "react";
import { Card } from "antd";
import step4 from "../../assets/step4.png";

const Progress4 = () => {
  const cardHeaderStyle = { height: "40px", paddingTop: "5px" };

  return (
    <div>
      <Card
        title={
          <h3 className="text-white text-2xl font-playfair">
            Step 4: Prototyping
          </h3>
        }
        headStyle={cardHeaderStyle}
        className="bg-black bg-opacity-30 text-white md:h-[70vh] lg:h-[90vh] h-auto md:w-180 p-4 
        overflow-y-scroll scrollbar scrollbar-thumb-scroll  scrollbar-track-transparent scrollbar-track-rounded-lg scrollbar-thumb-rounded-xl scrollbar-w-4"
      >
        <div className="w-lg mx-auto mb-16">
          <img
            src={step4}
            alt="Step 4 Image"
            className="w-full h-[400px] rounded-md border-2"
          />
        </div>
        <div className="w-full bg-red p-5 relative border-2 ">
          <div className="w-48 h-10 -top-5 text-lg bg-blue border-2 absolute flex items-center justify-center font-playfair rounded-md">
            Description
          </div>
          <p className="mt-5 font-playfair text-base">
            During the initial phase of paper sketches, we discovered their effectiveness in exploring design ideas and identifying flaws. However, we encountered some concerns, such as the need for admin vetting of user-shared content to avoid inappropriate material, and potential issues with the scroll view when handling a significant increase in data.
          </p>
          <p className="mt-5 font-playfair text-base">
            To address these limitations and refine our design, we transitioned from low-fidelity paper sketches to a high-fidelity prototype using Figma. This allowed us to add visual details and interactions, creating a more realistic look and feel for the design. The interactive prototypes in Figma helped simulate user flows and allowed us to spot usability issues early on. Using Figma also facilitated smoother communication during the website creation process. We could directly share design specifications and assets, reducing the risk of miscommunication and ensuring the final product aligned closely with our vision.
          </p>
          <p className="mt-5 font-playfair text-base">
            During the Figma phase, we identified some finer issues that required attention to enhance the user experience. For instance, we implemented a dedicated button to navigate back to the homepage from any page within the application, making navigation more intuitive. We also kept the number of pages to a minimum, further simplifying the user's journey.
          </p>
          <p className="mt-5 font-playfair text-base">
            After presenting the prototype to Jane, we received valuable feedback. Jane expressed interest in having the ability to click on images from the first page, which would then lead to a slideshow or galleries containing related images or videos with descriptions. This would address our concern about overwhelming users with too much content from events and make the website more user-friendly. Additionally, Jane agreed that user-shared content should be reviewed by admin staff to prevent inappropriate or prank-related posts, considering different views within the community. We also worked on improving the layout, creating a more natural and logical information flow to help users easily find what they're looking for. Our main goal is to make the website user-friendly for people of all backgrounds and technical expertise. Thanks to the changes we implemented, visitors now have a positive first impression and are encouraged to explore and engage with the content more deeply.
          </p>
        </div>
      </Card>
    </div>
  );
};

export default Progress4;