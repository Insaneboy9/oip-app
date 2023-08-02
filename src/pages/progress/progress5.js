import React from "react";
import { Card } from "antd";

const Progress5 = () => {
  const cardHeaderStyle = { height: "40px", paddingTop: "5px" };
  const youtubeEmbedLink = "https://www.youtube.com/embed/KWZN9BtufbM";

  return (
    <div>
      <Card
        title={
          <h3 className="text-white text-2xl font-playfair">
            Step 5: Usability Testing
          </h3>
        }
        headStyle={cardHeaderStyle}
        className="bg-black bg-opacity-30 text-white md:h-[70vh] lg:h-[90vh] h-auto md:w-180 p-4 
        overflow-y-scroll scrollbar scrollbar-thumb-scroll  scrollbar-track-transparent scrollbar-track-rounded-lg scrollbar-thumb-rounded-xl scrollbar-w-4"
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
        <div className="w-full bg-red p-5 relative border-2 ">
          <div className="w-48 h-10 -top-5 text-lg bg-blue border-2 absolute flex items-center justify-center font-playfair rounded-md">
            Description
          </div>
          <p className="mt-5 font-playfair text-base">
            The results of the usability testing were very encouraging, with external users providing positive feedback and finding the app's navigation process easy. We made a conscious decision to focus on external users because we believe that the staff's familiarity with the app can be easily trained, whereas understanding how external users perceive and engage with the app is crucial to its long-term success.
          </p>
          <p className="mt-5 font-playfair text-base">
            During the video, at 5.40, one of our peers raised a valid issue regarding the font colors, particularly the contrast of text and background. They pointed out that this might pose challenges for some users, making it difficult for them to read and understand the text.
          </p>
          <p className="mt-5 font-playfair text-base">
            To address this concern effectively, we need to carefully reconsider the choice of font colors and background colors, especially for important text elements like event descriptions, art details, and stories. Exploring alternative color options that ensure better visibility and readability for all users, regardless of their visual abilities, will be essential.
          </p>
          <p className="mt-5 font-playfair text-base">
            Overall, while the usability testing feedback was positive, it's crucial that we address the font color issue to create an app that is not only easy to use but also accessible and appealing to a wide range of users. By doing so, we can enhance the overall user experience and ensure the app's success in attracting and retaining users.
          </p>
        </div>
      </Card>
    </div>
  );
};

export default Progress5;