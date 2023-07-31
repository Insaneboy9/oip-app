import React from "react";
import { Card } from "antd";
import step3 from "../../assets/step3.png";

const Progress3 = () => {
  const cardHeaderStyle = { height: "40px", paddingTop: "5px" };

  return (
    <div>
      <Card
        title={<h3 className="text-white text-2xl">Step 3: Ideation</h3>}
        headStyle={cardHeaderStyle}
        className="bg-black bg-opacity-30 text-white md:h-[70vh] lg:h-[80vh] h-auto md:w-180 p-4"
      >
        <div className="w-80 h-80 mx-auto mb-4">
          <img
            src={step3}
            alt="Step 3 Image"
            className="w-full h-full object-contain"
          />
        </div>
        <p>
          After some consideration, our group decided to combine all three
          topics of showcasing art pieces, sharing community stories, and
          documenting events. As from the first meeting we can tell that she is
          very passionate about all the three topics, and its the combination of
          all that makes up the essence of the community, from the existing
          solutions like the outsourced website and mobile apps lacks
          flexibility and is too separated, which makes it troublesome to
          install or look at. These issues inspired us to think of a solution
          that is userfriendly, combines all aspect that is important to jane.
          The team proposes to create a comprehensive website that will feature
          visually engaging galleries to showcase the artworks, an interactive
          storytelling platform for community members to share their stories,
          and a comprehensive events archive to preserve the history of The
          Annexe's events. The team aims to attract youths and promote community
          engagement by encouraging active involvement and contributions. They
          will address the challenge of inclusivity and accessibility by
          implementing responsive design and interactive tablets/kiosks at The
          Annexe's location. The website will prioritize community-driven
          content sharing and visually appealing galleries organized
          thematically. In order to foster community involvement, we'll plan a
          user-generated content feature, allowing visitors to share their own
          photos, videos, and stories about the murals they encounter. To
          maintain appropriateness, we'll set up a moderation system to review
          and approve user submissions. To get this project started, our first
          step will be reaching out to Jane for feedback on our ideas. Once we
          have her input, we'll creating a prototype of the web application. In
          parallel, we'll gather all the content related to the murals and art
          pieces, including pictures, videos, descriptions, and other relevant
          information. Our ultimate aim is to create an engaging and accessible
          platform that showcases the incredible art created by the community
          and strengthens the sense of belonging and ownership among users.
        </p>
      </Card>
    </div>
  );
};

export default Progress3;
