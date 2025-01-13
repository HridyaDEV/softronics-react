import React from 'react';

function Features({ feature1, feature1Desc, feature1Icon, feature2, feature2Desc, feature2Icon, feature3, feature3Desc, feature3Icon }) {
    return (
      <div className="flex justify-evenly items-center flex-col lg:flex-row mt-5 ">
        <div className="flex flex-col items-center text-center border w-1/4">
          <div className="bg-red-600 rounded-full p-4 mb-5 mt-5">
            {feature1Icon}
          </div>
          <h4 className="font-semibold text-lg">{feature1}</h4>
          <p>{feature1Desc}</p>
        </div>
        <div className="flex flex-col items-center text-center border w-1/4">
          <div className="bg-red-600 rounded-full p-4 mb-5 mt-5">
            {feature2Icon}
          </div>
          <h4 className="font-semibold text-lg">{feature2}</h4>
          <p>{feature2Desc}</p>
        </div>
        <div className="flex flex-col items-center text-center border w-1/4">
          <div className="bg-red-600 rounded-full p-4 mb-5 mt-5">
            {feature3Icon}
          </div>
          <h4 className="font-semibold text-lg">{feature3}</h4>
          <p>{feature3Desc}</p>
        </div>
      </div>
    );
  }
  
  export default Features;
  
