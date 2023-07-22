import React from 'react';
import { Card } from 'antd';

const Progress1 = () => {
  const cardHeaderStyle = { height: '40px', paddingTop: '5px' };

  return (
    <div>
      <Card
        title={<h3 className="text-white text-2xl">Progress step 1</h3>}
        headStyle={cardHeaderStyle}
        className="bg-black bg-opacity-30 text-white md:h-[70vh] lg:h-[80vh] h-auto md:w-180 p-4"
      >
        <p>This is the content of the card.</p>
      </Card>
    </div>
  );
};

export default Progress1;