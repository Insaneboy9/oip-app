import React from "react";
import { Card } from "antd";

const Day9 = () => {
  const cardHeaderStyle = { height: "40px", paddingTop: "5px" };

  return (
    <div>
      <Card
        title={
          <h3 className="text-white text-2xl font-playfair">
            Day 9: 28 July 2023
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
            Today we have created a usability testing script:
          </p>
          <p className="mt-2 font-playfair text-base">
            <strong>Introduction:</strong><br />
            Moderator: Hi ______, thank you so much for joining us today. My name is Xueli, and I’m a researcher working on this usability test for the Annexe Communities. We are interested in learning about how older adults interact with the website and gather feedback to improve its usability.<br />
            Before we start, I want to assure you that we’re not testing you; we’re testing the website. Your feedback and insights are incredibly valuable to us as we want to make sure the website is easy and enjoyable to use for people like yourself.<br />
            During this session, feel free to take your time and explore the website. Please think aloud as you navigate, sharing your thoughts, concerns, and any difficulties you may encounter. There are no right or wrong answers; we want to learn from your genuine experiences.<br />
            Before we begin, do you have any questions, or is there anything you’d like to know before we start?
          </p>
          <p className="mt-2 font-playfair text-base">
            <strong>Task 1: Navigating to Picnic Events description</strong><br />
            Goal: To assess the website’s navigation<br />
            Scenario: You are interested in finding the “Wee Partick Picnic” page on the website.<br />
            Moderator: Please start by finding and navigating to the “Wee Partick Picnic” page. Let us know how you would typically go about doing this.
          </p>
          <p className="mt-2 font-playfair text-base">
            <strong>Task 2: Add Your Personal Story</strong><br />
            Goal: To evaluate the effectiveness of the website’s “Add Story” functionality.<br />
            Scenario: You want to share your personal experience or story related to the website’s topic. You can use pictures, videos, and text to add your story.<br />
            Moderator: Imagine you have a personal story or experience that you’d like to share with others on this website. Please use the “Add Story” button or any other method you prefer to share your story.<br />
            Moderator: As you add your story, please feel free to use pictures, videos, and text to make it more engaging and meaningful. We’re interested in understanding how easy or challenging it is for you to use this feature to share your story.
          </p>
          <p className="mt-2 font-playfair text-base">
            <strong>Post-Task Questions:</strong><br />
            Moderator: Thank you for completing the tasks. I have a few questions for you based on your experience.<br />
            How would you describe your overall experience using the website?<br />
            Were there any particular features or aspects of the website that you found easy to use?<br />
            Were there any aspects of the website that you found confusing or challenging?<br />
            Did you encounter any difficulties in finding specific information or completing tasks?<br />
            How would you rate the readability and clarity of the website’s content?
          </p>
          <p className="mt-2 font-playfair text-base">
            <strong>Closing:</strong><br />
            Moderator: We truly appreciate your participation and feedback today. Your insights will be incredibly valuable in improving the website’s usability for older adults.<br />
            Moderator: If you have any additional comments or suggestions, please feel free to share them with us. Once again, thank you for your time and valuable input.<br />
            Moderator: That concludes our session for today. Have a wonderful day!
          </p>
          <p className="mt-2 font-playfair text-base">
            We tested the website with our peers, and they found it easy to navigate. However, we need to include older adults in the testing to make sure it’s user-friendly for them too. We’ll attempt to reach out to older adults from around us for their feedback. Our goal is to create a platform that everyone can enjoy and find helpful. We value the input of our peers and older adults to make this possible.
          </p>
        </div>
      </Card>
    </div>
  );
};

export default Day9;