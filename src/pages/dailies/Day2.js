import React from "react";
import { Card } from "antd";
import day2 from "../../assets/day2.png";

const Day2 = () => {
  const cardHeaderStyle = { height: "40px", paddingTop: "5px" };

  return (
    <div>
      <Card
        title={
          <h3 className="text-white text-2xl font-playfair">
            Day 2: 19 July 2023
          </h3>
        }
        headStyle={cardHeaderStyle}
        className="bg-black bg-opacity-30 text-white md:h-[70vh] lg:h-[90vh] h-auto md:w-180 p-4 
        overflow-y-scroll scrollbar scrollbar-thumb-scroll  scrollbar-track-transparent scrollbar-track-rounded-lg scrollbar-thumb-rounded-xl scrollbar-w-4"
      >
        <div className="w-lg mx-auto mb-16 rounded-lg border-2 overflow-hidden">
          <img
            src={day2}
            alt="Day 2 Image"
            className="w-full h-full object-contain rounded-md overflow-hidden"
          />
        </div>
        <div className="w-full bg-red p-5 relative border-2 ">
          <div className="w-48 h-10 -top-5 text-lg bg-blue border-2 absolute flex items-center justify-center font-playfair rounded-md">
            Information
          </div>
          <p className="mt-5 font-playfair text-base">
            <strong>A preview of what we have learned today from the meeting:</strong>
          </p>
          <ul className="mt-2 ml-5 font-playfair text-base list-disc">
            <li>Stakeholders:</li>
            <ul className="mt-2 ml-5 font-playfair text-base list-disc">
              <li>Board of Directors</li>
              <li>Funding Agencies</li>
              <li>The Annexe Communities’ Staff</li>
              <li>Community members in need of help</li>
              <li>Community members who want to organize events</li>
              <li>Community members who want to participate in events</li>
            </ul>
          </ul>
          <p className="mt-5 font-playfair text-base">
            Of these stakeholders, they vary in how much power and interest they have in the archival system. This is explained further below with the revised stakeholder map, after some context on the project’s details. Additionally, we empathized with each stakeholder’s perspective, through Empathy Maps, available here: Empathy Map - Google Slides (Reference info: Empathy Mapping: The First Step in Design Thinking).
          </p>
          <p className="mt-5 font-playfair text-base">
            Overview of Problem:
          </p>
          <ul className="mt-2 ml-5 font-playfair text-base list-disc">
            <li>
              Lacking an archival system, to document:
            </li>
            <ul className="mt-2 ml-5 font-playfair text-base list-disc">
              <li>
                Stories and history behind items in The Annexe Communities’ building, and murals/other collaborative works in the neighborhood that involved the community.
              </li>
              <li>
                Stories on how members of the community were positively impacted by the events organized by the Annexe Communities.
              </li>
              <li>
                Details on how events are organized, the story behind how each event was ideated, to inspire and empower members of the community to organize their own community-oriented events.
              </li>
            </ul>
          </ul>
          <p className="mt-5 font-playfair text-base">
            Target audience of archival system:
          </p>
          <ul className="mt-2 ml-5 font-playfair text-base list-disc">
            <li>
              Funding agencies:
              <ul className="mt-2 ml-5 font-playfair text-base list-disc">
                <li>
                  To see what type of activities their donations are going towards, view the impact of such activities.
                </li>
              </ul>
            </li>
            <li>
              Board of directors:
              <ul className="mt-2 ml-5 font-playfair text-base list-disc">
                <li>
                  To monitor the public image of The Annexe Communities.
                </li>
              </ul>
            </li>
            <li>
              Community members:
              <ul className="mt-2 ml-5 font-playfair text-base list-disc">
                <li>
                  To view stories and history on items in the building.
                </li>
                <li>
                  To view past and future activities.
                </li>
                <li>
                  To be inspired to organize community activities.
                </li>
                <li>
                  To know what goes on in The Annexe Communities.
                </li>
              </ul>
            </li>
          </ul>
          <p className="mt-5 font-playfair text-base">
            Existing methods of documentation:
          </p>
          <ul className="mt-2 ml-5 font-playfair text-base list-disc">
            <li>
              Facebook: 9 years’ worth of posts from 2019 and earlier were lost after COVID. Only for publishing event invites, photos from events.
            </li>
            <li>
              Website (outsourced): Only some parts of the website can be edited. Not everyone has access to share their stories, and it is a one-way flow of information.
            </li>
            <li>
              Email list: Lacks a sense of connection, as compared to physically handing out pamphlets.
            </li>
            <li>
              Twitter
            </li>
            <li>
              Mobile Application (outsourced): For event booking, not for sharing of stories or documenting how events are organized.
            </li>
          </ul>
          <p className="mt-5 font-playfair text-base">
            During today’s client meeting, we learned about the staff’s struggles in organizing and sharing archived pictures and documents. The existing platforms they use are not portable or suitable for community sharing. They are also not user-friendly enough and limit their ability to access and distribute their valuable content easily.
          </p>
          <p className="mt-5 font-playfair text-base">
            Our visit also highlighted the positive impact of the Annexe community in providing a sense of belonging for individuals facing hardships and fostering a supportive environment. These were at the core of what The Annexe Communities is trying to achieve through its work.
          </p>
          <p className="mt-5 font-playfair text-base">
            Going forward, we aim to develop a solution that improves the portability and accessibility of their archives, while creating a more inclusive and collaborative community platform for meaningful sharing and engagement among members, keeping in mind The Annexe Communities’ goals.
          </p>
          <p className="mt-5 font-playfair text-base">
            Some concerns we have are with regards to the scope of the project, due to the 2 weeks timeline. We want to clarify with Jane from The Annexe if we are able to narrow it down to focus on either of these 3 topics:
          </p>
          <ol className="mt-2 ml-5 font-playfair text-base list-decimal">
            <li>
              To show/provide information on items in The Annexe Communities’ building, and murals/other collaborative works in the neighborhood that involved the community.
            </li>
            <li>
              To receive information from the community on their stories or experience with events by The Annexe Communities.
            </li>
            <li>
              To document the process of organizing events.
            </li>
          </ol>
          <p className="mt-5 font-playfair text-base">
            From the discussion, we have reached a mutual understanding regarding the misunderstanding that occurred yesterday. The team has talked out details, and we hope that the remaining time the progress will be smooth and faster.
          </p>
          <p className="mt-5 font-playfair text-base">
            Tomorrow, our main goal is to narrow down our focus and start generating ideas. We want to create a collaborative and creative environment where everyone can contribute their innovative ideas. We will have brainstorming sessions and discussions to come up with three to five promising concepts.
          </p>
          <p className="mt-5 font-playfair text-base">
            Once we have these ideas, we will present them to Jane and ask for her feedback. Jane’s input is important because it will help us see where we can improve and which ideas have the most potential. We want to learn from her suggestions and use them to refine and strengthen our concepts.
          </p>
          <p className="mt-5 font-playfair text-base">
            By seeking and embracing feedback, we aim to continuously improve. We value constructive criticism as it helps us grow and develop better ideas. Jane’s feedback will guide us in deciding which ideas to pursue and which areas to focus on for improvement. Our ultimate goal is to create an environment that nurtures creativity and leads us to success.
          </p>
          <p className="mt-5 font-playfair text-base">
            Lastly, below is the refined stakeholder map after today’s meeting with the client.
          </p>
          <p className="mt-2 ml-5 font-playfair text-base">
            <strong>Keep Satisfied:</strong>
          </p>
          <ul className="mt-2 ml-8 font-playfair text-base list-disc">
            <li>
              Funding agencies: High power due to the ability to provide funds to the Annexe communities. Low interest as they are not interacting with the system directly.
            </li>
            <li>
              Board of Directors: High power due to authority in The Annexe Communities, especially over how funds are spent and the public image of The Annexe Communities. Low interest as they are not interacting with the system directly.
            </li>
          </ul>
          <p className="mt-2 ml-5 font-playfair text-base">
            <strong>Manage Closely:</strong>
          </p>
          <ul className="mt-2 ml-8 font-playfair text-base list-disc">
            <li>
              The Annexe Communities’ Staff:
              <ul className="mt-2 ml-8 font-playfair text-base list-disc">
                <li>
                  High power and interest on how the archival system is managed and implemented as they are responsible for updating the contents and ensuring the archives reach their target audience.
                </li>
              </ul>
            </li>
            <li>
              Community members who want to organize events:
              <ul className="mt-2 ml-8 font-playfair text-base list-disc">
                <li>
                  High power as they are the driving force behind community-led initiatives, which is an important part of what The Annexe Communities is trying to achieve and facilitate. Moderately high interest as they may first come to know about The Annexe Communities through the archival system and get inspired to organize events if the archives are well curated and send a compelling message.
                </li>
              </ul>
            </li>
            <li>
              Community members in need of help:
              <ul className="mt-2 ml-8 font-playfair text-base list-disc">
                <li>
                  High power and interest as these are the people The Annexe Communities is trying to reach. As such, they have influence over how the archival system is implemented, such that information available is accessible and attractive to them, and interest in the type of content that is available in the archives, as it may inform them if The Annexe Communities’ events are relevant to their needs.
                </li>
              </ul>
            </li>
          </ul>
          <p className="mt-2 ml-5 font-playfair text-base">
            <strong>Keep Informed:</strong>
          </p>
          <ul className="mt-2 ml-8 font-playfair text-base list-disc">
            <li>
              Community members who want to participate in events:
              <ul className="mt-2 ml-8 font-playfair text-base list-disc">
                <li>
                  High interest as they interact with the archives to find out about events, and the archives may be their first exposure to The Annexe. Moderate power as they can influence the medium in which the archives are available through, for instance, certain groups of people may be more inclined to physical mediums of sharing event information, such as posters, whereas others may be reached more effectively through the digital space. The Annexe Communities already has groups of people who regularly attend their events, hence this group of users’ power is moderate, instead of high, since even if the status quo is maintained (Facebook posts, physical posters, mobile app), there will still be participants in the events hosted.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </Card>
    </div>
  );
};

export default Day2;