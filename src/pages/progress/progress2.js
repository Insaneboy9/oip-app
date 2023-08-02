import React from "react";
import { Card } from "antd";
import step2 from "../../assets/step2.png";

const Progress2 = () => {
  const cardHeaderStyle = { height: "40px", paddingTop: "5px" };

  return (
    <div>
      <Card
        title={
          <h3 className="text-white text-2xl font-playfair">
            Step 2: Needfinding
          </h3>
        }
        headStyle={cardHeaderStyle}
        className="bg-black bg-opacity-30 text-white md:h-[70vh] lg:h-[90vh] h-auto md:w-180 p-4 
        overflow-y-scroll scrollbar scrollbar-thumb-scroll  scrollbar-track-transparent scrollbar-track-rounded-lg scrollbar-thumb-rounded-xl scrollbar-w-4"
      >
        <div className="w-lg mx-auto mb-16">
          <img
            src={step2}
            alt="Step 2 Image"
            className="w-full h-[400px] rounded-md border-2"
          />
        </div>
        <div className="w-full bg-red p-5 relative border-2 ">
          <div className="w-48 h-10 -top-5 text-lg bg-blue border-2 absolute flex items-center justify-center font-playfair rounded-md">
            Description
          </div>
          <p className="mt-5 font-playfair text-base">
            On July 19th, we went to see Jane for the first time, and during the client meeting, we gathered essential platform requirements. The major goal is to establish a simple and user-friendly website that showcases murals and artworks created by the community. Additionally, the platform should serve as a space for community members to share their stories and experiences, as well as to describe The Annexe's events and activities, emphasizing their positive impact on the community.
          </p>
          <p className="mt-5 font-playfair text-base">
            In terms of demographics, the present user base primarily comprises individuals aged 60 and up. However, the target demographic is open to any member of the community, with a particular focus on engaging and appealing to the younger generation.
          </p>
          <p className="mt-5 font-playfair text-base">
            The platform serves two key functions. First, it aims to raise funds for The Annexe by showcasing their work and impact through art and community stories. Second, it endeavors to ensure that the community's experiences and tales are not lost or forgotten.
          </p>
          <p className="mt-5 font-playfair text-base">
            As Jane Cowie revealed her desire for face-to-face relationships, meeting insights shed light on the client's preferences. The Annexe's existing tools and platforms include Facebook, an outsourced website, a mobile app, Twitter, and an email list. However, there are concerns regarding the limitations of these tools in terms of adaptability, portability, and community engagement. A more open and accessible platform that enables seamless sharing and interaction among community members is clearly needed.
          </p>
          <p className="mt-5 font-playfair text-base">
            One of the key issues raised at the meeting was the management and dissemination of historical materials. The current instruments are inadequate for this goal, and a more efficient and organized method is desired.
          </p>
          <p className="mt-5 font-playfair text-base">
            Given the project's two-week deadline, the team acknowledges the need to minimize the project's scope. The primary focus will be on displaying art, sharing community stories, and documenting events. This strategic decision will allow the team to concentrate their efforts and deliver a high-quality product within the specified timeframe.
          </p>
        </div>
      </Card>
    </div>
  );
};

export default Progress2;