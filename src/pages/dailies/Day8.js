import React from "react";
import { Card } from "antd";

const Day8 = () => {
  const cardHeaderStyle = { height: "40px", paddingTop: "5px" };

  return (
    <div>
      <Card
        title={
          <h3 className="text-white text-2xl font-playfair">
            Day 8: 27 July 2023
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
            Today, we reviewed the materials provided by Jane, which helped us understand how The Annexe Communities’ work impacts people’s lives. We are now organizing and planning how to showcase this information effectively.
          </p>
          <p className="mt-2 font-playfair text-base">
            After listening to our peers’ valuable feedback, we made significant improvements to the website prototype. Thanks to their insights, we focused on enhancing the user experience. One major improvement was streamlining the navigation process. We added a home button to make it easier for users to go back, considering we have fewer pages. We also worked on the layout, making the information flow more natural and logical. This way, users can easily find what they’re looking for without any guesswork. We added visual cues and intuitive icons to guide them throughout the website.
          </p>
          <p className="mt-2 font-playfair text-base">
            Our main goal was to make the website user-friendly for everyone, regardless of their technical expertise. Now, people of all backgrounds can access information effortlessly. These changes have led to a positive first impression on visitors, encouraging them to explore and engage with the content more deeply.
          </p>
          <p className="mt-2 font-playfair text-base">
            In conclusion, the valuable feedback we received helped us refine the prototype. With enhanced functionalities, intuitive design, and simplicity, we believe the website will make a meaningful impact on the lives of its users, in line with the annexe’s mission.
          </p>
          <p className="mt-2 font-playfair text-base">
            Tomorrow, we’ll focus on making our website better based on helpful feedback. We want to create a website that’s easy to use and looks great, matching our goals. We’ll carefully look at the feedback we received and fix any problems to improve how the website works. Our team will work together to make sure the improvements are thorough. We’ll pay attention to things like how the website looks on different devices, how easy it is to move around the site, and how quickly it loads. We’ll also check for any hidden problems and test the changes we make to make sure everything works smoothly. We’ll keep listening to feedback and regularly check how the website is doing to keep making it even better.
          </p>
        </div>
      </Card>
    </div>
  );
};

export default Day8;