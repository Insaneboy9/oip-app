import React from "react";
import Navbar from "../components/Navbar";
import { Card } from "antd";

const Reflection = () => {
  const cardHeaderStyle = { height: "40px", paddingTop: "5px" };

  return (
    <div className="h-screen w-screen relative bg-ufo bg-cover justify-center flex items-center">
      <Navbar />
      <div className="w-full h-full md:w-4/5 lg:w-3/5 xl:w-2/5 mx-auto">
        <div className="swiper-container h-52rem py-8 relative">
          <div>
            <Card
              title={
                <h3 className="text-white text-2xl font-playfair">
                  Reflection
                </h3>
              }
              headStyle={cardHeaderStyle}
              className="bg-black bg-opacity-30 text-white md:h-[70vh] lg:h-[90vh] h-auto md:w-180 p-4 
        overflow-y-scroll scrollbar scrollbar-thumb-scroll  scrollbar-track-transparent scrollbar-track-rounded-lg scrollbar-thumb-rounded-xl scrollbar-w-4"
            >
              <div className="w-full bg-red p-5 relative border-2 mt-5">
                <div className="w-48 h-10 -top-5 text-lg bg-blue border-2 absolute flex items-center justify-center font-playfair rounded-md">
                  Description
                </div>
                <p className="mt-5 font-playfair text-base">
                  This OIP journey has been quite eventful. First, we learned about the Annexe communities and their dedication to improving people's lives around them. Through the need-finding process, we realised that the products we create might face similar issues as those outsourced by the Annexe – being too restrictive. Hence, our goal is to develop a flexible and user-friendly platform.
                </p>
                <p className="mt-5 font-playfair text-base">
                  We understood the importance of balancing community involvement and content safety while moderating user-generated content. By implementing a vetting procedure, we enabled active community participation while maintaining control over the content released. We also discovered that community participation and monitoring play a crucial role in creating a responsible and inclusive digital world.
                </p>
                <p className="mt-5 font-playfair text-base">
                  During the prototyping phase, we learned the difference between lowfi and hifi prototypes, which helped us make improvements from the early stages of ideation to before the website development.
                </p>
                <p className="mt-5 font-playfair text-base">
                  A unique experience occurred when we split into two teams in the middle of the project. From the beginning, we noticed that we had different mental models, and this made us worried about the project's outcome. We feared that we wouldn't be able to deliver a product. Additionally, we felt out of the loop, as updates were not always communicated to us, and sometimes the content we drafted was changed without discussion. The split turned out to be beneficial since our working styles and ideas were significantly different. We are thrilled that we managed to execute our ideas and create the final product website. We believe this will greatly benefit Jane, as she will have access to a nearly fully functional product that can help her secure more funding. This experience has taught us the value of collaboration and finding the right partners for a project's success. Effective communication and understanding each other's perspectives are crucial in achieving our goals.
                </p>
                <p className="mt-5 font-playfair text-base">
                  In conclusion, our OIP journey has been a remarkable learning experience. We have gained insights into the importance of flexibility, community involvement, and responsible content moderation. Through collaboration and finding the right partners, we successfully developed a user-friendly platform that aligns with our vision. As we move forward, we are excited to continue making a positive impact and contributing to a more inclusive digital world.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reflection;