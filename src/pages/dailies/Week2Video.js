import React from "react";
import { Card } from "antd";

function Week2Video() {
  const cardHeaderStyle = { height: "40px", paddingTop: "5px" };
  const youtubeEmbedLink = "https://www.youtube.com/embed/aHCcano6ipY";
  return (
    <Card
      title={
        <h3 className="text-white text-2xl font-playfair">
          Week 2: Weekly Pitch 2
        </h3>
      }
      headStyle={cardHeaderStyle}
      className="bg-black bg-opacity-30 text-white md:h-[70vh] lg:h-[90vh] h-auto md:w-180 p-4 
          overflow-y-scroll scrollbar scrollbar-thumb-scroll scrollbar-track-transparent scrollbar-track-rounded-lg scrollbar-thumb-rounded-xl scrollbar-w-4"
    >
      <div className="w-lg mx-auto mb-16 rounded-lg border-2 overflow-hidden">
        <iframe
          width="100%"
          height="400"
          src={youtubeEmbedLink}
          title="Usability Testing"
          allowFullScreen
        ></iframe>
      </div>
    </Card>
  );
}

export default Week2Video;
