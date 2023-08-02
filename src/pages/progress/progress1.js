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
            In Partick, Glasgow, "The Annexe Communities Archives" project
            empowers the community by preserving their tales and experiences.
            The project is dedicated to creating an inclusive space where
            everyone's voice is heard, and no one is left out. They encourage
            teamwork and collaboration, fostering social connections and
            resilience among diverse members of the community. The main focus of
            this project is to preserve the rich history of the community while
            instilling a strong sense of belonging and identity among its
            members. By documenting and archiving their stories, the project
            aims to celebrate the unique culture and heritage of the
            neighborhood, ensuring that future generations have access to their
            collective memories and traditions. The Annexe Communities Archives
            project is driven by a genuine concern for the well-being of the
            community. Through their activities, they strive to promote social
            cohesion, understanding, and empathy among individuals from various
            backgrounds. By preserving and sharing their stories, the project
            aims to strengthen community ties and create a lasting legacy that
            will inspire and benefit generations to come. We are excited to be a
            part of this meaningful project and contribute to the preservation
            of community history. By supporting the Annexe Communities Archives,
            we aim to play a role in empowering the community and promoting a
            shared sense of pride and belonging for all its members.
          </p>
        </div>
      </Card>
    </div>
  );
};

export default Progress1;
