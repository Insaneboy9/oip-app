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
            We went to meet Jane for the first time on 19th July, during the client meeting, we gathered important requirements for the platform. The primary focus is to create a simple and user-friendly website that showcases and provides information on murals and art pieces created by the community.
          </p>
          <p className="mt-5 font-playfair text-base">
            Additionally, the platform should serve as a space for community members to share their stories and experiences. Furthermore, it should document events and activities conducted by The Annexe, highlighting their impact on the community. In terms of demographics, the current user base mainly consists of individuals aged 60 years and above. However, the target demographic is open to any member of the community, with a specific emphasis on engaging and appealing to the younger generation.
          </p>
          <p className="mt-5 font-playfair text-base">
            The purpose of the platform is two-fold. First, it aims to secure funding for The Annexe by showcasing their work and impact through art pieces and community stories. Second, it seeks to ensure that the experiences and stories of the community do not go unheard or forgotten. Insights from the meeting shed light on the client's preferences, as Jane Cowie expressed her preference for face-to-face connections. The existing tools and platforms used by The Annexe include Facebook, an outsourced website, a mobile app, Twitter, and an email list. However, there are concerns about the limitations of these tools in terms of flexibility, portability, and community engagement. There is a clear need for a more inclusive and accessible platform that allows for seamless sharing and interaction among community members.
          </p>
          <p className="mt-5 font-playfair text-base">
            One of the challenges identified during the meeting is the management and distribution of archived materials. The current tools are not well-suited for this purpose, and there is a desire to create a more efficient and organized system. Given the limited two-week timeline, the team recognizes the necessity to narrow down the project's scope. The focus will be on either showcasing art pieces, sharing community stories, or documenting events. This decision will allow the team to concentrate their efforts and deliver a high-quality product within the given timeframe.
          </p>
        </div>
      </Card>
    </div>
  );
};

export default Progress2;