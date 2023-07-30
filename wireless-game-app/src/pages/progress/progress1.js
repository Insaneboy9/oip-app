import React from 'react';
import { Card } from 'antd';
import step1 from '../../assets/step1.jpg';

const Progress1 = () => {
  const cardHeaderStyle = { height: '40px', paddingTop: '5px' };

  return (
    <div>
      <Card
        title={<h3 className="text-white text-2xl">Step 1: Choosing project</h3>}
        headStyle={cardHeaderStyle}
        className="bg-black bg-opacity-30 text-white md:h-[70vh] lg:h-[80vh] h-auto md:w-180 p-4"
      >
        <div className="w-80 h-80 mx-auto mb-4"> 
          <img
            src={step1}
            alt="Step 1 Image"
            className="w-full h-full object-contain"
          />
        </div>
        <p>
          "The Annexe Communities Archives" project in Partick, Glasgow, empowers the community by
          preserving their stories and experiences. They promote collaboration, ensuring every voice
          is valued and no one is left out. The organization cares about the community's well-being,
          fostering social connections and resilience among diverse members. We want to be part of
          this initiative to preserve community history and create a strong sense of belonging among
          members.
        </p>
      </Card>
    </div>
  );
};

export default Progress1;