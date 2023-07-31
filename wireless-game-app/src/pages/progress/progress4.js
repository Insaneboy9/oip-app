import React from "react";
import { Card } from "antd";
import step4 from "../../assets/step4.png";

const Progress4 = () => {
  const cardHeaderStyle = { height: "40px", paddingTop: "5px" };

  return (
    <div>
      <Card
        title={<h3 className="text-white text-2xl">Step 4: Prototyping</h3>}
        headStyle={cardHeaderStyle}
        className="bg-black bg-opacity-30 text-white md:h-[70vh] lg:h-[80vh] h-auto md:w-180 p-4"
      >
        <div className="w-80 h-80 mx-auto mb-4">
          <img
            src={step4}
            alt="Step 4 Image"
            className="w-full h-full object-contain"
          />
        </div>
        <p>
          During the initial phase of paper sketches, we discovered their
          effectiveness in exploring design ideas and identifying flaws.
          However, we encountered some concerns, such as the need for admin
          vetting of user-shared content to avoid inappropriate material, and
          potential issues with the scroll view when handling a significant
          increase in data. To address these limitations and refine our design,
          we transitioned from low-fidelity paper sketches to a high-fidelity
          prototype using Figma. This allowed us to add visual details and
          interactions, creating a more realistic look and feel for the design.
          The interactive prototypes in Figma helped simulate user flows and
          allowed us to spot usability issues early on. Using Figma also
          facilitated smoother communication during the website creation
          process. We could directly share design specifications and assets,
          reducing the risk of miscommunication and ensuring the final product
          aligned closely with our vision. During the Figma phase, we identified
          some finer issues that required attention to enhance the user
          experience. For instance, we implemented a dedicated button to
          navigate back to the homepage from any page within the application,
          making navigation more intuitive. We also kept the number of pages to
          a minimum, further simplifying the user's journey. After presenting
          the prototype to Jane, we received valuable feedback. Jane expressed
          interest in having the ability to click on images from the first page,
          which would then lead to a slideshow or galleries containing related
          images or videos with descriptions. This would address our concern
          about overwhelming users with too much content from events and make
          the website more user-friendly. Additionally, Jane agreed that
          user-shared content should be reviewed by admin staff to prevent
          inappropriate or prank-related posts, considering different views
          within the community. We also worked on improving the layout, creating
          a more natural and logical information flow to help users easily find
          what they're looking for. Our main goal is to make the website
          user-friendly for people of all backgrounds and technical expertise.
          Thanks to the changes we implemented, visitors now have a positive
          first impression and are encouraged to explore and engage with the
          content more deeply.
        </p>
      </Card>
    </div>
  );
};

export default Progress4;
