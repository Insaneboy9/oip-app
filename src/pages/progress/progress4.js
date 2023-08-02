import React from "react";
import { Card } from "antd";
import step4 from "../../assets/step4.png";

const Progress4 = () => {
  const cardHeaderStyle = { height: "40px", paddingTop: "5px" };

  const openFigmaPrototype = () => {
    window.open(
      "https://www.figma.com/proto/4b05JZ7uxoWohraJ0PfRnA/Untitled?type=design&node-id=2-3&t=ghHKsuGMRSfz1y0E-1&scaling=scale-down&page-id=0%3A1&mode=design",
      "_blank"
    );
  };

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
          <div className="mt-5 text-center">
            <button type="primary" className="w-30 h-10 rounded-md text-lg bg-blue border-2" onClick={openFigmaPrototype}>
              Click me to try the Figma prototype
            </button>
          </div>
          <p className="mt-5 font-playfair text-base">
            We observed the efficiency of paper sketches in exploring design
            ideas and finding problems during the initial phase. However, we
            discovered certain drawbacks, such as the requirement for admin
            vetting of user-shared content to avoid improper content and
            potential challenges with the scroll view when dealing with a big
            increase in data.
          </p>
          <p className="mt-5 font-playfair text-base">
            We moved from low-fidelity paper sketches to a high-fidelity
            prototype using Figma to solve these restrictions and develop our
            design. This allowed us to incorporate visual details and
            interactions, giving the design a more realistic look and feel.
            Figma's interactive prototypes let us model user flows and identify
            usability concerns early on.
          </p>
          <p className="mt-5 font-playfair text-base">
            Using Figma also made communication easier during the website
            construction process. We could share design specs and assets
            immediately, decreasing the possibility of misinterpretation and
            ensuring the end product was closely aligned with our vision.
          </p>
          <p className="mt-5 font-playfair text-base">
            During the Figma phase, we found several finer issues that needed to
            be addressed to improve the user experience. For example, to make
            navigation more intuitive, we added a dedicated button to return to
            the homepage from any page within the program. We also reduced the
            number of pages to keep the user's trip as simple as possible.
          </p>
          <p className="mt-5 font-playfair text-base">
            We received useful input after displaying the prototype to Jane.
            Jane showed interest in being able to click on photographs from the
            first page, which would then take her to a slideshow or galleries
            featuring related images or videos with captions. This would address
            our worry about overwhelming users with event content and make the
            website more user-friendly.
          </p>
          <p className="mt-5 font-playfair text-base">
            Furthermore, Jane agreed that user-shared content should be checked
            by admin staff to prevent inappropriate or prank-related entries,
            taking into account diverse points of view within the community. We
            also worked on enhancing the layout, producing a more natural and
            logical information flow to help users locate what they're looking
            for.
          </p>
          <p className="mt-5 font-playfair text-base">
            Our primary goal is to make the website accessible to people of all
            backgrounds and levels of technical expertise. Visitors now get a
            great initial impression as a result of the modifications we did,
            and they are encouraged to investigate and connect with the content
            more fully.
          </p>
        </div>
      </Card>
    </div>
  );
};

export default Progress4;
