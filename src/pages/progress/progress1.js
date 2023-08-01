import React from "react";
import { Card } from "antd";
import step1 from "../../assets/step1.jpg";

const Progress1 = () => {
  const cardHeaderStyle = { height: "40px", paddingTop: "5px" };

  return (
    <div>
      <Card
        title={
          <h3 className="text-white text-2xl font-playfair">
            Step 1: Choosing project
          </h3>
        }
        headStyle={cardHeaderStyle}
        className="bg-black bg-opacity-30 text-white md:h-[70vh] lg:h-[90vh] h-auto md:w-180 p-4 
        overflow-y-scroll scrollbar scrollbar-thumb-scroll  scrollbar-track-transparent scrollbar-track-rounded-lg scrollbar-thumb-rounded-xl scrollbar-w-4"
      >
        <div className="w-lg mx-auto mb-16 rounded-lg border-2 overflow-hidden">
          <img
            src={step1}
            alt="Step 1 Image"
            className="w-full h-full object-contain rounded-md overflow-hidden"
          />
        </div>
        <div className="w-full bg-red p-5 relative border-2 ">
          <div className="w-48 h-10 -top-5 text-lg bg-blue border-2 absolute flex items-center justify-center font-playfair rounded-md">
            Description
          </div>
          <p className="mt-5 font-playfair text-base">
            The Annexe Communities Archives" project in Partick, Glasgow,
            empowers the community by preserving their stories and experiences.
            They promote collaboration, ensuring every voice is valued and no
            one is left out. The organization cares about the community's
            well-being, fostering social connections and resilience among
            diverse members. We want to be part of this initiative to preserve
            community history and create a strong sense of belonging among
            members.
          </p>
          <p className="mt-5 font-playfair text-base">
            The Annexe Communities Archives" project in Partick, Glasgow,
            empowers the community by preserving their stories and experiences.
            They promote collaboration, ensuring every voice is valued and no
            one is left out. The organization cares about the community's
            well-being, fostering social connections and resilience among
            diverse members. We want to be part of this initiative to preserve
            community history and create a strong sense of belonging among
            members.
          </p>
        </div>
      </Card>
    </div>
  );
};

export default Progress1;
