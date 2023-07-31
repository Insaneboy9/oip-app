import React from "react";
import { Card } from "antd";
import finalProduct from "../../assets/finalProduct.png";
import annexeApp from "../../assets/annexeapp.png"; // Replace with the correct path to your QR code image

const FinalProduct = () => {
  const cardHeaderStyle = { height: "40px", paddingTop: "5px" };

  return (
    <div>
      <Card
        title={
          <h3 className="text-white text-2xl font-playfair">
            Final Product : Annexe-app
          </h3>
        }
        headStyle={cardHeaderStyle}
        className="bg-black bg-opacity-30 text-white md:h-[70vh] lg:h-[90vh] h-auto md:w-180 p-4 
        overflow-y-scroll scrollbar scrollbar-thumb-scroll  scrollbar-track-transparent scrollbar-track-rounded-lg scrollbar-thumb-rounded-xl scrollbar-w-4"
      >
        <div className="w-lg mx-auto mb-16 rounded-lg border-2 overflow-hidden">
          <img
            src={finalProduct}
            alt="Final Product Image"
            className="w-full h-full object-contain rounded-md overflow-hidden"
          />
        </div>
        <div className="w-full bg-red p-5 relative border-2 ">
          <div className="w-48 h-10 -top-5 text-lg bg-blue border-2 absolute flex items-center justify-center font-playfair rounded-md">
            Description
          </div>
          <div className="mt-5">
            <img
              src={annexeApp}
              alt="Annexe QR image"
              className="w-48 h-48 rounded-md overflow-hidden mx-auto"
            />
            <a
              href="https://urfrider.github.io/annexe-app/"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 mt-2 bg-green-500 text-white rounded-md font-playfair text-base text-center hover:bg-opacity-80 transition-all"
            >
              Click me to try out the Annexe-app
            </a>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default FinalProduct;