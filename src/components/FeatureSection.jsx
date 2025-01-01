import React from "react";
import { features } from "../constants";

const FeatureSection = () => {
  {features && features.length > 0 ? (
    features.map((feature, index) => (
      <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
        <div className="flex">
          <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-100 text-orange-700 justify-center items-center rounded-full">
            {feature.icon}
          </div>
          <div>
            <h5 className="mt-1 mb-6 text-xl">{feature.text}</h5>
            <p className="text-md p-2 mb-20 text-neutral-500">
              {feature.description}
            </p>
          </div>
        </div>
      </div>
    ))
  ) : (
    <p className="text-center mt-10">No features available at the moment.</p>
  )}
  return (

    
    <div  className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
      <div className="text-center">
        <span className="text-orange-500 rounded-full h-6 text-lg font-medium px-1 py-1 uppercase">
          Empowering Skills for Every Weaver
        </span>
        <h2 className="sm:text-3xl lg:text-4xl mt-5 lg:mt-10 tracking-wide">
          ஒவ்வொரு நெசவாளருக்கும்{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            திறன்களை அதிகாரப்படுத்துதல்
          </span>
        </h2>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
            <div className="flex">
              <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-100 text-orange-700 justify-center items-center rounded-full">
                {feature.icon}
              </div>
              <div>
                <h5 className="mt-1 mb-6 text-xl">{feature.text}</h5>
                <p className="text-md p-2 mb-20 text-neutral-500">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
