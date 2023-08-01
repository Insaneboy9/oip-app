import React from "react";
import { Card } from "antd";

const Day5 = () => {
  const cardHeaderStyle = { height: "40px", paddingTop: "5px" };

  return (
    <div>
      <Card
        title={
          <h3 className="text-white text-2xl font-playfair">
            Day 5: 24 July 2023
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
            <strong>Meeting Outcome and Plan:</strong>
          </p>
          <p className="mt-2 font-playfair text-base">
            Today, we carefully considered Jane’s valuable suggestions and the topics discussed during our initial meeting. Acknowledging the significance of each aspect to her, we have devised a plan to incorporate all three aspects into our platform. Our goal is to engage both the current demographic of individuals aged 60 and above and attract the younger generation, fostering a strong sense of belonging within the community.
          </p>
          <p className="mt-2 font-playfair text-base">
            The proposed solution aims to showcase community-made murals and art pieces, collect diverse community stories and experiences, and document events organized by The Annexe. With a visually engaging interface and interactive storytelling platform, the site will celebrate the creativity and talent of community members while preserving the cultural significance of their artworks. It will empower youths and foster community engagement, sharing the rich history and stories of The Annexe. To ensure inclusivity and accessibility, the website will be designed responsively and possibly feature interactive tablets/kiosks at The Annexe’s location. The platform’s community-driven content sharing approach will promote a sense of connection and belonging, while visually captivating galleries will organize photos and stories thematically for a seamless user experience.
          </p>
          <p className="mt-2 font-playfair text-base">
            <strong>Jane’s Enthusiasm:</strong>
          </p>
          <p className="mt-2 font-playfair text-base">
            Upon discussing the idea with Jane, her enthusiasm was evident as she expressed excitement about showcasing the community’s vibrancy and essence. She eagerly anticipates the positive impact of attracting the younger generation to the platform.
          </p>
          <p className="mt-2 font-playfair text-base">
            <strong>Prototype Development:</strong>
          </p>
          <p className="mt-2 font-playfair text-base">
            We have done sketches on the product and we have found some issues from this:
          </p>
          <ul className="mt-2 ml-5 font-playfair text-base list-disc">
            <li>
              User shared content might need to be vetted by the admin staff (e.g., pranks).
            </li>
            <li>
              The scroll view might be a concern if the amount of data/content significantly increases, making it hard to view and not very user-friendly to keep scrolling.
            </li>
          </ul>
          <p className="mt-2 font-playfair text-base">
            Tomorrow, we will begin working on the high-fidelity prototype. We believe Jane’s perspective is essential in creating a platform that reflects her vision, and there may be other issues only she can spot with her experience. Through collaboration, we aim to ensure inclusivity and engagement for all members, regardless of age. Together, we are determined to create something remarkable and impactful.
          </p>
        </div>
      </Card>
    </div>
  );
};

export default Day5;