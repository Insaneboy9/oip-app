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
                  Creating the website "The Annexe Communities Archives" has
                  been an enlightening journey that has taught our team valuable
                  lessons at every phase of development. From concept to
                  completion, we encountered various challenges and made
                  significant improvements to ensure the success and impact of
                  the final product.
                </p>
                <p className="mt-5 font-playfair text-base">
                  We realized the necessity of addressing accessibility for all
                  users from the initial planning phase. We made the website
                  easy to navigate for users of all ages and technological
                  backgrounds by stressing responsive design and usability best
                  practices. We discovered that establishing sufficient contrast
                  between text and backdrop was crucial for readability through
                  usability testing, prompting us to solve this issue right
                  away.
                </p>
                <p className="mt-5 font-playfair text-base">
                  The decision to include interactive tablets/kiosks at The
                  Annexe's site was a watershed moment, highlighting the
                  project's dedication to diversity. We broadened the platform's
                  reach to additional community members by giving alternate
                  means of accessing the website for those without cellphones,
                  promoting a greater sense of belonging.
                </p>
                <p className="mt-5 font-playfair text-base">
                  We learned the importance of striking a balance between
                  community involvement and content safety while moderating
                  user-generated content. Implementing a vetting procedure
                  enabled active involvement while preserving control over the
                  released material. We discovered that community participation
                  and monitoring were critical in establishing a responsible and
                  inclusive digital world.
                </p>
                <p className="mt-5 font-playfair text-base">
                  Using Figma for prototyping sped up our design process,
                  allowing us to discover and address usability issues early on.
                  The usage of interactive prototypes promoted better team
                  communication, allowing for faster iterations and overall
                  improvements. This experience demonstrated the importance of
                  investing in cutting-edge design tools for collaborative
                  development.
                </p>
                <p className="mt-5 font-playfair text-base">
                  Engaging directly with Jane and the community proved
                  invaluable in shaping the website's features and
                  functionality. We learned that involving end-users from the
                  beginning is essential for creating a platform that truly
                  addresses their needs and preferences. This collaborative
                  approach ensured that the project remained relevant and
                  meaningful to the community it serves.
                </p>
                <p className="mt-5 font-playfair text-base">
                  Reflecting on the project, we recognize that we could have
                  benefited from conducting more extensive user testing.
                  Engaging a broader range of community members would have
                  provided deeper insights and potentially revealed additional
                  areas for improvement. We understand the significance of
                  comprehensive user testing and will prioritize it in future
                  projects to gain a more accurate understanding of our target
                  audience's requirements.
                </p>
                <p className="mt-5 font-playfair text-base">
                  The decision to part ways with 5A taught us the importance of
                  alignment in vision and working styles within a team. It was a
                  tough moment, but it led to a renewed focus on building a
                  flexible platform that could encompass diverse topics and
                  better serve Jane's needs. This experience highlighted the
                  value of collaboration and finding the right partners for a
                  project's success.
                </p>
                <p className="mt-5 font-playfair text-base">
                  As we move forward, we carry with us the knowledge that "The
                  Annexe Communities Archives" website is more than just a
                  digital platform. It is a testament to the power of community
                  empowerment, historical preservation, and fostering a sense of
                  belonging. The journey has reaffirmed our dedication to
                  creating meaningful projects and making a difference in
                  people's lives. We are grateful for the opportunity to
                  contribute to such a worthwhile endeavor and look forward to
                  the transformative effects it will have on the community it
                  serves.
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
